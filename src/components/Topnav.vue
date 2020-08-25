<template>
  <div class="topnav">
    <div class="logo">
      Porygon2-UI
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Topnav'
  }
</script>

<style lang="scss" scoped>
  .topnav {
    background: #77b9d7;
    display: flex;
    padding: 16px;

    > .logo {
      margin-right: auto;
      max-width: 8em;
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      align-items: center;

      > li {
        margin: 0 1em;
      }
    }
  }
</style>