<script setup lang="ts">
import iconCirclePhone from '@icons/circle-phone.svg'

const props = defineProps<{
  values?: string[]
}>()

const values = props.values || ['red', 'yellow', 'blue', 'green']
</script>

<template>
  <div class="call-info">
    <iconCirclePhone v-if="values.includes('green')" class="icon green" />
    <iconCirclePhone v-if="values.includes('yellow')" class="icon yellow" />
    <iconCirclePhone v-if="values.includes('red')" class="icon red" />
    <iconCirclePhone v-if="values.includes('blue')" class="icon blue" />
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.call-info {
  display: flex;
  align-items: center;
  gap: 5px;
}
.icon {
  display: block;
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  &.green {
    fill: @color-lime-green-2;
  }
  &.yellow {
    fill: @color-rich-red-orange;
  }
  &.red {
    fill: @color-radical-red;
  }
  &.blue {
    fill: @color-heavenly;
  }
}
</style>
