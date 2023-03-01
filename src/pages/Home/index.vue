<template>
  <div>
    <!--三级联动全局组件已经注册为全局组件，所以不需要载引入-->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
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
export default {
  name:'',
  components:{
    ListContainer,Recommend,Rank,Like,Floor,Brand
  }
}
</script>

<style>

</style>