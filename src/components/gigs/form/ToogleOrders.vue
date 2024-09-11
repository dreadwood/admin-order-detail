<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{ value?: boolean }>(), { value: false })

const isActv = ref<boolean>(props.value)

const handle = () => {
  isActv.value = !isActv.value
}
</script>

<template>
  <button
    class="toogle"
    :class="{
      actv: isActv
    }"
    @click="handle"
  ></button>
</template>

<style lang="less" scoped>
@import '@style/common';
.toogle {
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  width: 33px;
  margin: 0;
  padding: 1px;
  background-color: @color-gray-773;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    width: 17px;
    height: 17px;
    background-color: @color-white;
    border-radius: 50%;
  }
  &.actv {
    justify-content: flex-end;
    background-color: @color-cornflower-blue;
  }
}
</style>
