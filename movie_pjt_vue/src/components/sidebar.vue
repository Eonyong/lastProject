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
      <b-card class="overflow-hidden" v-if="currentUser">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              class="profile-img-card"/>
          </b-col>
          <b-col md="6">
            <b-card-body class="flex-wrap">
              {{ currentUser.username }}의 영화관
              <b-button
                class="btn btn-link text-decoration-none"
                variant="link"
                @click.prevent="logOut">
                퇴 장 하 기
              </b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

        <!-- 오른쪽 컴포넌트 제작 -->
        <b-button-group vertical class="d-flex text-decoration-none" style="text-align: center">
          <b-button class="btn btn-link text-decoration-none" :to="{ path: '/' }" variant="link">
            메 인 화 면
          </b-button>

          <b-button
            class="btn btn-link text-decoration-none"
            v-if="!currentUser"
            :to="{ path: '/accounts/signup' }"
            variant="link"
          >
            회 원 가 입
          </b-button>

          <b-button
            class="btn btn-link text-decoration-none"
            v-if="!currentUser"
            :to="{ path: '/accounts/login' }"
            variant="link"
          >
            로 그 인
          </b-button>

          <b-button
            class="btn btn-link text-decoration-none"
            :to="{ path: '/community/reviewlist' }"
            variant="link"
          >
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
            <b-form-input
              type="text" v-model.trim="searchText"
              autocapitalize="none"
              class="form-control bg-transparent " style=" color: white;"
              placeholder="Search" @input="SearchMovie(searchText)"
            />
          <div role="dialog" style="top:12px; width: 375px; overflow: hidden auto; opacity:0.8" class="bg-black">
            <div>
              <b-list-group>
                <b-list-group-item v-for="movies in searchmovies" :key="movies.title" :title="movies.title" @click="movieDetail(movies.id)">
                  {{ movies.title }}
                </b-list-group-item>
              </b-list-group>
            </div>
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
  data() {
    return {
      searchText: '',
      searchmovies: [],
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
    SearchMovie(text) {
      axios.get(`http://15.164.229.252/movies/movielist/search?search=${text}`)
      .then(res => {
        const Data = []
        res.data.filter(data => {
          console.log(data['original_title'])
          if (data['original_title'].includes(text)) {
            Data.push({id: data.id, title: data.title})
          }
          })
        // console.log(Data)
        // const uniqData = Data.filter((thing, index) => {
        //   const _thing = JSON.stringify(thing)
        //   return index === Data.findIndex(obj => {
        //     return JSON.stringify(obj) === _thing})
        // })
        this.searchmovies = Data
      })
      .catch(err => {
        console.log(err)
      })
    },
    movieDetail(id) {
      
      this.$router.push({
        path: `/movie/${id}`,
        params: { movie_id: id },
      });
    },
  }
};
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