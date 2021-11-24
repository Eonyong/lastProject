<template>
  <div id="app">
    <SideBar />
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "@/components/sidebar";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style>
#app {
  font-family: "Do Hyeon", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  white-space: wrap;
  padding: auto;
  margin: auto;
}
</style>
