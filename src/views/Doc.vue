<template>
  <div class="layout">
    <Topnav class="nav"></Topnav>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  name: 'Doc',
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 53px;
    padding-left: 150px;
    display: flex;
    @media (max-width: 500px) {
      padding-left: 0;
      padding-top: 50px;
    }

    > aside {
      flex-shrink: 0;
      background: #e57d90;
      width: 150px;
      position: fixed;
      top: 0;
      left: 0;
      padding: 70px 16px 16px;
      height: 100%;
      @media (max-width: 500px) {
        width: 130px;
        z-index: 1;
      }

      > h2 {
        margin-bottom: 4px;
      }

      > ol {
        > li {
          padding: 4px 0;
        }
      }
    }

    > main {
      flex-grow: 1;
      padding: 10px 16px;
      background: #e7e7d8;
      overflow: auto;
    }
  }
}
</style>