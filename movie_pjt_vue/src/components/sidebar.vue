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
        backdrop-variant="dark"
        bg-variant="dark"
        no-header
        shadow
      >
      <b-card class="overflow-hidden text-white bg-transparent" v-if="loggedUser">
        <b-row no-gutters >
          <b-col md="6">
            <b-card-img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              class="profile-img-card"/>
          </b-col>
          <b-col md="6" >
            <b-card-body class="flex-wrap">
              {{ loggedUser }}의 영화관
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
        <b-button-group vertical class="d-flex text-decoration-none " style="text-align: center">
          <b-button class="btn btn-link text-decoration-none text-white"
            :to="{ path: '/' }" variant="link">
              메 인 화 면
          </b-button>

          <b-button class="btn btn-link text-decoration-none text-white"
            v-if="!currentUser" :to="{ path: '/accounts/signup' }" variant="link">
            회 원 가 입
          </b-button>

          <b-button class="btn btn-link text-decoration-none text-white"
            v-if="!currentUser" :to="{ path: '/accounts/login' }" variant="link">
            로 그 인
          </b-button>

          <b-button class="btn btn-link text-decoration-none text-white"
            :to="{ path: '/community/reviewlist' }" variant="link">
            모 든 리 뷰 모 아 보 기
          </b-button>
          
        </b-button-group>
      </b-sidebar>
      <!-- Home 컴포넌트 제작 -->
      <div class="container-fluid d-flex">
        <b-icon-list v-b-toggle.sidebar-no-header
        v-b-toggle.sidebar-1
        class="bg-white" style="height: 40px; width: 40px; opacity:.2;"/>
        <!-- Search bar 제작 -->
        <div class="input-group ps-5 align-items-end justify-content-center">
          <div id="navbar-search-autocomplete" class="form-outline">
            <b-form-input
              type="text" v-model.trim="searchText"
              autocapitalize="none"
              class="form-control bg-transparent " style=" color: white;"
              placeholder="Search" @input="SearchMovie(searchText)"
            />
          <div role="dialog" style="top:12px; width: 375px; overflow: hidden auto; opacity:0.8" class="bg-black">
            <div>
              <b-list-group v-model="searchText" v-if="searchText">
                <b-list-group-item v-for="movies in searchmovies" :key="movies.id"  @click="movieDetail(movies.id)">
                  <div @click="movieDetail(movies.id)">
                    <b-img :src="movies.poster_path_thumbnail" style="width:10%"/>
                    {{ movies.title }}
                  </div>
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
import authHeader from '@/services/auth-header'

export default {
  name: "SideBar",
  data() {
    return {
      searchText: '',
      searchmovies: [],
      loggedUser: '',
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
      if (text !== '') {
        axios.get(`http://15.164.229.252/movies/movielist/search?search=${text}`)
        .then(res => {
          const Data = res.data.filter((value, index, self) => {
              return self.indexOf(value) === index
          })
          console.log(res.data)
          this.searchmovies = Data.slice(0, 10)
          })
        .catch(err => {
          console.log(err)
        })
      }
      else {
        this.searchText = ''
        this.searchmovies = []
      }
    },
    movieDetail(id) {
      
      this.$router.push({
        path: `/movie/${id}`,
        params: { movie_id: id },
      })
      .catch(error => {
        if(error.name === "NavigationDuplicated" ){
            location.reload();
        }
      })

    },
    userName() {
      axios.post(`http://15.164.229.252/accounts/get-user-name/`, {}, {headers: authHeader()})
      .then(res => {
        this.loggedUser = res.data.username
        console.log(this.loggedUser)
      })
    },
  },
  created() {
    this.userName()
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