<script setup lang="ts">
import iconCallPhone2 from '@icons/call-phone-2.svg'
</script>

<template>
  <button class="btn-call">
    <iconCallPhone2 />
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn-call {
  .transition(background-color);
  display: grid;
  place-items: center;
  width: 38px;
  height: 23px;
  margin: 0;
  padding: 0;
  background-color: @color-dark-pastel-green;
  border: 0;
  border-radius: 20px;
  svg {
    width: 13px;
    height: 13px;
    fill: @color-white;
  }
  &[disabled] {
    opacity: 0.6;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    background-color: @color-lime-green-2;
    cursor: pointer;
  }
}
</style>
