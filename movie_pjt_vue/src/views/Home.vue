      
      <!-- @sliding-start="onSlideStart" -->
      <!-- @sliding-end="onSlideEnd" -->
<template>
  <div>
    <b-carousel
      id="carousel-1"
      controls indicators fade aria-hidden="true"
      :interval="4000" img-width="1024" img-height="360">

      <b-carousel-slide v-for="image in images" :key="image.backdrop_path"
      v-bind:img-src="'https://image.tmdb.org/t/p/original' + `${image.backdrop_path}`"
      :title="image.title" :text="image.title" />

    </b-carousel>

    <section class="list item-more" id="movieListExample1" style="padding-top: 0px;">
      <h2 class="section-title my-1">인기 영화</h2>
      <!-- <b-carousel controls indicators :interval="1000" img-height="180" img-width="360">
        <b-carousel-slide v-for="image in images" :key="image.poster_path" v-bind:img-src="'https://image.tmdb.org/t/p/w185' + `${image.poster_path}`" />
      </b-carousel> -->
      <!-- <div class="container d-flex-row position-relative " role="presentation">
        <ul class="container__column flex d-flex box-orient-horizontal" style="overflow-x: auto;">
          <li v-for="image in images" :key="image.poster_path" tabindex="-1"
          style="list-style-type: none; float: left;" class="mx-4">
            <img tabindex="0" :src="'https://image.tmdb.org/t/p/w185' + `${image.poster_path}`" alt="">
          </li>
        </ul>
      </div> -->

      <!-- <div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 328px;"><div data-min="6" data-max="6" data-margin="18" data-pager="true" data-controls="true" class="bxslider bxslider-in" style="width: 20215%; position: relative; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);" data-noslide="true">
				<div num-"false" data-page-no="" class="program-item column-6 " style="float: left; list-style: none; position: relative; width: 185px; margin-right: 18px;" aria-hidden="false">
          <img alt="[무삭제판] 해피니스" class="image-cover lazy loaded" onerror="onErrorVerticalImage(this)" data-ll-status="loaded" 
          v-for="image in images" :key="image.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w185' + `${image.poster_path}`" height="185">
        </div>
      </div> -->

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="image in images" :key="image.poster_path"
          style="list-style-type: none;" class="mx-4">
          <b-card-img :src="'https://image.tmdb.org/t/p/w185' + `${image.poster_path}`" />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev" />
        <div class="swiper-button-next" slot="button-next" />

      </swiper>


    </section>
  </div>
</template>

<script>

import axios from 'axios'
// import carousel from 'vue-owl-carousel'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// const SERVER_URL = process.env.VUE_APP_SERVER_URL
// @ is an alias
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
  },
  data () {
    return {
      images: [],
      swiperOption: { 
        slidesPerView: 6,
        spaceBetween: 30, 
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      }
    }
  },
  mounted: function () {
    this.getMovies()
  },
  methods: {
    getMovies: function () {
      this.loading =true

      axios.get('http://127.0.0.1:8000/movies/movielist/')
      .then( res => {
        console.log(res.data)
        this.images = res.data[0][12]
        // this.images = res.data
      })
    },
    load() {
         // generate messages
      this.messages = Array.apply(null, Array(Math.floor(Math.random() * 100))).map((_, i) => i)
      // ul is updated after tick
      this.$nextTick(() => {
          var container = this.$el.querySelector("#test");
          container.scrollTop = container.scrollHeight;
      })
    },
  },

}


</script>

<style scoped>
  .container {
    /* Content is centered horizontally */
    align-items: center;
    display: flex;
    scroll-snap-type: x mandatory;
    justify-content: center;
  }

  .container__column {
    /* Content is centered vertically */
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    /* Make all columns have the same width */
    flex: 1;

    /* OPTIONAL: Space between columns */
    margin: 0 8px;

    scroll-snap-align: start;
  }
  .swiper {
    height: 300px;
    width: auto;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: auto;
    margin: auto;
  }

</style>