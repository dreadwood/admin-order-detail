<script setup lang="ts">
import { ref } from 'vue'

import iconPrint from '@icons/status-print.svg?raw'
import iconAuto from '@icons/status-auto.svg?raw'
import iconBox from '@icons/status-box.svg?raw'
import iconDrive from '@icons/status-drive.svg?raw'
import iconBuild from '@icons/status-build.svg?raw'
import iconDots from '@icons/status-dots.svg?raw'
import iconAutoFront from '@icons/status-auto-front.svg?raw'
import iconCheckCircle from '@icons/status-check.svg?raw'
import iconAttempt from '@icons/status-attempt.svg?raw'
import iconBuildArrow from '@icons/status-build-arrow.svg?raw'
import iconRejected from '@icons/status-rejected.svg?raw'
import iconQuestions from '@icons/status-questions.svg?raw'
import iconPharmacy from '@icons/status-pharmacy.svg?raw'
import iconSet from '@icons/status-set.svg?raw'
import iconTransfer from '@icons/status-transfer.svg?raw'
import iconDraft from '@icons/status-draft.svg?raw'

const values = [
  {
    name: 'Ready to Print',
    icon: iconPrint,
    bgColor: '#ccffff',
    color: '#162854'
  },
  {
    name: 'Carrier',
    icon: iconAuto,
    bgColor: '#ffff00',
    color: '#162854'
  },
  {
    name: 'Ready for Pickup',
    icon: iconBox,
    bgColor: '#ccff33',
    color: '#162854'
  },
  {
    name: 'Pickup Occurred',
    icon: iconDrive,
    bgColor: '#6699ff',
    color: '#ffffff'
  },
  {
    name: 'Ready for delivery',
    icon: iconBuild,
    bgColor: '#0033cc',
    color: '#ffffff'
  },
  {
    name: 'Route Optimized',
    icon: iconDots,
    bgColor: '#9900ff',
    color: '#ffffff'
  },
  {
    name: 'Driver Out',
    icon: iconAutoFront,
    bgColor: '#339933',
    color: '#ffffff'
  },
  {
    name: 'Delivered',
    icon: iconCheckCircle,
    bgColor: '#00cc33',
    color: '#ffffff'
  },
  {
    name: 'Delivery Attempted',
    icon: iconAttempt,
    bgColor: '#ff6666',
    color: '#ffffff'
  },
  {
    name: 'Returned',
    icon: iconBuildArrow,
    bgColor: '#663300',
    color: '#ffffff'
  },
  {
    name: 'Rejected',
    icon: iconRejected,
    bgColor: '#cc0033',
    color: '#ffffff'
  },
  {
    name: 'Investigation',
    icon: iconQuestions,
    bgColor: '#ff9933',
    color: '#ffffff'
  },
  {
    name: 'Back to pharmacy',
    icon: iconPharmacy,
    bgColor: '#ff0000',
    color: '#ffffff'
  },
  {
    name: 'Ready to optimize',
    icon: iconSet,
    bgColor: '#cc99ff',
    color: '#162854'
  },
  {
    name: 'On its way to facility',
    icon: iconTransfer,
    bgColor: '#162854',
    color: '#ffffff'
  },
  { name: 'Draft', icon: iconDraft, bgColor: '#e0e3e6', color: '#162854' }
] as const

type StatusType = (typeof values)[number]
type StatusNameType = StatusType['name']

const props = defineProps<{ value: StatusNameType }>()

function getStatus(value: StatusNameType): StatusType {
  return values.find((it) => it.name === value) as StatusType
}

const item = ref<StatusType>(getStatus(props.value))
</script>

<template>
  <div class="label-status">
    <div
      v-html="item.icon"
      class="icon-item"
      :style="{
        backgroundColor: item.bgColor,
        color: item.color
      }"
    ></div>
    <div>{{ item.name }}</div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.label-status {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 18px;
  color: @color-signal-blue;
}
.icon-item {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  & > * {
    display: block;
    width: 14px;
    height: 14px;
    fill: currentcolor;
  }
}
</style>
