<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>图鉴</Button>
    <Button theme="button">图鉴</Button>
    <Button theme="link">图鉴</Button>
    <Button theme="text">图鉴</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">卡比兽</Button>
    <Button>多边兽</Button>
    <Button size="small">弱丁鱼</Button>
  </div>
  <div>
    <Button size="big" theme="link">卡比兽</Button>
    <Button theme="link">多边兽</Button>
    <Button size="small" theme="link">弱丁鱼</Button>
  </div>
  <div>
    <Button size="big" theme="text">卡比兽</Button>
    <Button theme="text">多边兽</Button>
    <Button size="small" theme="text">弱丁鱼</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return {onClick};
  }
};
</script>

<style scoped>

</style>
