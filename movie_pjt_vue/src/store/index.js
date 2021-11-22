import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    movies: [],
  },
  getters: {
    movieLists(state) {
      return state.movies
    },
  },
  mutations: {
    GET_MOVIES (state, movieItem) {
      state.movies = movieItem
    }
  },
  actions: {
    getMovies({ commit }) {
      axios.get('http://127.0.0.1:8000/movies/movielist/')
      .then(res => {
        commit('GET_MOVIES', res.data[0][12])
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
