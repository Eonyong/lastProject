# Generated by Django 3.2.9 on 2021-11-17 14:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='like_users',
            new_name='claps',
        ),
        migrations.RemoveField(
            model_name='review',
            name='dislike_users',
        ),
    ]
