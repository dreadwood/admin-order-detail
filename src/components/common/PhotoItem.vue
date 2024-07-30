<script setup lang="ts">
import RotateBtn from '@buttons/RotateBtn.vue'

import iconSnow from '@icons/photo-snow.svg'
import iconHome from '@icons/photo-home.svg'
import iconDoor from '@icons/photo-door.svg'
import iconsCross from '@icons/cross-circle.svg'
import iconsTrash from '@icons/trash.svg'

defineProps<{
  photo: string
  type?: 'vendor' | 'attach'
  isIncorrect?: true
  isRotateBtn?: true
  iconVendor?: 'snow' | 'home' | 'door'
}>()
</script>

<template>
  <div
    class="photo-wrp"
    :class="{
      vendor: type === 'vendor'
    }"
  >
    <img class="photo" :src="`/${photo}`" width="186" height="242" alt="" />
    <div v-if="isIncorrect" class="overflow">
      <div class="label-text">Incorect</div>
    </div>
    <div v-if="isRotateBtn" class="btn-rotate">
      <RotateBtn />
    </div>
    <div v-if="type === 'vendor' && iconVendor" class="label-icon">
      <iconSnow v-if="iconVendor === 'snow'" />
      <iconHome v-if="iconVendor === 'home'" />
      <iconDoor v-if="iconVendor === 'door'" />
    </div>
    <div v-if="type === 'attach'" class="attach-controls">
      <button class="attach-btn">
        <iconsCross />
        <div class="attach-label">Mark as incorrect</div>
      </button>
      <button class="attach-btn del">
        <iconsTrash />
        <div class="attach-label">Delete</div>
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.photo-wrp {
  position: relative;
  flex-shrink: 0;
  width: 186px;
  height: 242px;
  &.vendor {
    width: 175px;
    height: 227px;
  }
}
.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.btn-rotate {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 10;
}
.label-icon {
  position: absolute;
  right: 4px;
  bottom: 4px;
  z-index: 10;
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  svg {
    width: 100%;
    height: 100%;
  }
}
.overflow {
  position: absolute;
  z-index: 1;
  display: grid;
  place-items: center;
  overflow: hidden;
  background-color: rgb(@color-white 0.74);
  border: 1px solid @color-radical-red;
  border-radius: 12px;
  inset: 0;
}
.label-text {
  width: max-content;
  padding: 2px 14px;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  color: @color-white;
  background-color: @color-radical-red;
  border-radius: 30px;
}
.attach-controls {
  position: absolute;
  right: 11px;
  bottom: 8px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 8px;
}
.attach-btn {
  .transition(background-color);
  position: relative;
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: max-content;
  width: 43px;
  height: 43px;
  margin: 0;
  padding: 0;
  font-family: @font-default;
  color: @color-gray-424;
  background-color: rgb(@color-white 0.9);
  border: 0;
  border-radius: 11px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: currentcolor;
  }
  &:hover {
    .attach-label {
      display: block;
    }
  }
  &.del {
    color: @color-radical-red;
  }
}
.attach-label {
  position: absolute;
  top: calc(100% + 10px);
  z-index: 10;
  display: none;
  width: max-content;
  padding: 4px 10px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: @color-white;
  background-color: rgb(@color-black 0.67);
  border-radius: 8px;
}
</style>
