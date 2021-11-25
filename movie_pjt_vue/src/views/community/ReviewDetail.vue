<template>
  <div class="ReviewDetail">
    <div class="container">

    <h2>{{review.title}}</h2>
    <hr>
    <h3>{{review.user}}님의 {{review.movie.title}}에 관한 리뷰</h3>
    <h3>평점:&nbsp;&nbsp;<b-icon-star-fill variant="warning" v-for="idx in review.rank" :key=idx></b-icon-star-fill></h3>
    <p style="text-align: end;">created at {{review.created_at.slice(0,10)}}</p>
    <p>{{review.content}}</p>
    <div class="d-flex justify-content-between ">
      <div>
      <b-icon-heart-fill variant="danger" animation="fade" @click="reviewClapsButton()" />  {{review.claps_count}}
      </div>
      <div>
      <b-icon-trash type="submit" variant="danger" @click="deleteButton()" />
      </div>
    </div>
    <hr>
    <div class="comments">
      <b-list-group >
        <b-list-group-item class="flex-column align-items-start py-3 "
          v-for="(comment, idx) in review.comments"
          :key="idx"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">
              {{comment.content}}</h5>
              <div class="align-items-basline">
                <span>작성자: {{comment.user}}&nbsp;</span>
                <b-icon-trash v-if="loggedUser === comment.user" type="submit" variant="danger" @click="deleteCommentButton(comment.id, idx)" />
              </div>
            </div>
        </b-list-group-item>
      </b-list-group>
      <b-row class="my-1">
        <b-col sm="6" class="d-flex">
          <b-form-input v-model="new_comment.content" id="input-small" size="sm" placeholder="Enter your comment" @keypress.enter="createCommentButton()"></b-form-input>
          <b-icon-pen-fill class="m-2" type="submit" variant="primary" @click="createCommentButton()" />
        </b-col>  
      </b-row>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import authHeader from '@/services/auth-header'
// import Comment from "@/components/comment"
import CommunityService from "@/services/community.service";
export default {
  name: 'ReviewDetail',
  data() {
    return {
      reviewid: 0,
      loggedUser: '',
      new_comment: {
        'content': '',
        'user': ''
      },
    }
  },
  props: {
    review:Object
  },
  // component: {
  //   Comment
  // },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
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
    async deleteCommentButton(comment_id, idx){
      console.log(idx)
      this.review['review_id'] = parseInt(this.reviewid)
      const response = await CommunityService.deleteComment(this.review, comment_id)
      this.review.comments.splice(idx, 1)
      console.log(response)
    },
    async createCommentButton(){
      console.log(this.currentUser)
      this.review['review_id'] = parseInt(this.reviewid)
      const response = await CommunityService.createComment(this.review, this.new_comment.content)
      this.review.comments.push(response.data)
      console.log(response.data)
      console.log(this.review.comments)
    },
    async reviewClapsButton() {
      this.review['review_id'] = parseInt(this.reviewid)
      const response = await CommunityService.reviewClaps(this.review)
      console.log(response)
      this.$router.go()
    },
    userName() {
      axios.post(`http://15.164.229.252/accounts/get-user-name/`, {}, {headers: authHeader()})
      .then(res => {
        this.loggedUser = res.data.username
        console.log(this.loggedUser)
      })
    }
  },

  created() {
    this.getReview(this.$route.params.review_id)
    this.userName()
  },
};

</script>

<style>
.ReviewDetail {
  margin-top: 100px;
  color: white,
}
</style>