<script setup lang="ts">
defineProps<{ isBorder?: boolean; value?: string; isSmall?: boolean }>()
</script>

<template>
  <input
    class="item"
    :class="{
      border: isBorder,
      small: isSmall
    }"
    type="text"
    :value="value"
  />
</template>

<style lang="less" scoped>
@import '@style/common';
.item {
  width: 100%;
  padding: 10px 9px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-white;
  border: 1px solid @color-white;
  border-radius: 9px;
  appearance: none;
  &.border {
    border-color: @color-very-pale-blue-3;
  }
  .small {
    padding: 7px;
    line-height: 17px;
  }
}
</style>
