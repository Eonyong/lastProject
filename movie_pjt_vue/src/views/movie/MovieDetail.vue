<template>
  <div class="container">
    <!-- datail page movie backdrop image -->
    <img :src="movieId.data.backdrop_path" alt="" width="100%">
    <section class="my-3">
      <div class="text-white">
        <div class="d-flex justify-content-between">
          <div>
            <h1>{{ movieId.data.title }}</h1>
            <!-- <b-dd-text v-model="datetime"> {{ movieId.data.release_date }}</b-dd-text> -->
          </div>
          <img v-if="!movieId.data.adult" class="bg-white" width="5%" height="5%" :src="require(`@/assets/adult_sticker.png`)" alt="">
        </div>
        <hr>
        <h2>줄거리</h2>
          <!-- 18 over movie case icon -->
        <br>
        <!-- 줄거리 -->
        <h3 style="text-color: white;">{{ movieId.data.overview }}</h3>

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