<template>
  <div id="app">
    <nav id="nav" class="navbar-expand-lg align-items-center flex-column fixed-top bg-none">
      <!-- Home 컴포넌트 제작 -->
      <div class="container-fluid d-flex">
        <a href="/" class="navbar-brand">Home</a>
        <!-- Search bar 제작 -->
        <div class="input-group ps-5 ">
          <div id="navbar-search-autocomplete" class="form-outline">
            <input type="search" id="form1" class="form-control" placeholder="Search"/>
          </div>
        </div>
        <!-- 오른쪽 컴포넌트 제작 -->
        <div>
          <ul class="navbar-nav flex-row">
            <li class="nav-item"><router-link to="/"> Home </router-link></li>
            <p class="px-2">|</p>
            <li class="nav-item"><router-link to="/login"> 로그인 </router-link></li>
            <p class="px-2">|</p>
            <li class="nav-item"><router-link to="/CreateAccount"> 회원가입 </router-link></li>
          </ul>
        </div>
        <!-- 오른쪽 컴포넌트 마지막 -->
      </div>
    </nav>
    <router-view />
  </div>
</template>

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
