<template>
  <div id="HeroCarousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      controls
      indicators
      fade
      aria-hidden="true"
      :interval="2500"
      img-width="800px"
      img-height="500px"
      label-prev=""
      label-next=""
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="https://image.tmdb.org/t/p/original/cinER0ESG0eJ49kXlExM0MEWGxW.jpg"
      >
        <b-button
          variant="link text-white"
          style="
            font-size: -webkit-xxx-large;
            text-decoration: none;
            font-color: white;
          "
          >"샹치"</b-button
        >
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://image.tmdb.org/t/p/original/u5Fp9GBy9W8fqkuGfLBuuoJf57Z.jpg"
      >
        <b-button
          variant="link text-white"
          style="
            font-size: -webkit-xxx-large;
            text-decoration: none;
            font-color: white;
          "
          >"No Time to Die"</b-button
        >
      </b-carousel-slide>

      <!-- <b-carousel-slide v-for="movie in movies" :key="movie.backdrop_path" 
      v-bind:img-src="`${movie.backdrop_path}`">
      <b-button variant="link text-white" style="font-size: -webkit-xxx-large; text-decoration: none; font-color: white;" @click="[movieClick(movie.id), goToMovie()]">{{ movie.title }}</b-button>
      </b-carousel-slide> -->
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "HeroCarousel",
};
</script>

<style></style>
