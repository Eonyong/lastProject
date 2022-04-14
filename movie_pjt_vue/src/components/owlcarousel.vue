<template>
  <div id="OwlCarousel">
    <section
      class="list item-more"
      id="movieListExample1"
      style="padding-top: 0px"
    >
      <h2 class="section-title my-1" style="font-size: 50px">
        {{ movies.genre }}
      </h2>

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          v-for="movie in movies.movies"
          :key="movie.id"
          style="list-style-type: none"
          class="mx-4 flex-wrap align-items-baseline"
        >
          <b-card-img
            id="hovering-img"
            :src="`${movie.poster_path_thumbnail}`"
            :title="movie.title"
            @click="movieDetail(movie.id)" />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev" />
        <div class="swiper-button-next" slot="button-next" />
      </swiper>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "OwlCarousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    movies: Object,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 6,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      // slide 누르면 움직이도록 하는 변수
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    load() {
      // generate messages
      this.messages = Array.apply(
        null,
        Array(Math.floor(Math.random() * 100))
      ).map((_, i) => i);
      // ul is updated after tick
      this.$nextTick(() => {
        var container = this.$el.querySelector("#test");
        container.scrollTop = container.scrollHeight;
      });
    },
    // slide 이동을 위한 버튼
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    movieDetail(id) {
      this.$router.push({
        path: `/movie/${id}`,
        params: { movie_id: id },
      });
    },
  },
};
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
.b-carousel-slide {
  width: 80%;
}

.swiper {
  height: 300px;
  width: auto;
}

.swiper-slide {
  height: 320px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
  margin: auto;
}

/* mouse over 하면 이미지 커지는... */
#hovering-img {
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.3s ease-in-out;
  position: relative;
}
#hovering-img:hover {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
}

#heart-icon {
  cursor: pointer;
  width: 30px;
  height: 30px;
}
</style>
