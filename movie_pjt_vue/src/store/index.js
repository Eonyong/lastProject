import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)

const MOVIE_URL = process.env.VUE_APP_SERVER_URL

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    movies: [],
    movieId: '',
  },
  getters: {
    movieLists(state) {
      return state.movies
    },
  },
  mutations: {
    GET_MOVIES (state, movieItem) {
      state.movies = movieItem
      console.log(state.movies)
    },
    MOVIE_ID (state, movieId) {
      state.movieId = movieId
      return state.movieId
    }
  },
  actions: {
    getMovies({ commit }) {
      axios.get( MOVIE_URL +'/movies/movielist/')
      .then(res => {
        commit('GET_MOVIES', res.data[0]['12: 모험'])
      }).catch(err => {
        console.log(err)
      })
    },
    movieClick ( { commit }, movieId ) {
      axios.get( MOVIE_URL + `/movies/movielist/${movieId}`)
      .then(res => {
        console.log(res)
        commit('MOVIE_ID', res)
      }).catch(err  => {
        console.log(err)
      })
    },
  },
  modules: {
  }
})
