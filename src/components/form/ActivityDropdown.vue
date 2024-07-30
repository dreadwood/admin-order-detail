<script setup lang="ts">
import { ref } from 'vue'

import iconCheck from '@icons/dropdown-check.svg'
import iconArrow from '@icons/dropdown-arrow.svg'

import iconBan from '@icons/activity-ban.svg?raw'
import iconAddress from '@icons/activity-address.svg?raw'
import iconCross from '@icons/activity-cross.svg?raw'

const values = [
  {
    name: 'Not Present',
    icon: iconBan,
    bgColor: '#ff6487',
    color: '#ffffff'
  },
  {
    name: 'Wrong Address',
    icon: iconAddress,
    bgColor: '#ffbe00',
    color: '#ffffff'
  },
  {
    name: 'Recipient Refused',
    icon: iconCross,
    bgColor: '#e90202',
    color: '#ffffff'
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
    <button
      class="btn"
      :class="{ actv: isOpen }"
      :style="{
        color: currentStatus.color,
        backgroundColor: currentStatus.bgColor
      }"
      @click="btnHandle"
    >
      <div v-html="currentStatus.icon" class="icon-btn"></div>
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
        <div v-html="it.icon" class="icon-item"></div>
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
  gap: 8px;
  width: max-content;
  max-width: 100%;
  margin: 0;
  padding: 5px 12px;
  overflow: hidden;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-white;
  border: 0;
  border-radius: 9px;
  cursor: pointer;
  svg {
    display: block;
    flex-shrink: 0;
    width: 20px;
    height: 16px;
  }
  &.actv {
    .icon-arrow {
      transform: scaleY(-1);
    }
  }
}
.icon-btn {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
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
  padding: 8px 11px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
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
}
.icon-item {
  display: block;
  width: 18px;
  height: 18px;
  svg {
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
