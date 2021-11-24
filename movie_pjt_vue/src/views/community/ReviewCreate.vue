<template>
  <div id="ReviewCreate" class="container">
      
    <div class="mt-2">Title: </div>
    <b-form-input v-model="review.title" placeholder="Enter title"></b-form-input>
    <div class="mt-2">Content: </div>
    <b-form-input v-model="review.content" placeholder="Enter content"></b-form-input>
    <div class="mt-2">Movie: </div>
    <b-form-input v-model="review.movie.id" placeholder="Enter title"></b-form-input>


  <div class="mt-2">
    <label for="rating-inline">Rank: </label>
    <b-form-rating id="rating-inline" inline value="4" v-model="review.rank"></b-form-rating>
  </div>

<SearchAutocomplete
      :items=movie_list
      @input="setInput"
    />

  <b-button class="mt-2" type="submit" variant="primary" @click="handleButton()">Submit</b-button>

  </div>
</template>

<script>
import CommunityService from "@/services/community.service";
import SearchAutocomplete from '@/components/SearchAutocomplete.vue'
import axios from 'axios'

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
      movie_list: [],
      search:''
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
    setInput(search) {
          this.search = search
          axios
          .get('http://15.164.229.252/movies/movielist/search', 
          {params: {search: this.search}})
          .then((res) => {
            // console.log('wtf?',res.data.slice(0, 10))
          this.movie_list = res.data.slice(0, 10);
          });
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