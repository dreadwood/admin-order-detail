<script setup lang="ts">
import iconDial from '@icons/dial.svg'
import iconCallAdd from '@icons/call-add.svg'
import iconArrows from '@icons/arrows.svg'
import iconMic from '@icons/mic.svg'
import iconCallEnd from '@icons/call-end.svg'
import iconCallIncoming from '@icons/call-incoming.svg'
import iconCallUser from '@icons/call-user.svg'
import iconCallPhone from '@icons/call-phone-2.svg'
import iconCopy from '@icons/copy-2.svg'
</script>

<template>
  <div class="container">
    <div class="item">
      <div class="label green">
        <iconCallIncoming />
      </div>
      <div>
        Incoming Calls
        <div class="time">02:11</div>
      </div>
    </div>
    <div class="item">
      <div class="label">
        <iconCallUser />
      </div>
      Elon Musk
    </div>
    <div class="item">
      <div class="label">
        <iconCallPhone />
      </div>
      +1 (234) 567-8901
      <button class="btn-copy" type="button">
        <iconCopy />
      </button>
    </div>
    <div class="controls">
      <button class="btn">
        <iconDial />
      </button>
      <button class="btn">
        <iconCallAdd />
      </button>
      <button class="btn">
        <iconArrows />
      </button>
      <button class="btn">
        <iconMic />
      </button>
      <button class="btn red">
        <iconCallEnd />
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.container {
  display: flex;
  align-items: center;
  gap: 100px;
  padding: 20px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  color: @color-white;
  background-color: @color-blue-crayola;
  border-radius: 25px;
}
.item {
  display: flex;
  align-items: center;
  gap: 12px;
}
.label {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 46px;
  height: 46px;
  color: @color-blue-crayola;
  background-color: @color-periwinkle-crayola-2;
  border-radius: 50%;
  svg {
    display: block;
    width: 20px;
    height: 20px;
    fill: currentcolor;
  }
  &.green {
    color: @color-dark-pastel-green;
  }
}
.time {
  margin-top: 2px;
  font-size: 22px;
  line-height: 29px;
  font-weight: 700;
}
.btn-copy {
  .transition(color);
  display: block;
  margin: 0;
  margin-left: -4px;
  padding: 0;
  color: @color-white;
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
    color: @color-signal-blue;
    cursor: pointer;
  }
}
.controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}
.btn {
  .transition(color, background-color);
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  color: @color-white;
  background-color: @color-blue-crayola;
  border: 1px solid @color-white;
  border-radius: 50%;
  svg {
    display: block;
    width: 18px;
    height: 18px;
    fill: currentcolor;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    color: @color-blue-crayola;
    background-color: @color-white;
    cursor: pointer;
  }
  &.red {
    color: @color-white;
    background-color: @color-radical-red;
    border-color: @color-radical-red;
    &:not([disabled]):hover,
    &:not([disabled]):focus-visible {
      color: @color-radical-red;
      background-color: @color-white;
      border-color: @color-white;
    }
  }
}
</style>
