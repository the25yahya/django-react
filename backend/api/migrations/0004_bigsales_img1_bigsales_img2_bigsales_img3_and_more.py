# Generated by Django 5.1 on 2024-08-29 23:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_bigsales'),
    ]

    operations = [
        migrations.AddField(
            model_name='bigsales',
            name='img1',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AddField(
            model_name='bigsales',
            name='img2',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AddField(
            model_name='bigsales',
            name='img3',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AddField(
            model_name='bigsales',
            name='img4',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AddField(
            model_name='bigsales',
            name='img5',
            field=models.CharField(default='', max_length=300),
        ),
    ]
