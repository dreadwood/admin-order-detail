<script setup lang="ts">
import { ref } from 'vue'

import iconBag from '@icons/bag.svg?raw'
import iconClock from '@icons/clock.svg?raw'
import iconTimer from '@icons/timer.svg?raw'
import iconTruck from '@icons/truck.svg?raw'

const values = [
  {
    name: 'All',
    icon: null,
    color: null
  },
  {
    name: 'Only Pick Up',
    icon: iconBag,
    color: '#FFBE00'
  },
  {
    name: 'Only Time Window',
    icon: iconClock,
    color: '#B5A5FF'
  },
  {
    name: 'Only Same Day',
    icon: iconTimer,
    color: '#FFC971'
  },
  {
    name: 'Only Regular',
    icon: iconTruck,
    color: '#29B6FF'
  }
] as const

type Status = (typeof values)[number]
type StatusName = Status['name']

const props = defineProps<{
  value: StatusName
  count: number
  isActv?: boolean
}>()

const item = values.find((it) => it.name === props.value)

const isActv = ref<boolean>(props.isActv || false)
const handle = () => (isActv.value = !isActv.value)
</script>

<template>
  <button
    class="status-filter"
    :class="{
      actv: isActv
    }"
    @click="handle()"
  >
    <div
      v-if="item?.icon"
      v-html="item.icon"
      class="icon"
      :style="{
        color: item.color
      }"
    />
    <div class="popover" v-if="item?.name !== values[0].name">
      {{ item?.name }}
    </div>
    {{ item?.name === values[0].name ? values[0].name : '' }}
    {{ count }}
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.status-filter {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
  padding: 2px 8px;
  font-family: @font-default;
  font-size: 16px;
  font-weight: 21px;
  font-weight: 700;
  color: @color-signal-blue;
  background-color: @color-gray-965;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  &.actv {
    color: @color-white;
    background-color: @color-cornflower-blue;
    .icon > * {
      fill: @color-white;
    }
  }
  &:hover,
  &:focus-visible {
    .popover {
      display: block;
    }
  }
}
.icon {
  flex-shrink: 0;
  & > * {
    display: block;
    width: 18px;
    height: 18px;
    fill: currentcolor;
  }
}
.popover {
  .text-nowrap();
  position: absolute;
  bottom: calc(100% + 3px);
  left: 50%;
  display: none;
  padding: 4px 10px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: @color-white;
  background-color: rgb(@color-black 0.67);
  border-radius: 8px;
  transform: translateX(-50%);
}
</style>
