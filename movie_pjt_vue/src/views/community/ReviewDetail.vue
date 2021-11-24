<template>
  <div class="ReviewDetail">
    {{review.title}}
    <br>
    {{review.content}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ReviewDetail',
  props: {
    review:Object
  },
  methods: {
    getReview: function (review_id) {
      axios
        .get(`http://15.164.229.252/community/review/${review_id}/`)
        .then((res) => {
          this.review = res.data;
          // console.log(res.data)
        });
    },
  },
  created() {
    this.getReview(this.$route.params.review_id);
    // console.log(this.review)
  },
};

</script>

<style>

</style>