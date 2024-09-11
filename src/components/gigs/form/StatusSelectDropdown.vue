<script setup lang="ts">
import { ref } from 'vue'

import iconArrow from '@icons/dropdown-arrow.svg'
import iconCheck from '@icons/dropdown-check.svg'

const valuesStatus = [
  {
    id: 1,
    fullName: 'Accounting Calculation',
    name: 'Calculation',
    color: '#f4b942',
    colorText: '#ffffff'
  },
  {
    id: 2,
    fullName: 'Route Ready to Start',
    name: 'Ready to Start',
    color: '#0033cc',
    colorText: '#ffffff'
  },
  {
    id: 3,
    fullName: 'Vendor Assigned',
    name: 'Vendor Assigned',
    color: '#a0ddff',
    colorText: '#162854'
  },
  {
    id: 4,
    fullName: 'Gig Started',
    name: 'Gig Started',
    color: '#21979e',
    colorText: '#ffffff'
  },
  {
    id: 5,
    fullName: 'Driver Finished',
    name: 'Vendor finished',
    color: '#4ade80',
    colorText: '#ffffff'
  },
  {
    id: 6,
    fullName: 'Qaqc Checked',
    name: 'QAQC checked',
    color: '#1caf52',
    colorText: '#ffffff'
  },
  {
    id: 7,
    fullName: 'Accouting checked',
    name: 'Accouting checked',
    color: '#0b6f30',
    colorText: '#ffffff'
  }
]

const valuesSubStatus = [
  {
    id: 1,
    fullName: 'Route on Time',
    name: 'Route on Time',
    color: '#4ade80',
    colorText: '#ffffff'
  },
  {
    id: 2,
    fullName: 'Route Late',
    name: 'Route Late',
    color: '#ff3c5f',
    colorText: '#ffffff'
  },
  {
    id: 3,
    fullName: 'Need Help',
    name: 'Need Help',
    color: '#1976d2',
    colorText: '#ffffff'
  },
  {
    id: 4,
    fullName: 'Waiting',
    name: 'Waiting',
    color: '#e0e3e6',
    colorText: '#162854'
  }
]

const typeValues = [valuesStatus, valuesSubStatus]

const props = defineProps<{
  type: 1 | 2
  valueIndex?: number
}>()

const values = typeValues[props.type - 1]

const currentValue = ref(values[0])
const isOpen = ref<boolean>(false)

function handleChangeValue(id: number) {
  const foundValue = values.find((it) => it.id === id)

  if (foundValue) {
    currentValue.value = foundValue
  }

  isOpen.value = false
}

function toogleOpen() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="dropdown">
    <button
      class="dropdown-field"
      @click="toogleOpen"
      :style="{
        backgroundColor: currentValue.color,
        color: currentValue.colorText
      }"
    >
      {{ currentValue.name }}
      <iconArrow class="dropdown-field-icon" />
    </button>
    <div class="dropdown-list" :class="{ open: isOpen }">
      <button
        class="dropdown-value"
        :class="{ actv: it.id === currentValue.id }"
        v-for="it in values"
        @click="handleChangeValue(it.id)"
        :key="it.id"
      >
        {{ it.fullName }}
        <iconCheck v-if="it === currentValue" />
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.dropdown {
  position: relative;
}
.dropdown-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  width: max-content;
  margin: 0;
  padding: 5px 12px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-very-pale-blue-6;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  svg {
    .transition(fill);
    flex-shrink: 0;
    width: 20px;
    height: 16px;
    opacity: 0.76;
    fill: currentcolor;
  }
}
.dropdown-list {
  .hide-scroll();
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1;
  display: none;
  width: max-content;
  background-color: @color-white;
  border-radius: 12px;
  box-shadow: 8px 3px 22px 10px rgb(@color-gray-588 0.11);
  &.open {
    display: block;
  }
}
.dropdown-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin: 0;
  padding: 8px 12px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: transparent;
  border: 0;
  border-radius: 12px;
  &.actv {
    font-weight: 700;
  }
  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
  }
  &:hover,
  &:focus-visible {
    background-color: rgb(@color-cornflower-blue 0.2);
    cursor: pointer;
  }
}
</style>
