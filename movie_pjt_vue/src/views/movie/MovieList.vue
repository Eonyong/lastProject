<template>
  <div class="container">
    <b-img v-for="movie in movies" :key="movie.poster_path" :src="'https://image.tmdb.org/t/p/w185' + `${movie.poster_path}`"
    class="m-2" height="320" width="200" />
  </div>
</template>

<script>
import MovieDetail from '@/views/movie/MovieDetail'
import { mapState } from 'vuex'

export default {
 name: 'MovieList',
 conponent: {
   MovieDetail,
 },
  computed: {
    ...mapState ([
      'movies',
    ])
  }
}
</script>

<style>

</style>