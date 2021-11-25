<template>
  <div id="ReviewUpdate" class="container">
      
    <div class="mt-2">Title: </div>
    <b-form-input v-model="review.title" placeholder=original_review.title></b-form-input>
    <div class="mt-2">Content: </div>
    <b-form-input v-model="review.content" placeholder=original_review.content></b-form-input>
    <div class="mt-2">Movie: </div>
    <b-form-input v-model="review.movie.id" placeholder="Enter title"></b-form-input>


  <div class="mt-2">
    <label for="rating-inline">Rank: </label>
    <b-form-rating id="rating-inline" inline value="4" v-model="review.rank"></b-form-rating>
  </div>


  <b-button class="mt-2" type="submit" variant="primary" @click="handleButton()">Submit</b-button>

  </div>
</template>

<script>
import CommunityService from "@/services/community.service";

export default {
  name:"ReviewUpdate",
  data() {
    return {
      review:{
        'movie': {"id":''}, 
         'title': "",
         'content': "",
         'rank':""
      },
      movie_list: [],
      search:''
    };
  },
  props: {
    original_review:Object
  },
  methods: {
    async handleButton(){
      // console.log(this.review)
      const response = await CommunityService.createReview(this.review)
      console.log(response)
      setTimeout(()=>{this.$router.push("/community/reviewlist")}, 1000)
    }
  },
}
</script>

<style>
#ReviewUpdate {
  margin-top: 100px;
  color: white,
  
}
</style>