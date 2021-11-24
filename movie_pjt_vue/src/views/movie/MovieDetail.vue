<template>
  <div id="MovieDetail" class="container">
    <div class="container">
      <!-- datail page movie backdrop image -->
      <img v-if="movie.backdrop_path" :src="movie.backdrop_path" alt="" width="100%" />
      <img-blank v-else alt="" width="100%" />
      
      <section class="my-3">
        <div class="text-white">
          <div class="d-flex justify-content-between">
            <div>
              <div class="d-flex">

                <h1>{{ movie.title }}&nbsp;|&nbsp;</h1>
                <h1 >평점: {{ movie.vote_average }}/10</h1>
              </div>
              <section class="d-flex flex-inline align-items-baseline">
                <b-icon-heart v-if="currentUser" @click="movieLike(movie.id)" aria-label="like_active" :key="movie.id" class="outline-white bg-transparent align-itmes-center" />
                <b-icon-heart-fill v-else :key="movie.id" class="outline-white bg-transparent" />
                <p class="px-3" :v-model="userId" style="font-size: x-large;">{{ userId }}명이 좋아합니다</p>
              </section>
            </div>

            <img
              v-if="!movie.adult"
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
        <!-- 확인용 -->
        <!-- <h1 v-for="genre in movie.genre_ids" :key="genre.id" class="text-white" :>
          {{ genre.name }}
        </h1> -->
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
      userId: 0,
      movieRelavie: Object,
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
    getMovieList(id) {
      axios.get("http://15.164.229.252/movies/movielist/")
      .then((res) => {
        this.movieRelavie = res.data[id]
        console.log(this.movieRelavie)
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
