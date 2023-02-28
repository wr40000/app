<template>
  <div>
    <div>params参数：{{ this.$route.params.keyword }}</div>
    <div>query参数：{{ this.$route.query.k }}</div>
    <div>props-----params:{{ this.keyword }}  k:{{ k }}</div>
  </div>
</template>

<script>
export default {
  props:['keyword','k']
};
</script>

<style>
</style>