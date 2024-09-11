<script setup lang="ts">
import iconUser from '@icons/user-card.svg'
import iconCheck from '@icons/done-2.svg'
import iconCall from '@icons/call-voice-2.svg'
import iconHourglass from '@icons/hourglass.svg'
import iconAuto from '@icons/order-auto.svg'

defineProps<{ isWait?: boolean; time?: string }>()
</script>

<template>
  <div class="order-cell">
    <!-- <div class="label">Today</div> -->
    <div class="number">
      #12345678
      <div class="period">11:45 - 15:45</div>
    </div>
    <iconAuto class="icon blue" />
    <iconUser class="icon purple" />
    <iconCall class="icon red" />
    <iconHourglass class="icon orange" v-if="isWait" />
    <iconCheck class="icon green" v-if="!isWait" />
    <template v-if="time && !isWait">{{ time }}</template>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.order-cell {
  .text-nowrap();
  display: flex;
  gap: 8px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
}
.number {
  position: relative;
  font-weight: 700;
}
.period {
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  padding: 2px 5px;
  font-size: 8px;
  line-height: 1;
  font-weight: 700;
  color: @color-white;
  background-color: @color-blue-light;
  border-radius: 10px;
}
.icon {
  display: block;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  &.blue {
    fill: @color-blue-light;
  }
  &.purple {
    fill: @color-moderate-slate-blue;
  }
  &.red {
    fill: @color-radical-red;
  }
  &.green {
    fill: @color-mountain-meadow;
  }
  &.orange {
    fill: @color-moderate-orange-yellow;
  }
}
</style>
