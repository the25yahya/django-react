# home/urls.py
from django.urls import path
from .views import Signup,Login,getUserData

urlpatterns = [
    path('signup',Signup,name='Signup'),
    path('login',Login,name='Login'),
    path('userData',getUserData,name='userData')
]