# Generated by Django 5.1 on 2024-08-29 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_personal_birthday'),
    ]

    operations = [
        migrations.CreateModel(
            name='bigSales',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=25)),
                ('brand', models.CharField(max_length=50)),
                ('price', models.IntegerField()),
                ('xs', models.BooleanField()),
                ('s', models.BooleanField()),
                ('m', models.BooleanField()),
                ('l', models.BooleanField()),
                ('xl', models.BooleanField()),
            ],
            options={
                'db_table': 'bigSales',
            },
        ),
    ]
