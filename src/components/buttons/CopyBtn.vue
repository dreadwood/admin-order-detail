<script setup lang="ts">
import { ref } from 'vue'

import iconCopy1 from '@icons/copy-2.svg'
import iconCopy2 from '@icons/copy-3.svg'

withDefaults(
  defineProps<{
    icon?: 1 | 2
    color?: 'lightblue' | 'darkblue'
    width?: number
    height?: number
    aria?: string
  }>(),
  {
    icon: 1,
    color: 'lightblue',
    width: 16,
    height: 16
  }
)

const isBtnNumActiv = ref<boolean>(false)

const btnNumHandle = () => {
  isBtnNumActiv.value = true
  setTimeout(() => {
    isBtnNumActiv.value = false
  }, 1000)
}
</script>

<template>
  <button
    class="btn-copy"
    :class="[color, { actv: isBtnNumActiv }]"
    @click="btnNumHandle"
    :aria-label="aria"
  >
    <iconCopy1 v-if="icon === 1" :width="width" :height="height" />
    <iconCopy2 v-if="icon === 2" :width="width" :height="height" />
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn-copy {
  .transition(color);
  display: block;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  color: @color-cornflower-blue;
  background-color: transparent;
  border: 0;
  &:hover {
    color: @color-cornflower;
  }
  &:not([disabled]) {
    cursor: pointer;
  }
  svg {
    display: block;
    fill: currentcolor;
  }
}
.lightblue {
  &.actv {
    color: @color-signal-blue;
  }
}
.darkblue {
  color: @color-signal-blue;
  &.actv {
    color: @color-cornflower-blue;
  }
}
</style>
