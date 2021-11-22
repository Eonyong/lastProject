<template>
  <div class="container">
    <!-- datail page movie backdrop image -->
    <img :src="movieId.data.backdrop_path" alt="" width="100%">
    <section class="my-3">
      <div class="text-white">
        <div class="d-flex justify-content-between">
          <p>{{ movieId.data.release_date }}</p>
          <h1>영화 제목: {{ movieId.data.title }}</h1>
          <img v-if="!movieId.data.adult" class="bg-white" width="5%" :src="require(`@/assets/adult_sticker.png`)" alt="">
        </div>
        <hr>
        <h1>줄거리</h1>
          <!-- 18 over movie case icon -->
        <br>
        <!-- 줄거리 -->
        <h2 style="text-color: white;">{{ movieId.data.overview }}</h2>

      </div>
      <!-- 확인용 -->
      <h3>{{ movieId }}</h3>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
 name: 'MovieDetail',
 methods: {
 },
 computed: {
   ...mapState([
     'movieId'
   ])
 }
}
</script>

<style>

</style>