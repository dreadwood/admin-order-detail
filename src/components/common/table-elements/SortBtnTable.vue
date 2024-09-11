<script setup lang="ts">
import { ref } from 'vue'

import iconArrowTop from '@assets/icons/arrow-sort-top.svg'
import iconArrowBottom from '@assets/icons/arrow-sort-bottom.svg'

const props = defineProps<{ status?: 'top' | 'bottom' }>()

const status = ref<'top' | 'bottom' | undefined>(props.status)

const handle = () => {
  status.value = status.value === 'top' ? 'bottom' : 'top'
}
</script>

<template>
  <button class="sort-btn" type="button" @click="handle">
    <iconArrowTop
      :class="{
        actv: status === 'top'
      }"
    />
    <iconArrowBottom
      :class="{
        actv: status === 'bottom'
      }"
    />
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.sort-btn {
  display: grid;
  place-items: center;
  place-content: center;
  gap: 2px;
  width: 18px;
  height: 18px;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  svg {
    display: block;
    width: 8px;
    height: 5px;
    fill: @color-light-purple-blue;
    &.actv {
      fill: @color-grey-umber;
    }
  }
}
</style>
