# home/urls.py
from django.urls import path
from .views import Signup

urlpatterns = [
    path('signup',Signup,name='Signup')
]