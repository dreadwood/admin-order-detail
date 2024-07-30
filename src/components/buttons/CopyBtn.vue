<script setup lang="ts">
import iconCopy from '@icons/copy-2.svg'

defineProps<{ aria?: string }>()
</script>

<template>
  <button class="btn-copy" aria-label="{{ aria }}">
    <iconCopy />
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn-copy {
  .transition(color);
  display: block;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;
  color: @color-cornflower-blue;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover {
    color: @color-cornflower;
  }
  svg {
    width: 16px;
    height: 16px;
    fill: currentcolor;
  }
}
</style>
