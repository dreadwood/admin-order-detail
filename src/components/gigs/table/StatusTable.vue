<script setup lang="ts">
const props = defineProps<{ text: string }>()

const labels = [
  {
    name: 'Delivered',
    color: 'green'
  },
  {
    name: 'Not Present',
    color: 'pink'
  },
  {
    name: 'Wrong Address',
    color: 'yellow'
  },
  {
    name: 'Refuse',
    color: 'red'
  },
  {
    name: 'Driver Out',
    color: 'darkgreen'
  }
]

const label = labels.find((it) => it.name === props.text)
</script>

<template>
  <div class="status-label" :class="label?.color">
    {{ label?.name }}
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.status-label {
  .text-nowrap();
  width: 120px;
  padding: 4px 10px 3px 10px;
  font-size: 14px;
  line-height: 19px;
  font-weight: 700;
  text-align: center;
  color: @color-white;
  border-radius: 30px;
  &.green {
    background-color: @color-dark-pastel-green;
  }
  &.pink {
    background-color: @color-wild-watermelon-crayola;
  }
  &.yellow {
    background-color: @color-amber;
  }
  &.red {
    background-color: @color-fluorescent-red;
  }
  &.darkgreen {
    background-color: @color-toad-in-love;
  }
}
</style>
