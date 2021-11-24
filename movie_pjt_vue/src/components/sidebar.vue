<template>
  <div id="sidebar">
    <nav
      id="nav"
      class="
        navbar-expand-md
        item-align-center
        flex-column
        fixed-top
        bg-transparent
        box-sizing-inherit
      "
    >
      <!-- side padding nav 제작 -->
      <b-sidebar
        id="sidebar-1"
        class="bg-transparent"
        aria-labelledby="sidebar-no-header-title"
        backdrop
        backdrop-variant="transparent"
        no-header
        shadow
      >
        <!-- 오른쪽 컴포넌트 제작 -->
        <b-button-group vertical class="d-flex" style="text-align: center">
          <!-- <li class="nav-item"><router-link to="/"> Home </router-link></li> -->
          <b-button class="btn btn-link" :to="{ path: '/' }" variant="link">
            메 인 화 면
          </b-button>

          <b-button
            class="btn btn-link"
            :to="{ path: '/accounts/signup' }"
            variant="link"
          >
            회 원 가 입
          </b-button>

          <b-button
            class="btn btn-link"
            :to="{ path: '/accounts/login' }"
            variant="link"
          >
            로 그 인
          </b-button>

          <b-button class="btn btn-link" variant="link"> 로 그 아 웃 </b-button>

          <b-button class="btn btn-link"
          :to="{path: '/community/reviewlist'}" variant="link">
            모 든 리 뷰 모 아 보 기
          </b-button>
        </b-button-group>
      </b-sidebar>
      <!-- Home 컴포넌트 제작 -->
      <div class="container-fluid d-flex">
        <b-button
          v-b-toggle.sidebar-no-header
          v-b-toggle.sidebar-1
          class="bg-transparent"
        >
          <b-icon-list />
        </b-button>
        <!-- Search bar 제작 -->
        <div class="input-group ps-5 align-items-end">
          <div id="navbar-search-autocomplete" class="form-outline">
            <input
              type="text" v-model.trim="searchText"
              autocapitalize="none"
              class="form-control bg-transparent " style=" color: white;"
              placeholder="Search"
              @keypress.enter="searchMovie(searchText)" 
            />
          </div>
          <div style="top:12px; width: 375px; overflow: hidden auto;" class="bg-primary">
            <div aria-hidden="false">
              <ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "SideBar",
  data(){
    return{
      searchText: '',
      all_movies: [],
    }
  },
  methods: {
    searchMovie(txt){
      axios.get(`http://15.164.229.252/movies/movielist/search?search=${txt}`)
      .then(res => {
        console.log(res.data)
        this.all_movies = res.data
          this.$router.push({
            name: "SearchMovies",
          })
      })
    },
  }
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
