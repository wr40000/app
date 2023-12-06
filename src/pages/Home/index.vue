<template>
  <div>
    <!--三级联动全局组件已经注册为全局组件，所以不需要载引入-->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor) in floorsList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/index.vue'
import Recommend from '@/pages/Home/Recommend/index.vue'
import Rank from '@/pages/Home/Rank/index.vue'
import Like from '@/pages/Home/Like/index.vue'
import Floor from '@/pages/Home/Floor/index.vue'
import Brand from '@/pages/Home/Brand/index.vue'
import { mapState } from "vuex";
export default {
  name:'HomeCompontent',
  components:{
    ListContainer,Recommend,Rank,Like,Floor,Brand
  },
  mounted(){
    //这里Floors的数据一定要写到home组件里
    this.$store.dispatch("getFloorsList");
  },
  computed:{
    ...mapState({
      floorsList: (state) => state.home.floorsList,
    }),
  }
}
</script>

<style>

</style>