<script setup lang="ts">
import { ref } from 'vue'

import iconHeadphones from '@icons/headphones.svg'
import iconAutoFront from '@icons/auto-front-2.svg'

import iconAlarm from '@icons/alarm.svg'
import iconClock from '@icons/clock-2.svg'
import iconClockAttention from '@icons/clock-attention.svg'

const props = withDefaults(
  defineProps<{
    department: string
    operator: string
    driver: string
    status: string
    time?: string
    isLost?: boolean
    isActv?: boolean
  }>(),
  {
    status: 'early',
    time: '11:19'
  }
)

const isActv = ref<boolean>(props.isActv)

const handle = () => (isActv.value = !isActv.value)
</script>

<template>
  <button class="order" :class="{ actv: isActv }" @click="handle">
    <div class="content">
      <div class="top">
        <div
          class="department"
          :class="{
            red: isLost
          }"
        >
          {{ department }}
        </div>
        <div
          class="status"
          :class="{
            green: status === 'ontime',
            red: status === 'late'
          }"
        >
          <iconAlarm v-if="status === 'early'" />
          <iconClock v-if="status === 'ontime'" />
          <iconClockAttention v-if="status === 'late'" />
        </div>
      </div>
      <div class="person blue">
        <iconHeadphones class="person-icon" />
        {{ operator }}
      </div>
      <div class="person">
        <iconAutoFront class="person-icon" />
        <span>{{ driver }}</span>
        <div class="time">{{ time }}</div>
      </div>
    </div>
    <div class="timeline">
      <div
        class="line green"
        :style="{
          width: '70%'
        }"
      >
        13
      </div>
      <div class="line red">1</div>
      <div class="line yellow">1</div>
      <div class="line">2</div>
    </div>
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.order {
  .transition(background-color, border-color);
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: @font-default;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-periwinkle-crayola;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 12px;
  cursor: pointer;
  &:not([disabled], .actv):hover,
  &:not([disabled], .actv):focus-visible {
    border-color: @color-cornflower-blue;
    cursor: pointer;
  }
  &.actv {
    background-color: @color-cornflower-blue;
    border-color: @color-cornflower-blue;
    .department {
      color: @color-white;
    }
    .person {
      color: @color-white;
    }
    .time {
      color: rgb(@color-white 0.6);
    }
    &.actv .status {
      color: @color-white;
      background-color: rgb(@color-white 0.2);
    }
  }
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
}
.department {
  font-size: 13px;
  line-height: 16px;
  font-weight: 700;
  &.red {
    color: @color-radical-red;
  }
}
.status {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 16px;
  height: 16px;
  color: @color-cornflower-blue;
  background-color: rgb(@color-cornflower-blue 0.2);
  border-radius: 50%;
  svg {
    display: block;
    width: 10px;
    height: 10px;
    fill: currentcolor;
  }
  &.green {
    color: @color-shamrock-crayola;
    background-color: rgb(@color-shamrock-crayola 0.2);
  }
  &.red {
    color: @color-radical-red;
    background-color: rgb(@color-radical-red 0.2);
  }
}
.content {
  display: grid;
  gap: 2px;
  padding: 5px;
}
.person {
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  font-size: 12px;
  line-height: 14px;
  color: @color-signal-blue;
  &.blue {
    color: @color-cornflower-blue;
  }
  span {
    .text-truncate();
  }
}
.person-icon {
  display: block;
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  fill: currentcolor;
}
.time {
  .text-nowrap();
  margin-left: auto;
  font-size: 10px;
  line-height: 12px;
  color: rgb(@color-signal-blue 0.6);
}
.timeline {
  display: flex;
  height: 9px;
  font-size: 8px;
  line-height: 8px;
  font-weight: 400;
  text-align: left;
  background-color: @color-white;
}
.line {
  position: relative;
  flex-shrink: 0;
  min-width: 22px;
  &.green {
    z-index: 4;
    background-color: @color-dark-pastel-green;
  }
  &.red {
    z-index: 3;
    background-color: @color-wild-watermelon-crayola;
  }
  &.yellow {
    z-index: 2;
    background-color: @color-amber;
  }
  &:first-child {
    padding-left: 10px;
  }
  &:not(:first-child) {
    margin-left: -10px;
    padding-left: 12px;
  }
  &:not(:last-child) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:last-child {
    padding-right: 10px;
  }
}
</style>
