from django.shortcuts import render
from django.http import JsonResponse
from .models import Personal,Tokens,bigSales,Products,Cart,CartItem,Wishlist,WishlistItem
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.views.decorators.csrf import csrf_exempt
import json
import jwt
from django.views import View
from django.core.serializers import serialize
from django.conf import settings

@csrf_exempt
def Signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')  

        personal = Personal.objects.create(
            name = name,
            email = email,
            password = password
        )

        refresh = RefreshToken.for_user(personal)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)

        Tokens.objects.create(
            user=personal,
            access_token=access_token,
            refresh_token=refresh_token
        )

        return JsonResponse({
            'access_token':access_token,
            'refresh_token':refresh_token
        })
    
    return JsonResponse({"detail":"invalid method"},status=405)


@csrf_exempt
def Login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        try : 
            personal = Personal.objects.get(email=email)

            if password == personal.password:
                
                refresh = RefreshToken.for_user(personal)
                access_token = str(refresh.access_token)
                refresh_token = str(refresh)

                # Create or update the tokens in the Tokens model
                Tokens.objects.update_or_create(
                    user=personal,
                    defaults={
                        'access_token': access_token,
                        'refresh_token': refresh_token
                    }
                )

                return(JsonResponse({
                    'access_token' : access_token,
                    'refresh_token' : refresh_token
                }))
            else : return(JsonResponse({
                'invalid email or password'
            },status=401))
        
        except Personal.DoesNotExist:
            return(JsonResponse({
                'invalid email or password'
            },status=401))
    return JsonResponse({
        'Invalid request method'
    },status=405)

@csrf_exempt
def getUserData(request):
    if request.method == 'POST' or request.method =='PUT':
        try:
            data = json.loads(request.body.decode('utf-8'))
            print(data)
            return JsonResponse({'got data':data},status=200)
        except json.JSONDecodeError as e :
            return JsonResponse({'invalid json format'},status=400)
    # Access the token from the cookie
    access_token = request.COOKIES.get('access_token')

    if not access_token:
        return JsonResponse({'error': 'Missing token'}, status=400)

    try:
        token = Tokens.objects.get(access_token=access_token)
        user = token.user
    except Tokens.DoesNotExist:
        return JsonResponse({'error': 'Invalid token'}, status=401)
    # Serializing the user data
    user_data = {
        'id': user.id,
        'name': user.name,
        'email': user.email,
        'gender':user.gender,
        'birthday': user.birthday.strftime('%Y-%m-%d') if user.birthday else None,
    }

    return JsonResponse({'data': user_data}, status=200)

def bigSalesProducts(request):
    if request.method == "GET":
        # Fetch all records
        data = bigSales.objects.all()
        
        # Convert QuerySet to JSON serializable format
        data_json = serialize('json', data)
        
        # Return JSON response
        return JsonResponse(json.loads(data_json), safe=False)
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)

def getProducts(request):
        if request.method == "GET":
            # Fetch all records
            data = Products.objects.all()
        
            # Convert QuerySet to JSON serializable format
            data_json = serialize('json', data)
        
            # Return JSON response
            return JsonResponse(json.loads(data_json), safe=False)
    
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def searchResults(request):
    if request.method == "GET":
        # Get the search query from the request parameters
        search_query = request.GET.get('searchQuery', '')
        print(search_query)

        # Filter products based on the search query
        data = Products.objects.filter(name__icontains=search_query)

        # Convert QuerySet to JSON serializable format
        data_json = serialize('json', data)

        # Return JSON response
        return JsonResponse(json.loads(data_json), safe=False)
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)


class CartDetailView(View):
    def get(self, request, *args, **kwargs):
        # Extract token from cookies
        token = request.COOKIES.get('access_token')

        if not token:
            return JsonResponse({'detail': 'No token provided.'}, status=400)

        try:
            # Decode the token
            decoded_token = jwt.decode(token, settings.SIMPLE_JWT['SIGNING_KEY'], algorithms=['HS256'])
            user_id = decoded_token.get('user_id')

            if not user_id:
                return JsonResponse({'detail': 'Invalid token.'}, status=401)

            # Retrieve the user
            try:
                user = Personal.objects.get(id=user_id)
            except Personal.DoesNotExist:
                return JsonResponse({'detail': 'User not found.'}, status=404)

            # Retrieve the user's cart
            try:
                cart = Cart.objects.get(user=user)
            except Cart.DoesNotExist:
                return JsonResponse({'detail': 'Cart not found.'}, status=404)

            # Fetch cart items
            cart_items = CartItem.objects.filter(cart=cart)

            # Prepare cart data
            cart_data = {
                'cart_id': cart.id,
                'created_at': cart.created_at,
                'updated_at': cart.updated_at,
                'items': [
                    {
                        'product_id': item.product.id,
                        'product_name': item.product.name,
                        'quantity': item.quantity,
                        'added_at': item.added_at
                    }
                    for item in cart_items
                ]
            }

            return JsonResponse(cart_data, safe=False, status=200)

        except jwt.ExpiredSignatureError:
            return JsonResponse({'detail': 'Token has expired.'}, status=401)
        except jwt.InvalidTokenError:
            return JsonResponse({'detail': 'Invalid token.'}, status=401)
        

class WishlistDetailView(View):
    def get(self, request, *args, **kwargs):
        # Extract token from cookies
        token = request.COOKIES.get('access_token')

        if not token:
            return JsonResponse({'detail': 'No token provided.'}, status=400)

        try:
            # Decode the token
            decoded_token = jwt.decode(token, settings.SIMPLE_JWT['SIGNING_KEY'], algorithms=['HS256'])
            user_id = decoded_token.get('user_id')

            if not user_id:
                return JsonResponse({'detail': 'Invalid token.'}, status=401)

            # Retrieve the user
            try:
                user = Personal.objects.get(id=user_id)
            except Personal.DoesNotExist:
                return JsonResponse({'detail': 'User not found.'}, status=404)

            # Retrieve the user's wishlist
            try:
                wishlist = Wishlist.objects.get(user=user)
            except Wishlist.DoesNotExist:
                return JsonResponse({'detail': 'Wishlist not found.'}, status=404)

            # Fetch wishlist items
            wishlist_items = WishlistItem.objects.filter(wishlist=wishlist)

            # Prepare wishlist data
            wishlist_data = {
                'wishlist_id': wishlist.id,
                'created_at': wishlist.created_at,
                'updated_at': wishlist.updated_at,
                'items': [
                    {
                        'product_id': item.product.id,
                        'product_name': item.product.name,
                        'quantity': item.quantity,
                        'added_at': item.added_at
                    }
                    for item in wishlist_items
                ]
            }

            return JsonResponse(wishlist_data, safe=False, status=200)

        except jwt.ExpiredSignatureError:
            return JsonResponse({'detail': 'Token has expired.'}, status=401)
        except jwt.InvalidTokenError:
            return JsonResponse({'detail': 'Invalid token.'}, status=401)

@csrf_exempt       
def AddWishlist(request):
    print("Request method:", request.method)
    print("Request body:", request.body)
    print("Request headers:", request.headers)
    if request.method == 'POST':
        access_token = request.COOKIES.get('access_token')
        data = json.loads(request.body)
        product_id = data.get('productId')
        if not access_token:
            return JsonResponse({'Error':'Missing access token'},status=405)
        try:
           token = Tokens.objects.get(access_token=access_token)
           user = token.user
        except Tokens.DoesNotExist:
            return JsonResponse({'error': 'Invalid token'}, status=401)
        try : 
            product = Products.objects.get(id=product_id)
            wishlist = Wishlist.objects.get_or_create(user=user)
            WishlistItem.objects.create(wishlist=wishlist, product=product)
            return JsonResponse({'success': True}, status=200)
        except Products.DoesNotExist as error :
            return JsonResponse({'error adding item to cart':error},status=404)
    return JsonResponse({'Error':'Invalid request method'},status=405)
