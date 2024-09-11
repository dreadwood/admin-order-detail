<script setup lang="ts">
import iconShare from '@icons/share.svg'

defineProps<{ text: string }>()
</script>

<template>
  <button class="address">
    <iconShare />
    {{ text }}
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.address {
  .transition(color);
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  margin: 0;
  padding: 0;
  font-family: @font-default;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  text-align: left;
  color: @color-darkblue-crayola;
  text-decoration: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  svg {
    display: block;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    fill: currentcolor;
  }
  &:hover,
  &:focus-visible {
    color: @color-blue-degrees;
  }
}
</style>
