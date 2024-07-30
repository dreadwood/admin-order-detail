<script setup lang="ts">
import iconRotate from '@icons/rotate.svg'
</script>

<template>
  <button class="btn">
    <iconRotate />
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn {
  .transition(background-color);
  display: block;
  width: max-content;
  margin: 0;
  padding: 4px 6px;
  color: @color-signal-blue;
  background-color: rgb(@color-black 0.8);
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  svg {
    width: 21px;
    height: 21px;
    fill: @color-white;
  }
  &:hover {
    background-color: @color-black;
  }
}
</style>
