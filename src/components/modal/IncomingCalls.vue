<script setup lang="ts">
import iconPhone from '@icons/call-phone.svg'
import imgUserpic from '@assets/img/userpic.png'
import imgLogo from '@assets/img/logo-default.png'
import StatusLabel2 from '@/components/labels/StatusLabel2.vue'
</script>

<template>
  <div class="modal">
    <h2 class="title">Incoming Calls</h2>
    <div class="time">
      Await time:
      <span>12s</span>
    </div>

    <div class="person-card">
      <img
        class="person-photo"
        :src="imgUserpic"
        width="64"
        height="64"
        alt=""
      />
      <div class="person-name">Avtandil Chubinidze</div>
      <div class="person-phone">+1 (234) 567-8901</div>

      <div class="order">
        Active order:
        <div class="order-item">
          #19245347
          <StatusLabel2 value="Driver Out" />
        </div>
        <div class="order-item">
          #19245347
          <StatusLabel2 value="Route Optimized" />
        </div>
      </div>
    </div>

    <div class="company">
      Pharmacy Name:
      <div class="company-name">
        <img :src="imgLogo" width="30" height="30" alt="" />
        MANHATTAN APOTHECARY
      </div>
    </div>

    <div class="controls">
      <button class="btn red">Mute</button>
      <button class="btn">
        <iconPhone />
        Accept
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.modal {
  width: 406px;
  padding: 30px 36px;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: @color-signal-blue;
  background-color: @color-periwinkle-crayola;
  border: 1px solid @color-very-pale-blue-5;
  border-radius: 30px;
}
.title {
  width: max-content;
  margin: 0 auto;
  font-size: 25px;
  line-height: 32px;
  font-weight: 700;
}
.time {
  width: max-content;
  margin: 12px auto 0 auto;
  padding: 6px 16px;
  background-color: @color-white;
  border-radius: 40px;
  span {
    font-weight: 700;
    color: @color-blue-crayola;
  }
}
.person-card {
  margin-top: 20px;
  padding: 16px;
  background-color: @color-white;
  border-radius: 20px;
}
.person-photo {
  display: block;
  width: 64px;
  height: 64px;
  margin: 0 auto;
  border-radius: 50%;
}
.person-name {
  margin-top: 12px;
  font-weight: 700;
  color: @color-blue-crayola;
}
.person-phone {
  margin-top: 8px;
}
.order {
  display: grid;
  justify-items: center;
  margin-top: 20px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
}
.order-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  margin-top: 8px;
  padding: 5px 7px 5px 12px;
  font-size: 18px;
  line-height: 23px;
  font-weight: 500;
  background-color: @color-periwinkle-crayola-2;
  border-radius: 30px;
}
.company {
  margin-top: 24px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
}
.company-name {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  text-transform: uppercase;
  img {
    width: 30px;
    height: 30px;
    border: 1px solid rgb(@color-black 0.1);
    border-radius: 50%;
  }
}
.controls {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 24px;
}
.btn {
  .transition(background-color);
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 8px;
  width: 100%;
  margin: 0;
  padding: 14px;
  font-family: @font-default;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: @color-white;
  background-color: @color-mountain-meadow;
  border: 0;
  border-radius: 30px;
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    background-color: @color-dark-pastel-green;
    cursor: pointer;
  }
  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    fill: currentcolor;
  }
  &.red {
    background-color: @color-radical-red;
    &:not([disabled]):hover,
    &:not([disabled]):focus-visible {
      background-color: @color-red;
    }
  }
}
</style>
