from django.shortcuts import render
from django.http import JsonResponse
from .models import Personal,Tokens,bigSales,Products
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.views.decorators.csrf import csrf_exempt
import json
from django.core.serializers import serialize

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


def getUserData(request):
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