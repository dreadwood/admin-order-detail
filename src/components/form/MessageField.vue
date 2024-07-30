<script setup lang="ts">
defineProps<{ placeholder?: string }>()
</script>

<template>
  <div class="field-wrp">
    <textarea class="field-input" :placeholder="placeholder"></textarea>
    <button class="field-btn" type="button">Send</button>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.field-wrp {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px;
  overflow: hidden;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-4;
  border-radius: 40px;
}
.field-input {
  .hide-scroll();
  width: 100%;
  height: 28px;
  padding: 5px;
  overflow: scroll;
  font-family: @font-default;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: @color-signal-blue;
  background-color: transpaerent;
  border: 0;
  appearance: none;
  resize: none;
  &::placeholder {
    opacity: 0.6;
  }
}
.field-btn {
  .transition(background-color);
  display: block;
  flex-shrink: 0;
  width: max-content;
  margin: 0;
  padding: 5px 16px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  text-align: left;
  color: @color-white;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: @color-cornflower;
  }
}
</style>
