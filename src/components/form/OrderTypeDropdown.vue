<script setup lang="ts">
import { ref } from 'vue'

import iconCheck from '@icons/dropdown-check.svg'
import iconArrow from '@icons/dropdown-arrow.svg'

import iconAuto from '@icons/order-auto.svg?raw'
import iconTimer2 from '@icons/order-timer-2.svg?raw'
import iconTimer3 from '@icons/order-timer-3.svg?raw'
import iconTimer from '@icons/order-timer.svg?raw'
import iconClock from '@icons/order-clock.svg?raw'
import iconLightning from '@icons/order-lightning.svg?raw'

const values = [
  {
    name: 'Regular',
    icon: iconAuto,
    iconColor: '#29b6ff'
  },
  {
    name: 'Same Day',
    icon: iconTimer2,
    iconColor: '#ffc971'
  },
  {
    name: 'Same Day Special Hours',
    icon: iconTimer3,
    iconColor: '#ff9000'
  },
  {
    name: 'Next Day Special Hours',
    icon: iconTimer,
    iconColor: '#8074c9'
  },
  {
    name: 'Time Window Next Day 9am-3pm, 3pm-9am',
    icon: iconClock,
    iconColor: '#b5a5ff'
  },
  {
    name: 'STAT',
    icon: iconLightning,
    iconColor: '#f05d23'
  }
] as const

type StatusType = (typeof values)[number]
type StatusNameType = StatusType['name']

const props = defineProps<{ value: StatusNameType }>()

function getStatus(value: StatusNameType): StatusType {
  return values.find((it) => it.name === value) as StatusType
}

const isOpen = ref<boolean>(false)
const currentStatus = ref<StatusType>(getStatus(props.value))

const btnHandle = () => {
  isOpen.value = !isOpen.value
}
const itemHandle = (value: StatusNameType) => {
  isOpen.value = false
  currentStatus.value = getStatus(value)
}
</script>

<template>
  <div class="wrp-dropdown">
    <button class="btn" :class="{ actv: isOpen }" @click="btnHandle">
      <div
        v-html="currentStatus.icon"
        class="icon-btn"
        :style="{ color: currentStatus.iconColor }"
      ></div>
      <div class="text-btn">{{ currentStatus.name }}</div>
      <iconArrow class="icon-arrow" />
    </button>

    <div class="dropdown" v-if="isOpen === true">
      <button
        class="item"
        :class="{ actv: currentStatus.name === it.name }"
        @click="itemHandle(it.name)"
        v-for="it in values"
        v-bind:key="it.name"
      >
        <div
          v-html="it.icon"
          class="icon-item"
          :style="{ color: it.iconColor }"
        ></div>
        {{ it.name }}
        <div class="icon-check">
          <iconCheck v-if="currentStatus.name === it.name" />
        </div>
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp-dropdown {
  position: relative;
}
.btn {
  .transition(background-color, transform, color);
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  margin: 0;
  padding: 10px 9px;
  overflow: hidden;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 9px;
  cursor: pointer;
  &.actv {
    .icon-arrow {
      transform: scaleY(-1);
    }
  }
}
.icon-btn {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  & > * {
    display: block;
    width: 100%;
    height: 100%;
    fill: currentcolor;
  }
}
.text-btn {
  .text-truncate();
}
.icon-arrow {
  .transition(transform);
  display: block;
  flex-shrink: 0;
  width: 20px;
  height: 16px;
  margin-left: auto;
  opacity: 0.76;
  fill: currentcolor;
}
.dropdown {
  .hide-scroll();
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: max-content;
  max-height: 300px;
  margin-top: 2px;
  overflow: scroll;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 12px;
  box-shadow: 2px 2px 13px 0 rgb(@color-black 0.05);
}
.item {
  .transition(background-color);
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin: 0;
  padding: 10px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  text-align: left;
  color: @color-signal-blue;
  background-color: transparent;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
  &.actv {
    font-weight: 700;
  }
  &:not(:first-child) {
    margin-top: 6px;
  }
}
.icon-item {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  & > * {
    fill: currentcolor;
  }
}
.icon-check {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-left: auto;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
