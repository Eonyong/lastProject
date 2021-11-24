
<template>
  <div class="ReviewList">
    <br><br><br>
    <b-list-group class="d-flex">
      <b-list-group-item class="d-flex justify-content-between align-items-center font-black"
        v-for="(review, idx) in reviews"
        :key="idx"
        >
        <b-button @click="reviewDetail(review.id)" variant="transparent">{{review.title}}</b-button>
        <b-badge pill variant="primary">{{review.claps_count}} 1</b-badge>
      </b-list-group-item>
    </b-list-group>
      <ReviewDetail />

  </div>
</template>

<script>
import ReviewDetail from "@/views/community/ReviewDetail"
import axios from "axios"


export default {
  name: 'ReviewList',
  conponent: {
   ReviewDetail,
  },
  data: function () {
    return {
      reviews: [],
    };
  },
  // computed: {
  //   ...mapState ([
  //     'movies',
  //   ])
  // },
  methods: {
    getReviewList: function () {
      axios.get("http://15.164.229.252/community/review/").then((res) => {
        this.reviews = res.data;
        
        console.log(this.reviews);
      });
    },
    reviewDetail(id) {
      this.$router.push({
        path: `/community/${id}`,
        params: { review_id: id },
      })
      console.log(id)
    }
  },
  created() {
    console.log("created");
    this.getReviewList();
  },
}
</script>

<style>
.ReviewList {
  color: white,
  
}
</style>