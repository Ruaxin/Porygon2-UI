<template>
  <h1>示例1</h1>
  <div class="wrapper">
    <Button @click="onClick">图鉴</Button>
    <Button theme="button">图鉴</Button>
    <Button theme="link">图鉴</Button>
    <Button theme="text">图鉴</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <div class="wrapper">
      <Button size="big">卡比兽</Button>
      <Button>多边兽</Button>
      <Button size="small">弱丁鱼</Button>
    </div>
    <div class="wrapper">
      <Button size="big" theme="link">卡比兽</Button>
      <Button theme="link">多边兽</Button>
      <Button size="small" theme="link">弱丁鱼</Button>
    </div>
    <div class="wrapper">
      <Button size="big" theme="text">卡比兽</Button>
      <Button theme="text">多边兽</Button>
      <Button size="small" theme="text">弱丁鱼</Button>
    </div>
  </div>
  <h1>示例3</h1>
  <div>
    <div class="wrapper">
      <Button level="main">高级球</Button>
      <Button>精灵球</Button>
      <Button level="danger">精灵球</Button>
    </div>
    <div class="wrapper">
      <Button level="main" theme="link">高级球</Button>
      <Button theme="link">精灵球</Button>
      <Button level="danger" theme="link">精灵球</Button>
    </div>
    <div class="wrapper">
      <Button level="main" theme="text">高级球</Button>
      <Button theme="text">精灵球</Button>
      <Button level="danger" theme="text">精灵球</Button>
    </div>
  </div>
  <h1>示例4</h1>
  <div class="wrapper">
    <Button disabled>禁用</Button>
    <Button disabled theme="link">禁用</Button>
    <Button disabled theme="text">禁用</Button>
  </div>
  <h1>示例5</h1>
  <div class="wrapper">
    <Button loading>对战中</Button>
    <Button>对战结束</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup() {
    const onClick = () => {
      window.alert('效果拔群！');
    };
    return {onClick};
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  margin: 10px 0;
}
</style>
