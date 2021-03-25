<template>
  <div class="zoom-box">
    <div class="zoom-img" ref="zoomBox">
      <div class="small-box" ref="smallBox" @mousemove="setZoomImg($event)" @mouseleave="outZoomImg">
        <img :src="currentImg">
        <div class="mask" ref="mask" v-show="isShow"></div>
      </div>
      <div class="big-box" ref="bigImg" :style="{background: `url(${currentImg})`}">
      </div>
    </div>
    <div class="img-list">
      <div
      :class="{'img-item': true, active: currentImg==url}"
      v-for="(url, index) in imgs"
      :key="index"
     @mouseenter="currentImg = url">
     <el-image fill :src="url"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zoom-box',
    props: ['imgs'],
    data() {
      return {
        currentImg: this.imgs[1],
        lastIndex: 1,
        isShow: false,
      }
    },
    watch: {
      imgs(val) {
        // 当imgs的值发生变化时，更新 currentImg的值
        this.currentImg = val[1];
      }
    },
    methods: {
      outZoomImg() {
        this.isShow = false
      },
      setZoomImg(e) {
        this.isShow = true;
        var level = 2;
        var zoomBox = this.$refs.zoomBox;
        var smallBox = this.$refs.smallBox;
        var mask = this.$refs.mask;
        var bigImg = this.$refs.bigImg;

        // 通过level来设置mask的大小
        mask.style.width = zoomBox.offsetWidth/level + 'px';
        mask.style.height = zoomBox.offsetHeight/level + 'px';
        // 通过level来设置bigimg的backgroundSize的大小
        bigImg.style.backgroundSize = level + '00%' + ' ' + 'auto';

        // 获取边界的元素的属性
        let x = e.pageX - mask.offsetWidth / 2 - zoomBox.offsetLeft; // X方向
        let y = e.pageY - mask.offsetHeight / 2 - zoomBox.offsetTop; // Y方向
        // 设置边界参数
        let minX = 0;
        let minY = 0;
        let maxX = smallBox.clientWidth - mask.offsetWidth; // 400 - 200
        let maxY = smallBox.clientHeight - mask.offsetHeight; // 400 - 200
        // 边界限制
        x = x < minX ? minX : x; // x<0? 0:x
        y = y < minY ? minY : y; // y<y? 0:y
        x = x > maxX ? maxX : x; // x>400? 400:x
        y = y > maxY ? maxY : y; // y>400? 400:y
        // 通过限制设置mask定位
        mask.style.top = y + 'px';
        mask.style.left = x + 'px';

        // 通过大小来获取比例
        let scoleX = bigImg.offsetWidth/mask.offsetWidth;
        let scoleY = bigImg.offsetHeight/mask.offsetHeight;
        // 通过比例设置大图的定位
        bigImg.style.backgroundPositionX = -mask.offsetLeft * scoleX + 'px';
        bigImg.style.backgroundPositionY = -mask.offsetTop * scoleY + 'px';
      }
    },
  }
</script>
<!--
使用背景图片的特性实现可调控的放大倍数
 -->
<style scoped>
  .zoom-box {
    flex-shrink: 0;
    width: 400px;
    height: 480px;
    z-index: 10;
  }

  .zoom-img {
    width: 100%;
    height: 400px;
    position: relative;
  }

  .small-box {
    width: 400px;
    height: 400px;
    position: relative;
    box-shadow: 0 0 1px #333;
  }

  .small-box img {
    width: 100%;
    height: 100%;
  }

  .small-box .mask {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(243, 245, 139, 0.3);
  }

  .small-box:hover .mask {
    display: block;
    cursor: move;
  }

  .big-box {
    width: 400px;
    height: 400px;
    box-shadow: 0 0 1px #333;
    overflow: hidden;
    position: absolute;
    left: 410px;
    top: 0;
    display: none;
    background-size: 200% auto;
    background-repeat: no-repeat;
  }






  .small-box:hover~.big-box {
    display: block;
  }

  .img-list {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    /* overflow: hidden; */
  }

  .img-list .img-item {
    flex-shrink: 0;
    width: 80px;
    height: 78px;
    border: 1px solid transparent;
    cursor: pointer;
  }

  .img-list .img-item:nth-child(1) {
    display: none;
  }

  .img-list .img-item.active {
    border-color: #e4393c;
  }
</style>
