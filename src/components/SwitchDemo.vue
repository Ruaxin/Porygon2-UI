<template>
  <div>
    <h1>示例</h1>
    <Switch v-model:value="bool"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>
<style lang="scss" scoped>
h1{
  margin-bottom: 10px;
}
</style>
