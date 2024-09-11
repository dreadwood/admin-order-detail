<script setup lang="ts">
import CardLayout from '@components/gigs/layout/CardLayout.vue'
import StatusCard from '@components/gigs/cards/StatusCard.vue'
import MapsCard from '@components/gigs/cards/MapsCard.vue'
import ChartCard from './ChartCard.vue'
import VendorCard from './VendorCard.vue'

import iconBan from '@icons/activity-ban.svg'
import iconHouse from '@assets/icons/house.svg'
import iconCross from '@assets/icons/cross-2.svg'
import iconPoint from '@assets/icons/point-mark.svg'
import iconEye from '@assets/icons/eye-open.svg'
import iconRefresh from '@icons/refresh.svg'
import iconSettings from '@icons/settings.svg'
import iconArrow from '@icons/dropdown-arrow.svg'
</script>

<template>
  <CardLayout>
    <template v-slot:top>
      <div class="info-point">
        <iconPoint width="16" height="16" />
        NATES NYC 2ND - 1
        <iconEye width="22" height="22" />
        <div class="info-point-count">90% (13)</div>
      </div>
      <div class="info-label">Delivered: 13 (85%)</div>
      <div class="info-label pink">
        <iconBan />
        Not Present: 1 (5%)
      </div>
      <div class="info-label yellow">
        <iconHouse />
        Wrong Address: 0 (0%)
      </div>
      <div class="info-label red">
        <iconCross />
        Refuse: 0 (0%)
      </div>
      <button class="btn-refresh">
        <iconRefresh />
      </button>
      <button class="btn-options">
        <iconSettings class="btn-options-set" />
        Gigs Options
        <iconArrow class="btn-options-arrow" />
      </button>
    </template>
    <template v-slot:content>
      <div class="info-cards">
        <StatusCard />
        <MapsCard />
        <VendorCard />
      </div>

      <div class="info-chart">
        <ChartCard />
      </div>
    </template>
  </CardLayout>
</template>

<style lang="less" scoped>
@import '@style/common';
.info-point {
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  min-height: 36px;
  padding: 3px 12px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: @color-signal-blue;
  background-color: rgb(@color-cornflower-blue 0.15);
  border-radius: 30px;
  svg {
    display: block;
    flex-shrink: 0;
  }
}
.info-point-count {
  padding: 3px 8px;
  background-color: @color-white;
  border-radius: 30px;
}
.info-label {
  display: flex;
  align-items: center;
  gap: 5px;
  width: max-content;
  padding: 7px 12px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: @color-dark-pastel-green;
  background-color: rgb(@color-dark-pastel-green 0.15);
  border-radius: 30px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    fill: currentcolor;
  }
  &.pink {
    color: @color-deep-purple-pink;
    background-color: rgb(@color-wild-watermelon-crayola 0.1);
  }
  &.yellow {
    color: @color-melon-yellow-2;
    background-color: rgb(@color-amber 0.1);
  }
  &.red {
    color: @color-fluorescent-red;
    background-color: rgb(@color-fluorescent-red 0.1);
  }
}
.btn-refresh {
  .transition(color);
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  margin: 0;
  padding: 0;
  color: @color-signal-blue;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  svg {
    display: block;
    width: 18px;
    height: 18px;
    fill: currentcolor;
  }
  &:hover,
  &:focus-visible {
    color: @color-purple-blue;
  }
}
.btn-options {
  .transition(background-color);
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  margin: 0;
  margin-left: auto;
  padding: 8px 12px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: @color-signal-blue;
  background-color: @color-periwinkle-crayola-3;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  svg {
    display: block;
    flex-shrink: 0;
  }
  &:hover,
  &:focus-visible {
    background-color: @color-very-pale-blue-2;
  }
}
.btn-options-set {
  width: 16px;
  height: 16px;
  fill: currentcolor;
}
.btn-options-arrow {
  width: 20px;
  height: 16px;
  fill: rgb(@color-signal-blue 0.76);
}
.info-cards {
  display: grid;
  grid-template-columns: 392px 1fr 400px;
  align-items: start;
  gap: 12px;
}
.info-chart {
  margin-top: 12px;
}
</style>
