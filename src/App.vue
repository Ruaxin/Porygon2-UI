<template>
  <div class="topBar">
    导航栏
    |
    <router-link to="/">首页</router-link>
    |
    <router-link to="/doc">文档</router-link>
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
  }
</script>
<style lang="scss" scoped>
  .topBar{
    background: #9bcce2;
  }
</style>