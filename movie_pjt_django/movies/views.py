from movies import serializers
from movies.models import Movie, Genre
from movies.serializers import MovieSerializer, MovieListSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from django.contrib.auth import get_user_model
import random
from rest_framework import permissions




class MovieList(APIView):

    def get(self, request, format=None):
        # genres = Genre.objects.all()
        movies = Movie.objects.all()
        # genre_list = random.sample(range(len(genres)), 10)
        # random_movies=[]
        # for genre in genre_list:
        #     i
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)

    # def post(self, request, format=None):
    #     serializer = MovieSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save(owner=request.user)
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MovieDetail(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def get_object(self, pk):
        try:
            return Movie.objects.get(pk=pk)
        except Movie.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        movie = self.get_object(pk)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)


class MovieLike(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def post(self, request, pk):
        movie = generics.get_object_or_404(Movie, pk = pk)
        if movie.like_users.filter(pk=request.user.pk).exists():
            movie.like_users.remove(request.user)
        else:
            if movie.dislike_users.filter(pk=request.user.pk).exists():
                movie.dislike_users.remove(request.user)
            movie.like_users.add(request.user)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)


class MovieDislike(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def post(self, request, pk):
        movie = generics.get_object_or_404(Movie, pk = pk)
        if movie.dislike_users.filter(pk=request.user.pk).exists():
            movie.dislike_users.remove(request.user)
        else:
            if movie.like_users.filter(pk=request.user.pk).exists():
                movie.like_users.remove(request.user)
            movie.dislike_users.add(request.user)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)


    # def put(self, request, pk, format=None):
    #     movie = self.get_object(pk)
    #     # if request.
    #     serializer = MovieSerializer(movie, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def delete(self, request, pk, format=None):
    #     snippet = self.get_object(pk)
    #     snippet.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)


# class UserList(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# class UserDetail(generics.RetrieveAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer