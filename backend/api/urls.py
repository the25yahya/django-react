# home/urls.py
from django.urls import path
from .views import Signup,Login,getUserData,bigSalesProducts,getProducts,searchResults

urlpatterns = [
    path('signup',Signup,name='Signup'),
    path('login',Login,name='Login'),
    path('userData',getUserData,name='userData'),
    path('bigSales',bigSalesProducts,name='bigSales'),
    path('products',getProducts,name='products'),
    path('search',searchResults,name='search')
]