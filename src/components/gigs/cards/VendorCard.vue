<script setup lang="ts">
import { ref } from 'vue'

import PersonCard from './PersonCard.vue'

import iconArrow from '@icons/dropdown-arrow.svg'
import iconWallet from '@icons/wallet.svg'
import iconPlus from '@icons/plus-circle.svg'
import iconFridgeStorage from '@icons/fridge-storage.svg'
import iconIcePack from '@icons/ice-pack.svg'

const isOpenDropVendor = ref<boolean>(true)
const isOpenDropRate = ref<boolean>(true)

const handleDropVendor = () => {
  isOpenDropVendor.value = !isOpenDropVendor.value
}
const handleDropRate = () => {
  isOpenDropRate.value = !isOpenDropRate.value
}
</script>

<template>
  <section class="vendor-card">
    <div class="top">
      <div class="card-title">Vendor Information</div>
      <button class="btn-contract">View signed contract</button>
    </div>

    <PersonCard />

    <div class="dropdown actv" :class="{ open: isOpenDropVendor }">
      <div class="dropdown-top">
        <div class="dropdown-title">Vendor Equipments (4)</div>
        <button class="dropdown-add">
          <iconPlus />
          Add
        </button>
        <button class="dropdown-btn" @click="handleDropVendor">
          <iconArrow />
        </button>
      </div>
      <div class="dropdown-body" v-if="isOpenDropVendor">
        <div class="dropdown-item">
          <iconFridgeStorage />
          Fridge Bag - 30
        </div>
        <div class="dropdown-item">
          <iconIcePack />
          Ice Pack Small - 555
        </div>
        <div class="dropdown-item">
          <iconIcePack />
          Ice Pack Small - 890
        </div>
        <div class="dropdown-item">
          <iconIcePack />
          Ice Pack Small - 892
        </div>
      </div>
    </div>

    <div class="dropdown actv" :class="{ open: isOpenDropRate }">
      <div class="dropdown-top">
        <div class="dropdown-title">Total rate for route</div>
        <div class="dropdown-label">
          <iconWallet />
          140$
        </div>
        <button class="dropdown-btn" @click="handleDropRate">
          <iconArrow />
        </button>
      </div>
      <div class="dropdown-body" v-if="isOpenDropRate">
        <div class="dropdown-item purple">10 x <b>$10.71</b> = $10.71</div>
        <div class="dropdown-item purple">1 x <b>$6.17</b> = $10.71</div>
        <div class="dropdown-item purple">4 x <b>$3.00</b> = $10.71</div>
      </div>
    </div>

    <div class="slider">
      <div class="slide">
        <img src="/vendor-person-1.jpg" width="147" height="260" alt="" />
        <div class="slide-status">In Queue</div>
      </div>
      <div class="slide">
        <img src="/vendor-person-1.jpg" width="147" height="260" alt="" />
        <div class="slide-status">In Queue</div>
      </div>
      <div class="slide">
        <img src="/vendor-person-1.jpg" width="147" height="260" alt="" />
        <div class="slide-status green">
          <b>Approved by Andrew</b> 09-15-2022 07:52:27
        </div>
      </div>
      <div class="slide">
        <img src="/vendor-person-1.jpg" width="147" height="260" alt="" />
        <div class="slide-status green">
          <b>Approved by Andrew</b> 09-15-2022 07:52:27
        </div>
      </div>
    </div>

    <div></div>
  </section>
</template>

<style lang="less" scoped>
@import '@style/common';
.vendor-card {
  padding: 12px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-periwinkle-crayola;
  border-radius: 20px;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.card-title {
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
}
.btn-contract {
  .transition(background-color);
  margin: 0;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  color: @color-white;
  background-color: @color-mountain-meadow;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    background-color: @color-mountain-meadow-2;
  }
}
.slider {
  .hide-scroll;
  display: flex;
  gap: 4px;
  margin: 0 -12px;
  margin-top: 8px;
  padding: 0 12px;
  overflow-x: scroll;
}
.slide {
  position: relative;
  flex-shrink: 0;
  width: 147px;
  height: 260px;
  img {
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
}
.slide-status {
  position: absolute;
  bottom: 6px;
  left: 6px;
  width: calc(100% - 12px);
  padding: 6px 11px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  background-color: @color-periwinkle-crayola;
  border-radius: 12px;
  &.green {
    padding-top: 9px;
    padding-bottom: 10px;
    color: @color-white;
    background-color: @color-lime-green-2;
  }
}
.dropdown {
  margin-top: 8px;
  // padding: 6px 12px;
  background-color: @color-white;
  border-radius: 16px;
  &.actv {
    .dropdown-btn svg {
      transform: scaleY(-1);
    }
  }
}
.dropdown-top {
  display: flex;
  align-self: center;
  gap: 4px;
  padding: 6px 12px;
}
.dropdown-title {
  margin-right: auto;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
}
.dropdown-add {
  .transition(background-color);
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  margin: 0;
  padding: 2px 7px 2px 4px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: @color-white;
  background-color: @color-signal-blue;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  svg {
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    fill: currentcolor;
  }
  &:hover,
  &:focus-visible {
    background-color: @color-purple-blue;
  }
}
.dropdown-label {
  display: flex;
  align-items: center;
  gap: 6px;
  width: max-content;
  padding: 2px 5px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: @color-blue-lilac;
  background-color: rgb(@color-moderate-slate-blue-2 0.2);
  border-radius: 30px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    fill: currentcolor;
  }
}
.dropdown-btn {
  .transition(background-color);
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  color: @color-signal-blue;
  background-color: rgb(@color-signal-blue 0.1);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
    fill: currentcolor;
  }
  &:hover,
  &:focus-visible {
    background-color: rgb(@color-signal-blue 0.15);
  }
}
.dropdown-body {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-content: start;
  align-items: start;
  gap: 4px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
}
.dropdown-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 6px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: @color-signal-blue;
  background-color: rgb(@color-cornflower-blue 0.2);
  border-radius: 6px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 12px;
    height: 12px;
    fill: @color-cornflower-blue;
  }
  &.purple {
    color: @color-blue-lilac;
    background-color: rgb(@color-moderate-slate-blue-2 0.2);
  }
}
</style>
