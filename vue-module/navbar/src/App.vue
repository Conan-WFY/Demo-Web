<template>
  <div id="app">
    <!-- <router-view/> -->
    <nav-bar><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from './components/navbar/NavBar.vue'
export default {
  name: 'App',
  components:{
    NavBar
  }
}
</script>

<style>
@import url("assets/css/base.css");
</style>
