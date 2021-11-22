# Generated by Django 3.2.9 on 2021-11-19 18:18

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('genre_id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('adult', models.BooleanField(null=True)),
                ('backdrop_path', models.CharField(max_length=255, null=True)),
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('original_language', models.CharField(max_length=50, null=True)),
                ('original_title', models.CharField(max_length=255, null=True)),
                ('overview', models.TextField(null=True)),
                ('popularity', models.FloatField(null=True)),
                ('poster_path', models.TextField(null=True)),
                ('release_date', models.DateTimeField(null=True)),
                ('title', models.CharField(max_length=255, null=True)),
                ('video', models.BooleanField(null=True)),
                ('vote_average', models.FloatField(null=True)),
                ('vote_count', models.IntegerField(null=True)),
                ('dislike_users', models.ManyToManyField(related_name='dislike_movies', to=settings.AUTH_USER_MODEL)),
                ('genre_ids', models.ManyToManyField(related_name='movies', to='movies.Genre')),
                ('like_users', models.ManyToManyField(related_name='like_movies', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
