import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate"
import axiosThrottle from 'axios-request-throttle'



Vue.use(Vuex)
axiosThrottle.use(axios, { requestsPerSecond: 5 })

// const MOVIE_URL = process.env.VUE_APP_SERVER_URL

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    movies: [],
    movieId: '',
    movieGenre: [],
  },
  getters: {
    movieLists(state) {
      return state.movies
    },
  },
  mutations: {
    GET_MOVIES (state, movieItem) {
      state.movies.push(movieItem)
      // console.log(state.movies)
    },
    MOVIE_ID (state, movieId) {
      state.movieId = movieId
      return state.movieId
    },
    MOVIE_GENRES (state, item) {
      state.movieGenre = [...state.movieGenre, item]
      console.log(state.movieGenre)
    }
  },
  actions: {
    getMovies({ commit }) {
      axios.get( 'http://15.164.229.252/movies/movielist/')
      .then(res => {
        for (let index = 0; index < res.data.length; index++) {
          for (let item in res.data[index]){
            if (item.split(': ')[1].length > 2) {
              
              commit('MOVIE_GENRES', item.split(': ')[1])
            }
            commit('GET_MOVIES', res.data[index][item])
  
          } 
        }
          
      }).catch(err => {
        console.log(err)
      })
    },
    movieClick ( { commit }, movieId ) {
      axios.get( `http://15.164.229.252/movies/movielist/${movieId}`)
      .then(res => {
        commit('MOVIE_ID', res)
      }).catch(err  => {
        console.log(err)
      })
    },
    
  },
  modules: {
  }
})
