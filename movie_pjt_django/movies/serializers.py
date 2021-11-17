from rest_framework import serializers
from django.contrib.auth.models import User

from movies.models import Movie

class MovieSerializer(serializers.ModelSerializer):


  # class ReviewSerializer()
  class Meta:
    model = Movie
    fields = '__all__'