<template>
  <button :class="{'porygon2-checked':value}" @click="toggle" class="porygon2-switch">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  name: 'Switch',
  props: {
    value: Boolean
  },
  setup(props: any, context: any) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.porygon2-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: #b4b0af;
  border-radius: $h/2;
  position: relative;

  &:focus {
    outline: none;
  }

  > span {
    height: $h2;
    width: $h2;
    position: absolute;
    background: url("../assets/Normal.png") no-repeat;
    background-size: 100% 100%;
    top: 2px;
    left: 2px;
    border-radius: $h2/2;
    transition: left 250ms;
  }

  &.porygon2-checked {
    background: #5489ae;

    > span {
      left: calc(100% - #{$h2} - 2px)
    }
  }

  &:active {
    > span {
      width: $h2 + 4px;
      height: $h2 + 4px;
      margin-top: -2px;
      margin-left: -4px;
    }
  }

  &.porygon2-checked:active {
    > span {
      width: $h2 + 4px;
      height: $h2 + 4px;
      margin-top: -2px;
      margin-left: 0;
    }
  }
}
</style>
