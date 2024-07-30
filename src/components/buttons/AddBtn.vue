<script setup lang="ts">
defineProps<{ text: string; type?: 1 | 2 }>()
import iconPlus from '@icons/plus-circle.svg'
</script>

<template>
  <button
    class="btn-add"
    :class="{
      small: type === 2
    }"
  >
    <iconPlus />
    {{ text }}
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn-add {
  .transition(background-color);
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  margin: 0;
  padding: 4px 16px 4px 4px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: @color-white;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: @color-cornflower;
  }
  svg {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    fill: currentcolor;
  }
  &.small {
    gap: 4px;
    padding: 3px 13px 3px 5px;
    line-height: 18px;
    svg {
      flex-shrink: 0;
      width: 14px;
      height: 14px;
      fill: currentcolor;
    }
  }
}
.icon {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 22px;
  height: 22px;
  background-color: @color-white;
  border-radius: 50%;
}
</style>
