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
              <!-- <b-dd-text v-model="datetime"> {{ movieId.data.release_date }}</b-dd-text> -->
            </div>
            <img
              v-if="movie.adult"
              class="bg-white"
              width="5%"
              height="5%"
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
        {{movie}}
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
    getMovie: function (movie_id) {
      axios
        .get(`http://15.164.229.252/movies/movielist/${movie_id}`)
        .then((res) => {
          this.movie = res.data;
        });
    },
  },
  created() {
    this.getMovie(this.$route.params.movie_id);
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
