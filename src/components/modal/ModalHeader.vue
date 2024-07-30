<script setup lang="ts">
import { ref } from 'vue'

import DeliveryMethodLabel from '@labels/DeliveryMethodLabel.vue'
import OrderTypeLabel from '@labels/OrderTypeLabel.vue'

import iconStar from '@icons/star.svg'
import iconCopy from '@icons/copy.svg'
import iconSnowflake from '@icons/snowflake.svg'
import iconCross from '@icons/cross.svg'
import iconStarYellow from '@icons/star-yellow.svg'
import iconCalendar from '@icons/calendar.svg'
import iconMapPoint from '@icons/map-point.svg'
import iconRefresh from '@icons/refresh.svg'

const isBtnNumActiv = ref<boolean>(false)
const isBtnFavActiv = ref<boolean>(false)

const btnNumHandle = () => {
  isBtnNumActiv.value = true
  setTimeout(() => {
    isBtnNumActiv.value = false
  }, 1000)
}

const btnFanHandle = () => {
  isBtnFavActiv.value = !isBtnFavActiv.value
}
</script>

<template>
  <div class="wrp">
    <h2 class="modal-title">Order details</h2>
    <div class="logo">
      <img src="/logo-modal.jpg" width="38" height="38" alt="logo" />
    </div>
    <div class="group">
      <button
        class="btn-number"
        :class="{ actv: isBtnNumActiv }"
        @click="btnNumHandle"
        aria-label="copy number"
      >
        #19245347
        <iconCopy />
      </button>
      <button
        class="btn-fav"
        :class="{ actv: isBtnFavActiv }"
        @click="btnFanHandle"
        aria-label="add favorite"
      >
        <iconStar />
      </button>
      <div class="info-snowflake">
        <iconSnowflake />
      </div>
    </div>
    <DeliveryMethodLabel :type="1" />
    <OrderTypeLabel :type="5" />
    <!-- <div>Time Window Next Day</div> -->
    <div class="btn-raiting" aria-label="raiting 5">
      <iconStarYellow />
      5
    </div>

    <button class="btn-other" aria-label="open calendar">
      <iconCalendar />
    </button>
    <button class="btn-other" aria-label="open map">
      <iconMapPoint />
    </button>
    <button class="btn-other" aria-label="refresh">
      <iconRefresh />
    </button>
    <button class="btn-close" aria-label="close modal">
      <iconCross />
    </button>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 20px 20px 13px 20px;
  font-family: @font-default;
  border-bottom: 1px solid @color-very-pale-blue-3;
}
.modal-title {
  margin: 0;
  margin-right: 8px;
  font-size: 20px;
  line-height: 29px;
  font-weight: 700;
  text-transform: uppercase;
}
.logo {
  width: 38px;
  height: 38px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
.group {
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 5px 10px;
  background-color: @color-white;
  border-radius: 30px;
}
.btn-number {
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin: 0;
  padding: 0;
  font-family: @font-default;
  font-size: 18px;
  line-height: 23px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  svg {
    .transition(fill);
    display: block;
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    fill: currentcolor;
  }
  &:hover {
    text-decoration: underline;
    svg {
      fill: @color-purple-blue;
    }
  }
  &.actv {
    text-decoration: underline;
    svg {
      fill: @color-cornflower-blue;
    }
  }
}
.btn-fav {
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  svg {
    .transition(fill, stroke);
    display: block;
    width: 28px;
    height: 28px;
    fill: none;
    stroke: @color-signal-blue;
    stroke-width: 2px;
  }
  &:not(.actv):hover svg {
    stroke: @color-purple-blue;
  }
  &.actv svg {
    fill: @color-brilliant-greenish-yellow;
    stroke: @color-brilliant-greenish-yellow;
  }
}
.info-snowflake {
  padding: 0 6px;
  background-color: @color-periwinkle-crayola;
  border-radius: 30px;
  svg {
    display: block;
    width: 28px;
    height: 28px;
  }
}
.btn-raiting {
  .transition(background-color);
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  padding: 8px 14px;
  font-family: @font-default;
  font-size: 18px;
  line-height: 20px;
  color: @color-signal-blue;
  background-color: @color-very-pale-blue-2;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
  svg {
    display: block;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }
}
.btn-other {
  .transition(color);
  display: grid;
  place-items: center;
  width: 40px;
  height: 38px;
  margin: 0;
  padding: 0;
  color: @color-signal-blue;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover {
    color: @color-purple-blue;
  }
  svg {
    width: 25px;
    height: 25px;
    fill: currentcolor;
  }
}
.btn-close {
  .transition(background-color);
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  margin: 0;
  margin-left: auto;
  padding: 0;
  background-color: rgb(@color-cornflower-blue 0.1);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
  svg {
    width: 16px;
    height: 16px;
    fill: @color-cornflower-blue;
  }
}
</style>
