<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "microsoft yahei", "PingFangSC-Regular", "Avenir", Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
@media screen and (min-width: 1280px) {
  #app {
    font-size: 93.7%;
  }
}
@media screen and (min-width: 1366px) {
  #app {
    font-size: 100%;
  }
}
</style>
