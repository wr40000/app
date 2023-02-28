<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!--Home和Search显示，Login和Register不显示-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
</style>
