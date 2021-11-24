
<template>
  <div class="ReviewList">

    <div class="container">
    <b-list-group >
      <b-list-group-item class="flex-column align-items-start"
        v-for="(review, idx) in reviews"
        :key="idx"
        @click="reviewDetail(review.id)"
        >
    <div class="d-flex w-100 justify-content-between">
      <div>
      <h5 class="mb-1">
        {{review.title}}</h5>
      <span>  {{review.movie.title}}</span> <span>        <i class="fas fa-star" v-for="idx in review.rank" :key=idx></i></span>
      </div>


      <small>created at {{review.created_at.slice(0,10)}}</small>
    </div>

    <p class="mb-1">
      {{review.content.slice(0, 50)}}...
    </p>

    <div class="d-flex w-100 justify-content-between">
    <small><i class="fas fa-user"></i>{{review.user}}</small>
    <small>   <i class="fas fa-heart"></i>  {{review.claps_count}}</small>
    </div>




        <b-badge pill variant="primary">{{review.claps_count}} 1</b-badge>
      </b-list-group-item>
    </b-list-group>

</div>
<span @click="reviewCreate()">create</span>
  </div>
</template>

<script>
import axios from "axios"


export default {
  name: 'ReviewList',
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
      console.log('이것도되니?')
      axios.get("http://15.164.229.252/community/review/").then((res) => {
        this.reviews = res.data;
        
        console.log(this.reviews);
      });
    },
    reviewDetail: function(id) {
       console.log('이것도되니?2')
      this.$router.push({
        path: `/community/${id}`,
        params: { review_id: id },
      })
      console.log(id)
    },
    reviewCreate: function() {
      console.log("버튼누름")
      this.$router.push(
        '/community/reviewcreate/'
      )
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
  margin-top: 100px;
  color: white,
  
}
</style>