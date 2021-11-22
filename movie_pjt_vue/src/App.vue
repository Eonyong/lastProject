<template>
  <div id="app">
    <nav id="nav" class="navbar-expand-md item-align-center flex-column fixed-top bg-transparent box-sizing-inherit">
      <!-- side padding nav 제작 -->
      <b-sidebar id="sidebar-1" class="bg-transparent"
      aria-labelledby="sidebar-no-header-title"
      backdrop backdrop-variant="transparent"
      no-header shadow>
        <!-- 오른쪽 컴포넌트 제작 -->
        <b-button-group vertical class="d-flex" style="text-align: center;">
          <!-- <li class="nav-item"><router-link to="/"> Home </router-link></li> -->
          <b-button class="btn btn-link" :to="{path: '/'}"
          variant="link">
            메 인 화 면
          </b-button>

          <b-button class="btn btn-link" :to="{path: '/accounts/login'}"
          v-if="login" variant="link">
            로 그 인
          </b-button>
          
          <b-button class="btn btn-link" :to="{path: '/accounts/signup'}"
          v-if="login" variant="link">
            회 원 가 입
          </b-button>

          <b-button class="btn btn-link" v-else
          @click.native="logout" variant="link">
            로 그 아 웃
          </b-button>

          <b-button class="btn btn-link"
          :to="{path: '/movie/MovieList'}" variant="link">
            영 화 목 록
          </b-button>

          <b-button class="btn btn-link"
          :to="{path: '/accounts/signup'}" variant="link">
            모 든 리 뷰 모 아 보 기
          </b-button>
        </b-button-group>
      </b-sidebar>
      <!-- Home 컴포넌트 제작 -->
      <div class="container-fluid d-flex">
        <b-button v-b-toggle.sidebar-no-header v-b-toggle.sidebar-1 class="bg-transparent">
          <b-icon-list/>
          <!-- <img :src="require('@/assets/list_icon.png')" style="image-rendering: auto;" alt="" v-b-toggle.sidebar-1 width="32" height="32"> -->
        </b-button>
        <!-- Search bar 제작 -->
        <div class="input-group ps-5 ">
          <div id="navbar-search-autocomplete" class="form-outline">
            <input type="search" id="form1" class="form-control bg-transparent" placeholder="Search"/>
          </div>
        </div>
      </div>
      
    </nav>
    <router-view @login="login = false"/>
    
  </div>
</template>

<script>
import MovieList from '@/views/movie/MovieList'

export default {
  name: 'App',
  data: function () {
    return {
      login: false,
    }
  },
  component: {
    MovieList,
  },
  methods: {

    logout: function () {
      localStorage.removeItem('jwt')
      this.$router.push({ name: 'Login' })
    },
    
  },
  created: function () {
    // 1. Vue instance가 생성된 직후에 호출되어 jwt를 가져오기
    const token = localStorage.getItem('jwt')
    // 2. 토큰이 있다면
    if (token) {
      // 3. true로 변경하고, 없으면 유지한다.
      this.login = true
    }
  }
}

</script>

<style>
#app {
  font-family: 'Do Hyeon', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  white-space: wrap;
  padding: auto;
  margin: auto;
}

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
