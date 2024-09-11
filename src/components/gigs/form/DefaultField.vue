<script setup lang="ts">
defineProps<{
  value?: string
  name?: string
  placeholder?: string
  isDisabled?: boolean
}>()
</script>

<template>
  <input
    class="field"
    type="text"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :disabled="isDisabled"
  />
</template>

<style lang="less" scoped>
@import '@style/common';
.field {
  .transition(border-color);
  display: block;
  width: 100%;
  padding: 7px 11px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 8px;
  outline: none;
  appearance: none;
  &::placeholder {
    color: rgb(@color-signal-blue 0.4);
  }
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }
  &:hover,
  &:focus-visible {
    border-color: rgb(@color-cornflower-blue 0.5);
  }
}
</style>
