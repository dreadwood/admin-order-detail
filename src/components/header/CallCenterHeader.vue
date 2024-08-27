<script setup lang="ts">
import { ref } from 'vue'

import iconRefresh from '@icons/refresh.svg'
import iconArrowDropdown from '@icons/arrow-dropdown.svg'
import iconDone2 from '@icons/done-2.svg'
import iconCollapse from '@icons/collapse.svg'
import iconActivityCross from '@icons/activity-cross.svg'
import iconDial from '@icons/dial.svg'

const isToogleBtnActv = ref<boolean>(false)

const toogleBtnHandle = () => {
  console.log('test')
  isToogleBtnActv.value = !isToogleBtnActv.value
}
</script>

<template>
  <div class="wrp">
    <div class="drop">
      Provider:
      <button class="drop-btn">
        TWILIO
        <iconArrowDropdown />
      </button>
    </div>
    <button class="refresh" aria-label="refresh">
      <iconRefresh />
    </button>
    <div class="consrols">
      <button
        class="label toogle"
        :class="{
          actv: isToogleBtnActv
        }"
        @click="toogleBtnHandle"
      >
        <iconDone2 v-if="isToogleBtnActv" />
        <iconActivityCross v-else />
        Incoming Calls {{ isToogleBtnActv ? 'ON' : 'OFF' }}
      </button>
      <button class="label call">Call Script</button>
      <button class="label">
        <iconCollapse />
        Collapse
      </button>
      <button class="dial">
        <iconDial />
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: flex;
  align-items: center;
  gap: 8px;
}
.drop {
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  padding: 4px 5px 4px 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: @color-signal-blue;
  background-color: rgb(@color-cornflower-blue 0.15);
  border-radius: 30px;
}
.drop-btn {
  .transition(color);
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 4px 8px;
  font-weight: 400;
  background-color: @color-white;
  border: 0;
  border-radius: 30px;
  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    fill: @color-cornflower-blue;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    color: @color-cornflower-blue;
    cursor: pointer;
  }
}
.refresh {
  .transition(color);
  margin: 0;
  padding: 0;
  color: @color-signal-blue;
  background-color: transparent;
  border: 0;
  svg {
    display: block;
    width: 20px;
    height: 20px;
    fill: currentcolor;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    color: @color-cornflower-blue;
    cursor: pointer;
  }
}
.consrols {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}
.label {
  .transition(color, background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 10px 11px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  color: @color-signal-blue;
  background-color: @color-periwinkle-crayola-3;
  border: 0;
  border-radius: 30px;
  &:not([disabled]) {
    cursor: pointer;
  }
  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    fill: currentcolor;
  }
  &:not([disabled], .actv):hover,
  &:not([disabled], .actv):focus-visible {
    background-color: rgb(@color-cornflower-blue 0.15);
    cursor: pointer;
  }
  &.toogle {
    &.actv {
      color: @color-white;
      background-color: @color-mountain-meadow;
    }
  }
  &.call {
    min-width: 160px;
    color: @color-white;
    background-color: @color-cornflower-blue;
    &:not([disabled], .actv):hover,
    &:not([disabled], .actv):focus-visible {
      background-color: @color-blue-green-crayola;
      cursor: pointer;
    }
  }
  &.collapse {
    padding-right: 18px;
    padding-left: 18px;
  }
}
.dial {
  .transition(background-color);
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  background-color: @color-royal-blue;
  border: 0;
  border-radius: 50%;
  svg {
    display: block;
    width: 20px;
    height: 20px;
    fill: @color-white;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    background-color: rgb(@color-royal-blue 0.95);
    cursor: pointer;
  }
}
</style>
