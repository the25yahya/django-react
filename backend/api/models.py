from django.db import models

#user models################
class Personal(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)
    email = models.CharField(max_length=250,null=False)
    password = models.CharField(max_length=50,null=False)
    birthday = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10)

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
    
    class Meta:
        db_table = 'bigSales'

