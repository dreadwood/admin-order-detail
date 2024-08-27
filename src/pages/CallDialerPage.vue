<script setup lang="ts">
import iconCallPhone from '@icons/call-phone.svg'
import iconAutoFront from '@icons/auto-front.svg'
import iconMesseger from '@icons/messeger.svg'
import CallNotification from '@/components/CallNotification.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import CallCenterHeader from '@/components/header/CallCenterHeader.vue'
import CallDeal from '@/components/CallDeal.vue'
import CallBtn from '@/components/buttons/CallBtn.vue'
import UpdateBtn from '@/components/buttons/UpdateBtn.vue'
import AssignBtn from '@/components/buttons/AssignBtn.vue'
</script>

<template>
  <LayoutPage title="Call Center">
    <template v-slot:header>
      <CallCenterHeader />
    </template>
    <template v-slot:content>
      <div class="content">
        <CallNotification />

        <div class="table-buttons">
          <CallBtn />
          <UpdateBtn />
          <AssignBtn />
        </div>

        <div class="deal-left">
          <CallDeal :type="2" />
        </div>
        <div class="deal-right">
          <CallDeal :type="1" />
        </div>

        <div class="controls">
          <button class="controls-btn green">
            <iconAutoFront />
          </button>
          <button class="controls-btn green">
            <iconMesseger />
          </button>
          <button class="controls-btn">
            <iconCallPhone />
          </button>
        </div>
      </div>
    </template>
  </LayoutPage>
</template>

<style lang="less" scoped>
@import '@style/common';
.content {
  height: 100%;
  padding: 16px;
  background-color: @color-periwinkle-crayola;
}
.deal-left {
  position: fixed;
  bottom: 115px;
  left: 17px;
}
.deal-right {
  position: fixed;
  right: 17px;
  bottom: 115px;
}
.table-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
}
.controls {
  position: fixed;
  right: 34px;
  bottom: 43px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.controls-btn {
  .transition(background-color);
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 52px;
  height: 52px;
  margin: 0;
  padding: 0;
  color: @color-white;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 50%;
  svg {
    display: block;
    width: 30px;
    height: 30px;
    fill: currentcolor;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    background-color: @color-cornflower;
    cursor: pointer;
  }
  &.green {
    background-color: @color-dark-pastel-green;
    &:not([disabled]):hover,
    &:not([disabled]):focus-visible {
      background-color: @color-lime-green-2;
    }
  }
}
</style>
