<template>
  <div id="app">
    <div id="nav" class="navbar">
      <form role="search" class="navbar-form navbar-left navbar-search-form"><div class="input-group"><input type="text" value="" placeholder="Search..." class="form-control"> <span class="input-group-addon"><i class="fa fa-search"></i></span></div></form>
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/login">로그인</router-link> |
        <router-link to="/CreateAccount">회원가입</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
