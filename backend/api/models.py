from django.db import models

#user models################
class Personal(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)
    email = models.CharField(max_length=250,null=False)
    password = models.CharField(max_length=50,null=False)
    birthday = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10)
    notifications = models.BooleanField(default=False)
    Country = models.CharField(max_length=25,default='usa')

    class Meta:
        db_table = 'personal'

class Tokens(models.Model):
    id = models.AutoField(primary_key=True)
    access_token = models.CharField(max_length=500, null=False, blank=False)
    refresh_token = models.CharField(max_length=500, null=False, blank=False)
    user = models.ForeignKey(Personal, on_delete=models.CASCADE, null=False, blank=True, related_name='tokens')

    class Meta:
        db_table = 'tokens'

# products #####################
class Products(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500,default="")
    img1= models.CharField(max_length=500,default="")
    img2= models.CharField(max_length=500,default="")
    img3= models.CharField(max_length=500,default="")
    img4= models.CharField(max_length=500,default="")
    img5= models.CharField(max_length=500,default="")
    brand = models.CharField(max_length=50)
    price = models.IntegerField(null=False)
    xs = models.BooleanField(default=True)
    s = models.BooleanField(default=True)
    m = models.BooleanField(default=True)
    l = models.BooleanField(default=True)
    xl = models.BooleanField(default=True)
    tag = models.CharField(max_length=15,default="New")
    type = models.CharField(max_length=25,default="")
    
    class Meta:
        db_table = 'Products'


class bigSales(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    img1= models.CharField(max_length=500,default="")
    img2= models.CharField(max_length=500,default="")
    img3= models.CharField(max_length=500,default="")
    img4= models.CharField(max_length=500,default="")
    img5= models.CharField(max_length=500,default="")
    brand = models.CharField(max_length=50)
    price = models.IntegerField(null=False)
    xs = models.BooleanField()
    s = models.BooleanField()
    m = models.BooleanField()
    l = models.BooleanField()
    xl = models.BooleanField()
    tag = models.CharField(max_length=15,default="New")
    type = models.CharField(max_length=25,default="Part of Set")
    filter = models.CharField(max_length=20,default="women")
    
    class Meta:
        db_table = 'bigSales'

class newCollection(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    img1= models.CharField(max_length=500,default="")
    img2= models.CharField(max_length=500,default="")
    img3= models.CharField(max_length=500,default="")
    img4= models.CharField(max_length=500,default="")
    img5= models.CharField(max_length=500,default="")
    brand = models.CharField(max_length=50)
    price = models.IntegerField(null=False)
    xs = models.BooleanField()
    s = models.BooleanField()
    m = models.BooleanField()
    l = models.BooleanField()
    xl = models.BooleanField()
    tag = models.CharField(max_length=15,default="New")
    type = models.CharField(max_length=25,default="Part of Set")
    
    class Meta:
        db_table = 'newCollection'


class winterCollection(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    img1= models.CharField(max_length=500,default="")
    img2= models.CharField(max_length=500,default="")
    img3= models.CharField(max_length=500,default="")
    img4= models.CharField(max_length=500,default="")
    img5= models.CharField(max_length=500,default="")
    brand = models.CharField(max_length=50)
    price = models.IntegerField(null=False)
    xs = models.BooleanField()
    s = models.BooleanField()
    m = models.BooleanField()
    l = models.BooleanField()
    xl = models.BooleanField()
    tag = models.CharField(max_length=15,default="New")
    type = models.CharField(max_length=25,default="Part of Set")
    
    class Meta:
        db_table = 'winterCollection'

class Cart(models.Model):
    user = models.ForeignKey(Personal, on_delete=models.CASCADE, null=False, blank=True, related_name='Cart')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cart {self.id} for {self.user.name}"

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity} x {self.product.name} in Cart {self.cart.id}"
    
class Wishlist(models.Model):
    user = models.ForeignKey(Personal, on_delete=models.CASCADE, null=False, blank=True, related_name='Wishlist')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Wishlist {self.id} for {self.user.name}"

class WishlistItem(models.Model):
    wishlist = models.ForeignKey(Wishlist, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity} x {self.product.name} in Wishlist {self.wishlist.id}"