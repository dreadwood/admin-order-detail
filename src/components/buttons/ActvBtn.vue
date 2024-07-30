<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  text: string
  isActv?: boolean
  icon?: string
  type?: 1 | 2 | 3 | 4 | 5
}>()

const isBtnActiv = ref<boolean>(props.isActv)

const btnHandle = () => {
  isBtnActiv.value = !isBtnActiv.value
}
</script>

<template>
  <button
    class="btn-filter"
    :class="{
      actv: isBtnActiv,
      style2: type === 2,
      style3: type === 3,
      style4: type === 4,
      style5: type === 5
    }"
    @click="btnHandle"
  >
    <div v-if="icon" v-html="icon" class="btn-icon"></div>
    {{ text }}
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn-filter {
  .transition(color, background-color);
  display: block;
  flex-shrink: 0;
  width: max-content;
  margin: 0;
  padding: 6px 16px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 19px;
  color: @color-signal-blue;
  background-color: @color-very-pale-blue-2;
  border: 0;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
  &.actv {
    color: @color-white;
    background-color: @color-cornflower-blue;
  }
  &.style2 {
    padding-top: 5px;
    font-weight: 500;
    background-color: @color-periwinkle-crayola;
    &.actv {
      color: @color-white;
      background-color: @color-cornflower-blue;
    }
  }
  &.style3 {
    padding: 6px 12px;
    padding-top: 5px;
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    background-color: @color-gray-965;
    border-radius: 20px;
    &.actv {
      color: @color-white;
      background-color: @color-cornflower-blue;
    }
  }
  &.style4 {
    padding: 6px 12px;
    padding-top: 5px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    background-color: @color-white;
    border-radius: 30px;
    &.actv {
      color: @color-white;
      background-color: @color-cornflower-blue;
    }
  }
  &.style5 {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 12px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    border-radius: 30px;
  }
}
.btn-icon {
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  & > * {
    display: block;
    width: 100%;
    height: 100%;
    fill: currentcolor;
  }
}
</style>
