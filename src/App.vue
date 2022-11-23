<template>
  <div id="app">
    <navTop />
    <navMenu />
    <router-view/>
    <Thefooter />
  </div>
</template>

<script>
import navTop from './components/layout/navTop.vue';
import navMenu from './components/layout/navMenu.vue';
import Thefooter from './components/layout/thefooter.vue';

export default {
  name: "App",
  components: { navTop, Thefooter, navMenu }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
