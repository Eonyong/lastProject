# Generated by Django 3.2.9 on 2021-11-13 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='backdrop_path',
            field=models.CharField(max_length=255, null=True),
        ),
    ]