<script setup lang="ts">
import iconAuto from '@icons/order-auto.svg'
import iconTimer2 from '@icons/order-timer-2.svg'
import iconTimer3 from '@icons/order-timer-3.svg'
import iconTimer from '@icons/order-timer.svg'
import iconClock from '@icons/order-clock.svg'
import iconLightning from '@icons/order-lightning.svg'

defineProps<{ type: 1 | 2 | 3 | 4 | 5 | 6 }>()
</script>

<template>
  <div v-if="type === 1" class="wrp">
    <iconAuto />
    Regular
  </div>
  <div v-if="type === 2" class="wrp color2">
    <iconTimer2 />
    Same Day
  </div>
  <div v-if="type === 3" class="wrp color3">
    <iconTimer3 />
    Same Day Special Hours
  </div>
  <div v-if="type === 4" class="wrp color4">
    <iconTimer />
    Next Day Special Hours
  </div>
  <div v-if="type === 5" class="wrp color5">
    <iconClock />
    Time Window Next Day
  </div>
  <div v-if="type === 6" class="wrp color6">
    <iconLightning />
    STAT
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 5px 12px;
  font-family: @font-default;
  font-size: 18px;
  line-height: 23px;
  font-weight: 500;
  color: @color-white;
  background-color: @color-blue-light;
  border-radius: 30px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    fill: transparent;
  }
}
.color2 {
  background-color: @color-dandelion;
}
.color3 {
  background-color: @color-bright-orange-yellow;
}
.color4 {
  background-color: @color-blue-violet-crayola;
}
.color5 {
  background-color: @color-bright-lilac;
}
.color6 {
  background-color: @color-carrot;
}
</style>
