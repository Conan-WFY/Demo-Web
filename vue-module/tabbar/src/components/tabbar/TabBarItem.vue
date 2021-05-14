<template>
  <div class="tab-bar-item" @click="tabClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
	  <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
	<div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props: {
      path: String, // 设置动态值
	  activeColor: {
		  path: String,
		  default:'red',
	  }
    },
    data(){
      return {
        // isActive: true, // 定义固定值
      }
    },
    computed:{
      isActive() {
        //indexOf()判断当前的path是否为活跃的 是则返回true 否则返回false
        return this.$route.path.indexOf(this.path) !== -1;
      },
	  activeStyle() {
		  return this.isActive? {color: this.activeColor}:{}
	  }
    },
    methods:{
      tabClick() {
        // console.log(this.path);
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
/* .active{
   color: red;
 } */
</style>
