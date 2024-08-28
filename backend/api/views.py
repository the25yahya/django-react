from django.shortcuts import render
from .models import Tokens
from django.http import JsonResponse
from .models import Personal
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def Signup(request):
    if request.method == 'POST':
        name = request.post.get('username')
        email = request.post.get('email')
        password = request.post.get('password')  

        personal = Personal.objects.create(
            name = name,
            email = email,
            password = password
        )

        refresh = RefreshToken.for_user(personal)
        access_token = str(refresh.accss_token)
        refesh_token = str(refresh)

        Tokens.objects.create(
            user=personal,
            access_token=access_token,
            refesh_token=refesh_token
        )

        return JsonResponse({
            'access_token':access_token,
            'refresh_token':refesh_token
        })
    
    return JsonResponse({"detail":"invalid method"},status=405)