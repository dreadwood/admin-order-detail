<script setup lang="ts">
import iconMagnifier from '@icons/magnifier.svg'
</script>

<template>
  <div class="field-search">
    <input type="search" placeholder="Search..." />
    <iconMagnifier class="icon" />
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.field-search {
  position: relative;
  input {
    display: block;
    width: 100%;
    padding: 4px 40px 4px 11px;
    font-family: @font-default;
    font-size: 14px;
    line-height: 18px;
    color: @color-signal-blue;
    background-color: @color-white;
    border: 1px solid @color-very-pale-blue-3;
    border-radius: 20px;
    &::placeholder {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
      color: rgb(@color-grayish-blue 0.7);
    }
    &::-webkit-search-cancel-button {
      display: none;
    }
    // for hidden key icon in safari
    &::-webkit-credentials-auto-fill-button {
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 1px;
      opacity: 0;
    }
  }
}
.icon {
  position: absolute;
  top: 50%;
  right: 12px;
  display: block;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  fill: @color-very-pale-blue-3;
}
</style>
