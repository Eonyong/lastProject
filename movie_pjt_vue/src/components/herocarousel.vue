<template>
  <div id="HeroCarousel">
    <div class="d-flex align-items-baseline justify-content-between" style="height: 100%">
      <div>
        오늘의 날씨: <img :src="weather.weather_icon" alt=""> {{ weather.weather_description }}
      </div>
      <div>
        현재 시간: {{ now }}
      </div>
    </div>
    <b-carousel
      ref="myCarousel"
      controls fade
      :interval="2000"
      background="#fffff"
      img-width="1024"
      img-height="480"
      style="text-shadow: 2px 2px 2px #333;"
    >
      <b-carousel-slide v-for="recomm in recomMovies"
      :caption="recomm.title" caption-tag="h1" :key="recomm.id" :img-src="recomm.backdrop_path" />

    </b-carousel>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "HeroCarousel",
  data() {
      return {
        now: "00:00:00",
        slide: 0,
        sliding: null,
        recomMovies: [],
        weather: {},
      }
    },
  methods: {
    weatherRecom() {
      axios.get('http://15.164.229.252/movies/movielist/recommend/')
      .then(res => {
        this.recomMovies = res.data.recommend_movies
        this.weather = res.data
      })
    },
    prev() {
        this.$refs.myCarousel.prev()
      },
    next() {
      this.$refs.myCarousel.next()
    },
    movieDetail(id) {
      
      this.$router.push({
        path: `/movie/${id}`,
        params: { movie_id: id },
      })
      .catch(error => {
        if(error.name === "NavigationDuplicated" ){
            location.reload();
        }
      })
    },
    time() {
      const date = new Date()
      this.now = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    }
  },
  created() {
    this.weatherRecom()
    this.time()
  }
}
</script>

<style>

</style>

recomMovies