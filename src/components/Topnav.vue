<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">
      Porygon2-UI
    </div>
    <ul class="menu">
      <li>菜单-1</li>
      <li>菜单-2</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    name: 'Topnav',
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleMenu = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {toggleMenu};
    }
  };
</script>

<style lang="scss" scoped>
  .topnav {
    background: #77b9d7;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;

    > .logo {
      margin-right: auto;
      max-width: 6em;
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