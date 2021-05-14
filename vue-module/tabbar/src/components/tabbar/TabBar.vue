<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
 #tab-bar{
   display: flex;
   background-color: #f1f1f1;
   position: fixed;
   bottom: 0;
   right: 0;
   left: 0;
   box-shadow: 0px -3px 2px rgba(100,100,100,.1);
  }

</style>
