<template>
  <div id="MovieDetail" class="container">
    <div class="container">
      <!-- datail page movie backdrop image -->
      <img v-if="movie.backdrop_path" :src="movie.backdrop_path" alt="" width="100%" />
      <img v-else alt="" blank width="100%" />
      
      <section class="my-3">
        <div class="text-white">
          <div class="d-flex justify-content-between">
            <div>
              <div class="d-flex">
                <h1>{{ movie.title }}&nbsp;|&nbsp;</h1>
                <h1 >평점: {{ movie.vote_average }}/10</h1>
              </div>
              <section class="d-flex flex-inline align-items-baseline">
                <b-icon-heart-fill v-if="flag" @click="[userName(), movieLike(movie.id)]" :key="movie.id" class="outline-white bg-transparent" />
                <b-icon-heart v-else @click="[userName(), movieLike(movie.id)]" :key="movie.id" class="outline-white bg-transparent align-itmes-center" />
                <p class="px-3" :v-model="like_members" style="font-size: x-large;">{{ like_members }}명이 좋아합니다</p>
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
        <h3>{{ movie }}</h3>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import authHeader from '@/services/auth-header'

export default {
  name: "MovieDetail",
  data: function () {
    return {
      movie: Object,
      movieRelavie: Object,
      like_members: 0,
      loggedUser: '',
      flag: false,
    };
  },
  methods: {
    getMovie (movie_id) {
      axios
        .get(`http://15.164.229.252/movies/movielist/${movie_id}`)
        .then((res) => {
          this.movie = res.data
          this.like_members = res.data.like_users.length
          this.userName()
          res.data.like_users.filter((value, index) => {
          if (value.username === this.loggedUser) {
            this.flag = true
            console.log(index)
          }
        })
        });
    },
    getMovieList(id) {
      axios.get("http://15.164.229.252/movies/movielist/")
      .then((res) => {
        this.movieRelavie = res.data[id]
        console.log(this.movieRelavie)
      });
    },
    movieLike(movie_id) {
      axios.post(`http://15.164.229.252/movies/movielist/${movie_id}/like/`, {},
      { headers: authHeader()})
      .then(res => {
        this.like_members = res.data.like_users.length
        this.flag = !this.flag
        // res.data.like_users.filter((value, index) => {
        //   if (value.username === this.loggedUser) {
        //     this.flag = !this.flag
        //     console.log(index)
        //   }
        // })
      })
    },
    userName() {
      axios.post(`http://15.164.229.252/accounts/get-user-name/`, {}, {headers: authHeader()})
      .then(res => {
        this.loggedUser = res.data.username
        console.log(this.loggedUser)
      })
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.status.loggedIn
    },
  },
  created() {
    this.getMovie(this.$route.params.movie_id)
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style>
#MovieDetail {
  box-sizing: content-box;
}
</style>
