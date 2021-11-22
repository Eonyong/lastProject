<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      controls indicators fade aria-hidden="true"
      :interval="2500" img-width="800" img-height="600"
      label-prev="" label-next=""
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">

      <b-carousel-slide v-for="movie in movies" :key="movie.backdrop_path" @click.native="movieClick(movie.id)"
      v-bind:img-src="'https://image.tmdb.org/t/p/w780' + `${movie.backdrop_path}`"
      :caption="movie.title"  style="font-size: -webkit-xxx-large;"/>

    </b-carousel>

    <section class="list item-more" id="movieListExample1" style="padding-top: 0px;">
      <h2 class="section-title my-1" style="font-size: 50px;">인기 영화</h2>

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="movie in movies" :key="movie.poster_path"
          style="list-style-type: none;" class="mx-4">
          <b-card-img :src="'https://image.tmdb.org/t/p/w185' + `${movie.poster_path}`" @click="load"/>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev" />
        <div class="swiper-button-next" slot="button-next" />

      </swiper>

    </section>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { mapState } from 'vuex'

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
      swiperOption: { 
        slidesPerView: 'auto',
        spaceBetween: 6,
        autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false
        },
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      },
      // slide 누르면 움직이도록 하는 변수
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    
    load() {
         // generate messages
      this.messages = Array.apply(null, Array(Math.floor(Math.random() * 100))).map((_, i) => i)
      // ul is updated after tick
      this.$nextTick(() => {
          var container = this.$el.querySelector("#test");
          container.scrollTop = container.scrollHeight;
      })
    },
    // slide 이동을 위한 버튼
    onSlideStart() {
        this.sliding = true
      },
    onSlideEnd() {
      this.sliding = false
    },
    // 영화 이미지 클릭 시 이동하는 함수
    movieClick (res) {
      console.log(res)
      this.$router.push({ name: 'MovieDetail' })
    },
  },
  computed: {
    ...mapState ([
      'movies',
    ]),
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