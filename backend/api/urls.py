# home/urls.py
from django.urls import path
from .views import Signup,Login,getUserData,bigSalesProducts,getProducts,searchResults,AddWishlist,CartDetailView,WishlistDetailView

urlpatterns = [
    path('signup',Signup,name='Signup'),
    path('login',Login,name='Login'),
    path('userData',getUserData,name='userData'),
    path('bigSales',bigSalesProducts,name='bigSales'),
    path('products',getProducts,name='products'),
    path('search',searchResults,name='search'),
    path('add-wishlist',AddWishlist,name='add-wishlist'),
    path('cart', CartDetailView.as_view(), name='cart-detail'),
    path('wishlist', WishlistDetailView.as_view(), name='wishlist-detail'),
]