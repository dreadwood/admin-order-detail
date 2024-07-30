<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <button class="btn-blue">{{ text }}</button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn-blue {
  .transition(background-color);
  display: block;
  width: 100%;
  margin: 0;
  padding: 6px 20px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: center;
  color: @color-white;
  text-transform: none;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: @color-cornflower;
  }
}
</style>
