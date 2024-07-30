<script setup lang="ts">
import { ref } from 'vue'

import iconCheck from '@icons/dropdown-check.svg'
import iconArrow from '@icons/dropdown-arrow.svg'

import iconCard from '@icons/delivery-card.svg?raw'
import iconPen from '@icons/delivery-pen.svg?raw'
import iconUser from '@icons/delivery-user.svg?raw'
import iconPad from '@icons/delivery-pad.svg?raw'
import iconDoor from '@icons/delivery-door.svg?raw'
import iconForbidden from '@icons/delivery-forbidden.svg?raw'

const values = [
  {
    name: 'Face-to-Face ID & Signature requred',
    icon: iconCard,
    iconColor: '#9655ff'
  },
  {
    name: 'Face-to-Face Signature requred',
    icon: iconPen,
    iconColor: '#4aa3ef'
  },
  {
    name: 'Face-to-Face Signature not requred',
    icon: iconUser,
    iconColor: '#b75eae'
  },
  {
    name: 'Online signature',
    icon: iconPad,
    iconColor: '#0a7ebb'
  },
  {
    name: 'Signature Optional',
    icon: iconDoor,
    iconColor: '#27caa3'
  },
  {
    name: 'No-contact Delivery',
    icon: iconForbidden,
    iconColor: '#ff3c5f'
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
        :style="{ backgroundColor: currentStatus.iconColor }"
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
          :style="{ backgroundColor: it.iconColor }"
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
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  & > * {
    display: block;
    width: 18px;
    height: 18px;
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
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  & > * {
    display: block;
    width: 18px;
    height: 18px;
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
