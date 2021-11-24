<template>
  <div id="MovieDetail" class="container">
    <div class="container">
      <!-- datail page movie backdrop image -->
      <img :src="movie.backdrop_path" alt="" width="100%" />
      <section class="my-3">
        <div class="text-white">
          <div class="d-flex justify-content-between">
            <div>
              <h1>{{ movie.title }}</h1>
              <section class="d-flex flex-inline align-items-baseline">
                <b-icon-heart v-if="currentUser" aria-label="like_active" :key="movie.id" class="outline-white bg-transparent align-itmes-center" />
                <b-icon-heart-fill v-else aria-label="like_deactive" :key="movie.id" class="outline-white bg-transparent" />
                <p class="px-3" style="font-size: x-large;">{{ movie.like_users.length }}명이 좋아합니다</p>
              </section>
            </div>

            <img
              v-if="!movie.adult"
              class="bg-white"
              width="5%"
              height="5%"
              animation="spin"
              :src="require(`@/assets/adult_sticker.png`)"
              alt=""
            />
          </div>
          <hr />
          <h2>줄거리</h2>
          <!-- 18 over movie case icon -->
          <br />
          <!-- 줄거리 -->
          <h3 style="text-color: white">{{ movie.overview }}</h3>
        </div>
        <!-- 확인용 -->
        <h3>{{ movie }}</h3>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetail",
  data: function () {
    return {
      movie: Object,
    };
  },
  methods: {
    getMovie (movie_id) {
      axios
        .get(`http://15.164.229.252/movies/movielist/${movie_id}`)
        .then((res) => {
          this.movie = res.data
        });
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.status.loggedIn
    },
  },
  created() {
    this.getMovie(this.$route.params.movie_id);
  },
};
</script>

<style>
#MovieDetail {
  box-sizing: content-box;
}
</style>
