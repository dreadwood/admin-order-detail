<script setup lang="ts">
import TitleBlock from '@/components/common/TitleBlock.vue'

import iconPoint from '@assets/icons/map-point.svg'
import iconGoogle from '@assets/icons/google-logo.svg'
</script>

<template>
  <div class="wrp">
    <div>
      <TitleBlock text="Delivered to" type="small" tag="h4" />
      <div class="info">
        <div>Patient</div>
        <div>Elon Musk</div>
      </div>

      <div class="bottom">
        <div class="date">
          <div class="label">Time Delivered</div>
          02/18/2024 11:33 PM
        </div>

        <div class="controls">
          <button class="btn">
            <iconPoint />
          </button>
          <a class="btn" href="#">
            <iconGoogle />
          </a>
          <div class="label-distance">0,03 m</div>
        </div>
      </div>
    </div>

    <div class="signature">
      <img src="/signature.png" width="132" height="90" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  line-height: 19px;
}
.info {
  margin-top: 10px;
  & > *:not(:first-child) {
    margin-top: 2px;
  }
}
.bottom {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}
.date {
  margin-top: 8px;
  & > *:not(:first-child) {
    margin-top: 2px;
  }
}
.controls {
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  gap: 2px;
}
.btn {
  .transition(background-color);
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  color: @color-white;
  text-transform: none;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
    fill: currentcolor;
  }
  &:hover {
    background-color: @color-cornflower;
  }
}
.label-distance {
  width: max-content;
  padding: 5px 8px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;
  text-align: center;
  color: @color-white;
  background-color: @color-lime-green-2;
  border-radius: 30px;
}
.signature {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 196px;
  height: 115px;
  margin-left: auto;
  background-color: @color-periwinkle-crayola;
  border-radius: 12px;
}
</style>
