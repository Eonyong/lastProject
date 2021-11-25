<template>
  <div class="ReviewDetail">
    <div class="container">
    <h2>{{review.title}}</h2>

    <h3>{{review.user}}님의 {{review.movie.title}}에 관한 리뷰</h3>
    <h3>평점         <i class="fas fa-star" v-for="idx in review.rank" :key=idx></i></h3>
    <span>created at {{review.created_at.slice(0,10)}}</span>
    <p>{{review.content}}</p>

    <i class="far fa-heart"></i>  {{review.claps_count}}
    <b-button class="m-2" type="submit" variant="primary"
     @click="updateButton()"
     :original_review=review>Update</b-button>
    <b-button class="m-2" type="submit" variant="danger" @click="deleteButton()">Delete</b-button>

    <div class="comments">
      <b-list-group >
        <b-list-group-item class="flex-column align-items-start"
          v-for="(comment, idx) in review.comments"
          :key="idx"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">
              {{comment.content}}</h5>
              <span>{{comment.user}}</span>
            </div>
        </b-list-group-item>
      </b-list-group>
      <b-row class="my-1">
        <b-col sm="10">
          <b-form-input v-model="new_comment" id="input-small" size="sm" placeholder="Enter your comment"></b-form-input>
        </b-col>
      </b-row>
      <b-button class="m-2" type="submit" variant="primary"
      @click="createCommentButton()"
      >Create</b-button>
      {{new_comment}}
    </div>




    <!-- <Comment :comments="review.comments"/> -->

    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import Comment from "@/components/comment"
import CommunityService from "@/services/community.service";
export default {
  name: 'ReviewDetail',
  data() {
    return {
      reviewid: 0,
      new_comment: ''
    }
  },
  props: {
    review:Object
  },
  // component: {
  //   Comment
  // },
  methods: {
    getReview: function (review_id) {
      axios
        .get(`http://15.164.229.252/community/review/${review_id}/`)
        .then((res) => {
          this.review = res.data;
          this.reviewid = review_id
          // console.log(res.data)
        });
    },
    async deleteButton(){

      this.review['review_id'] = parseInt(this.reviewid)
      const response = await CommunityService.deleteReview(this.review)
      setTimeout(()=>{this.$router.push("/community/reviewlist")}, 1000)
      console.log(response)
    },
    async updateButton(){
      this.review['review_id'] = parseInt(this.reviewid)
      this.$router.push(`/community/reviewlist/reviewupdate/${this.review['review_id']}`)
    },
    async createCommentButton(){

      this.review['review_id'] = parseInt(this.reviewid)
      const response = await CommunityService.createComment(this.review, this.new_comment)
      console.log(response)
    },
  },

  created() {
    this.getReview(this.$route.params.review_id);
  },
};

</script>

<style>
.ReviewDetail {
  margin-top: 100px;
  color: white,
  
}
</style>