<template>
  <div id="ReviewCreate" class="container">
      
    <div class="mt-2">Title: </div>
    <b-form-input v-model="review.title" placeholder="Enter title"></b-form-input>
    <div class="mt-2">Content: </div>
    <b-form-textarea rows="10" v-model="review.content" placeholder="Enter content"></b-form-textarea>
    <div class="mt-2">Movie: </div>
    <SearchAutocomplete @movieSelect='movieSelect'/>


  <div class="mt-2">
    <label for="rating-inline">Rank: </label> <br>
    <b-form-rating id="rating-inline" inline value="4" v-model="review.rank"></b-form-rating>
  </div>


  <b-button class="mt-2" type="submit" variant="primary" @click="handleButton">Submit</b-button>

  </div>
</template>

<script>
import CommunityService from "@/services/community.service";
import SearchAutocomplete from '@/components/SearchAutocomplete.vue'

export default {
  name:"ReviewCreate",
  data() {
    return {
      review:{
        'movie': {"id":''}, 
         'title': "", 
         'content': "", 
         'rank':""
      },

    };
  },
  components: {
    SearchAutocomplete
  },
  methods: {
    async handleButton(){
      // console.log(this.review)
      const response = await CommunityService.createReview(this.review)
      console.log(response)
      setTimeout(()=>{this.$router.push("/community/reviewlist")}, 1000)
    },
    movieSelect(value){
      this.review.movie.id = value;
      console.log(this.review)
    }
    


  
  },
}
</script>

<style>
#ReviewCreate {
  margin-top: 100px;
  color: white,
  
}
</style>