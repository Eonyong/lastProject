
<template>
  <div class="ReviewList">
    <div class="container">
      <b-list-group >
        <b-list-group-item class="flex-column align-items-start"
        v-for="(review, idx) in reviews" :key="idx" @click="reviewDetail(review.id)">
          <div class="d-flex w-100 justify-content-between">
            <h3>{{review.title}}</h3>
            <hr>
            <small>created at {{review.created_at.slice(0,10)}}</small>
          </div>
          <div>
            <span>about {{review.movie.title}}</span>
            <span>(<b-icon-star-fill animation="spin" variant="warning" v-for="idx in review.rank" :key=idx />)</span>
          </div>
          <p class="mb-1">리뷰 내용: {{review.content.slice(0, 50)}}...</p>
          <div class="d-flex w-100 justify-content-between">
            <small>작성자 - {{review.user}}</small>
            <small><b-icon-heart-fill variant="danger" />  {{review.claps_count}}</small>
          </div>
          <b-badge pill variant="primary">{{review.claps_count}} 1</b-badge>
        </b-list-group-item>
      </b-list-group>

  <div style="text-align: end;">
    <b-icon-pen-fill class="align-items-end" variant="primary" @click="reviewCreate()" /> 
  </div>
</div>
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