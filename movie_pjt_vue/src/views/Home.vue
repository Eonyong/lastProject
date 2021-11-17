      
      <!-- @sliding-start="onSlideStart" -->
      <!-- @sliding-end="onSlideEnd" -->
<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      fade
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <section class="list item-more" id="movieListExample1" style="padding-top: 0px;">
      <h2 class="section-title">인기 영화</h2>
      <div class="bx-wrapper" style="max-width: 1200px;">
        <div data-min="6" data-max="6" data-margin="18" data-pager="true" data-controls="true" data-noslide="true"
        class="bxslider bxslider-in" style="width: 20215% position: relative; transition-duration: 0s; transform: translated3d(0px, 0px, 0px);">
          <!-- movie image list 출력  -->
          <!-- single item -->
        </div>
      </div>
    </section>

    
  </div>
</template>

<script>
// @ is an alias
export default {
  name: 'Home',
  components: {
  },
  // data () {
  //   return {
  //     slide: 0,
  //     sliding: null,
  //   }
  // },
  methods: {
    // onSlideStart(slide) {
    //   this.sliding = true
    // },
    // onSlideEnd(slide) {
    //   this.sliding = false
    // }
  }
}
</script>
