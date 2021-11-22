<template>
  <div class="container">
    <b-img lazy v-for="movie in movies" :key="movie.poster_path" :src="`${movie.poster_path}`" @click="[movieClick(movie.id), goToMovie()]"
    class="m-2" height="320" width="200" />
  </div>
</template>

<script>
import MovieDetail from '@/views/movie/MovieDetail'
import { mapState, mapActions } from 'vuex'

export default {
 name: 'MovieList',
 conponent: {
   MovieDetail,
 },
  computed: {
    ...mapState ([
      'movies',
    ])
  },
  methods: {
    goToMovie() {
      this.$router.push({ name: 'MovieDetail' })
    },
    ...mapActions([
      'getMovies',
      'movieClick',
    ]),
  }
}
</script>

<style>

</style>