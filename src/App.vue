<template>
  <div>
    导航栏
    |
    <router-link to="/">首页</router-link>
    |
    <router-link to="/test">测试</router-link>
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
  }
</script>