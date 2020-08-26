<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">
      Porygon2-UI
    </div>
    <ul class="menu">
      <li>菜单-1</li>
      <li>菜单-2</li>
    </ul>
    <img class="toggleAside" src="../assets/Ball.png" alt=""/>
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
    justify-content: center;
    align-items: center;

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

    > .toggleAside {
      display: none;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    }

    @media (max-width: 500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: inline-block;
      }
    }
  }
</style>