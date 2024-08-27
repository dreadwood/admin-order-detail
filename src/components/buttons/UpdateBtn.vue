<script setup lang="ts">
import iconUpdate from '@icons/update.svg'
</script>

<template>
  <button class="btn-update">
    <iconUpdate />
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn-update {
  .transition(color);
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  color: @color-amber;
  background-color: transparent;
  border: 0;
  svg {
    width: 24px;
    height: 24px;
    fill: currentcolor;
  }
  &[disabled] {
    opacity: 0.6;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    color: @color-melon-yellow;
    cursor: pointer;
  }
}
</style>
