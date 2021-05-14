<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物节</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/navbar/NavBar.vue'

 export default {
   name:'Home',
   components:{
     NavBar
   }
 }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
  }
</style>
