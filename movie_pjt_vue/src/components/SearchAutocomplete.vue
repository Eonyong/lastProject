<template>
  <div class="autocomplete">
    <input
      v-model="search"
      @input="onChange"
      type="text"
    />
    <ul
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        v-for="(result, i) in results"
        :key="i"
        class="autocomplete-result"
        @click="getMovieId(result)"
      >
        <div class="d-flex flex-row justify-content-between container">
        <div class="col-4">
          <img :src=result.backdrop_path_thumbnail alt="Girl in a jacket" width="100">
        </div>
        <div class="col-8">{{ result.title }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
// import debounce from 'debounce'

export default {
  name: 'SearchAutocomplete',
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      search: '',
      results: [],
      isOpen: false,
      isLoading: false,
    };
  },
  watch:{
  search: async function(value){
  if(value.length >= 2){
  this.results = value;

  const res = await axios.get('http://15.164.229.252/movies/movielist/search',  {params: {search: this.search}})    
  this.results = res.data.slice(0, 10);
  
  }
  }
  },
  mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },
  destroyed() {
      document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    async filterResults() {
      this.isLoading = false
    },
    onChange() {
    if(!this.isLoading){
    this.isLoading = true
      this.filterResults();
      this.isOpen = true;
    }
    },
    getMovieId(movie) {
      this.search = movie.title
      this.$emit('movieSelect', movie.id)
      this.isOpen=false;
    },
    handleClickOutside(event) {
        if (!this.$el.contains(event.target)) {

          this.isOpen = false;
        }
      },
  }
}
</script>


<style scoped>
  .autocomplete {
    position: relative;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 300px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result.is-active,
  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>