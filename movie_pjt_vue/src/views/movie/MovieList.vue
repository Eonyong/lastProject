<template>
<div id="MovieList">
  <div class="container" @scroll="debounceA">
    <b-img v-for="movie in movies" :key="movie.poster_path" :src="`${movie.poster_path}`"
    class="m-2" height="320" width="200" />
  </div>
  </div>
</template>

<script>
import MovieDetail from '@/views/movie/MovieDetail'
import { mapState } from 'vuex'
import debounce from 'lodash/debounce'

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
    debounceA: debounce(
      mapState, 500
    )
  }
}
</script>

<style>

</style>