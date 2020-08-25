<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>Porygon2-UI</h1>
      <h2>总之是个 UI 框架</h2>
      <p class="actions">
        <a>Github</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';

  export default {
    name: 'Home',
    components: {Topnav}
  };
</script>

<style lang="scss" scoped>
  .topnav {
    background: #77b9d7;
    display: flex;
    padding: 16px;

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

  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #e57d90;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: #555553;
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 8px;
        color: #fffeff;
      }
    }
  }
</style>