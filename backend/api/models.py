from django.db import models


class Personal(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)
    email = models.CharField(max_length=250,null=False)
    password = models.CharField(max_length=50,null=False)
    birthday = models.DateField
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