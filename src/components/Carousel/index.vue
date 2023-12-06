<template>
  <div class="swiper-container" ref="mySwiper" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "CarouselCompontent",
  props:['list'],
  watch:{
    list: {
      //监听不到List的属性，因为是Home父组件传过来的，
      // Vue: 但是没关系，就当时为了我，对他使用immediate：TRUE吧，上来立即监听一次
      //道理同Listcontainer一样，需要使用nextTick属性
      //this.$refs.mySwiper =>  ".swiper-container"
      immediate:true,
      handler(){
        this.$nextTick(()=>{
            var mySwiper = new Swiper(".swiper-container", {
            direction: "horizontal", // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            scrollbar: {
              el: ".swiper-scrollbar",
            },
          });
        })
      }
    }
  }
};
</script>

<style>
</style>