<template>
  <button :class="{checked}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
  import {ref} from 'vue';

  export default {
    name: 'Switch',
    setup() {
      const checked = ref(false);
      const toggle = () => {
        checked.value = !checked.value;
      };
      return {checked, toggle};
    }
  };
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: $h*2;
    border: none;
    background: #b4b0af;
    border-radius: $h/2;
    position: relative;

    &:focus {
      outline: none;
    }
  }

  span {
    height: $h2;
    width: $h2;
    position: absolute;
    background: #fffeff;
    top: 2px;
    left: 2px;
    border-radius: $h2/2;
    transition: left 250ms;
  }

  button.checked {
    background: #5489ae;

    > span {
      left: calc(100% - #{$h2} - 2px)
    }
  }

</style>