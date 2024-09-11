<script setup lang="ts">
import iconMagnifier from '@icons/magnifier.svg'

defineProps<{ placeholder?: string; value?: string }>()
</script>

<template>
  <div class="search">
    <input
      class="search"
      type="search"
      :placeholder="placeholder"
      :value="value"
    />
    <iconMagnifier class="icon" />
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.search {
  position: relative;
  flex-shrink: 0;
  input {
    display: block;
    width: 100%;
    padding: 5px 10px 5px 26px;
    font-family: @font-default;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    text-align: left;
    color: @color-signal-blue;
    background-color: @color-white;
    border: 1px solid rgb(@color-signal-blue 0.5);
    border-radius: 30px;
    &::placeholder {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
      color: rgb(@color-signal-blue 0.5);
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
  left: 10px;
  display: block;
  width: 14px;
  height: 14px;
  transform: translateY(-50%);
  fill: rgb(@color-signal-blue 0.5);
}
</style>
