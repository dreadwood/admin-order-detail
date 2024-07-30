<script setup lang="ts">
import { ref } from 'vue'

import iconArrow from '@icons/dropdown-arrow.svg'

const props = defineProps<{ isShow?: boolean }>()

const isActv = ref<boolean>(props.isShow || false)

const btnHandle = () => {
  isActv.value = !isActv.value
}
</script>

<template>
  <button
    class="btn-expand"
    :class="{
      actv: isActv
    }"
    @click="btnHandle()"
  >
    <iconArrow />
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn-expand {
  .transition(background-color);
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  background-color: rgb(@color-signal-blue 0.1);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  svg {
    .transition(transform);
    display: block;
    width: 20px;
    height: 16px;
    fill: @color-signal-blue;
  }
  &:hover {
    background-color: rgb(@color-signal-blue 0.15);
  }
  &.actv {
    svg {
      transform: scaleY(-1);
    }
  }
}
</style>
