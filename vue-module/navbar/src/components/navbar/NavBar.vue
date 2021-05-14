<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'NavBar',
  }
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    display: flex;
  }
  .left,.right{
    width: 60px;
    background-color: green;
  }
  .center{
    flex: 1;
    background-color: red;
    text-align: center;
  }
</style>
