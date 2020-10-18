<template>
  <div>
    <Switch v-model:value="initValue"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const initValue = ref(true);
    return {initValue};
  }
};
</script>

<style lang="scss" scoped>

</style>