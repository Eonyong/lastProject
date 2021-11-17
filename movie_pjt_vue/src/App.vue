<template>
  <div id="app">
    <nav id="nav" class="navbar-expand-md align-items-center flex-column fixed-top bg-none">
      <!-- side padding nav 제작 -->
      <b-sidebar id="sidebar-1" title="Homepage Name" shadow>
        <!-- 오른쪽 컴포넌트 제작 -->
        <div>
          <ul class="navbar-nav flex-col">
            <!-- <li class="nav-item"><router-link to="/"> Home </router-link></li> -->
            <span>
              <div v-if="login">
                <li class="nav-item">
                  <button class="btn btn-link" style="width: auto;">
                    <router-link to="/accounts/login"> 로그인 </router-link>
                  </button>
                </li>
                <li class="nav-item">
                  <button class="btn btn-link">
                    <router-link to="/accounts/signup"> 회원가입 </router-link>
                  </button>
                </li>
              </div>
              <div v-else>
                <li class="nav-item">
                  <button class="btn btn-link">
                    <router-link @click.native="logout" to="#"> 로그아웃 </router-link>
                  </button>
                </li>
              </div>

              <li class="nav-item">
                <button class="btn btn-link">
                  <router-link to="#"> 영화 목록 </router-link>
                </button>
              </li>
              <li class="nav-item">
                <button class="btn btn-link">
                  <router-link to="#"> 모든 리뷰 모아보기 </router-link>
                </button>
              </li>

            </span>
          </ul>
        </div>
      </b-sidebar>
      <!-- Home 컴포넌트 제작 -->
      <div class="container-fluid d-flex">
        <img :src="require('@/assets/list_icon.png')" style="image-rendering: auto;" alt="" v-b-toggle.sidebar-1 width="40" height="40">
        <!-- Search bar 제작 -->
        <div class="input-group ps-5 ">
          <div id="navbar-search-autocomplete" class="form-outline">
            <input type="search" id="form1" class="form-control" placeholder="Search"/>
          </div>
        </div>
        
        <!-- 오른쪽 컴포넌트 마지막 -->
      </div>
      
    </nav>
    <router-view @login="login = false"/>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      login: false,
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('jwt')
      this.$router.push({ name: 'Login' })
    }
    
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  white-space: nowrap;
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
