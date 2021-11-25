<template>
  <div id="Home">
    <HeroCarousel class="container" style="width: 90%"/>
    <OwlCarousel
      v-for="(movies, idx) in all_movies"
      :key="idx"
      :movies="movies"
    />
  </div>
</template>

<script>
import HeroCarousel from "@/components/herocarousel";
import OwlCarousel from "@/components/owlcarousel";
import axios from "axios";

export default {
  name: "Home",
  components: {
    OwlCarousel,
    HeroCarousel,
  },
  data: function () {
    return {
      all_movies: [],
      recomMovies: [],
    };
  },
  methods: {
    getMovieList() {
      axios.get("http://15.164.229.252/movies/movielist/")
      .then((res) => {
        this.all_movies = res.data;
        console.log(this.all_movies);
      });
    },
    
  },
  created() {
    this.getMovieList()
  },
};
</script>

<style scoped>

</style>
