<template>
  <div class="SearchAutocomplete">
    <input
      type="text"
      @input="onChange"
      v-model="search"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />
    <ul
      id="autocomplete-results"
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        class="loading"
        v-if="isLoading"
      >
        Loading results...
      </li>
      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'SearchAutocomplete',
    props: {
      items: {
        type: Array,
        required: false,
        default: () => [],
      },
      isAsync: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {
        isOpen: false,
        results: [],
        search: '',
        isLoading: false,
        arrowCounter: -1,
      };
    },
    watch: {
      
      items: function (value, oldValue) {
        if (value.length !== oldValue.length) {
          this.results = value;
          this.isLoading = false;
        }
      },
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },
    destroyed() {
      document.removeEventListener('click', this.handleClickOutside)
    },
    methods: {
      setResult(result) {
        this.search = result;
        this.isOpen = false;
      },
      onChange() {
      this.isLoading = true;
          axios
          .get('http://15.164.229.252/movies/movielist/search', 
          {params: {search: this.search}})
          .then((res) => {
          console.log('온체인지')
            console.log(res.data)
            this.results = res.data.slice(0, 10);
            this.isLoading = false;
          });
      },
      handleClickOutside(event) {
        if (!this.$el.contains(event.target)) {
        console.log('클릭아웃사이드')
          this.isOpen = false;
          this.arrowCounter = -1;
        }
      },
      onArrowDown() {
        if (this.arrowCounter < this.results.length) {
                console.log('애로우다운')
          this.arrowCounter = this.arrowCounter + 1;
        }
      },
      onArrowUp() {
        if (this.arrowCounter > 0) {
                console.log('애로우업')
          this.arrowCounter = this.arrowCounter - 1;
        }
      },
      onEnter() {
              console.log('엔터')
        this.search = this.results[this.arrowCounter];
        this.isOpen = false;
        this.arrowCounter = -1;
      },
    },
  };
</script>

<style>
  .autocomplete {
    position: relative;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
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