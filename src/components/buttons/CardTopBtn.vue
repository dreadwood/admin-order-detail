<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <button class="btn-top">
    {{ text }}
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn-top {
  .transition(background-color);
  display: block;
  width: max-content;
  margin: 0;
  padding: 4px 14px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  color: @color-signal-blue;
  background-color: @color-very-pale-blue-2;
  border: 0;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
}
</style>
