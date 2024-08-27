<script setup lang="ts">
import CopyBtn from '@buttons/CopyBtn.vue'

import iconStar from '@icons/star-yellow-2.svg'

defineProps<{
  name: string
  photo: string
  isOnline?: true
  isDispatcher?: true
}>()
</script>

<template>
  <div class="person">
    <div class="photo">
      <img
        :src="`/${photo}`"
        :class="{
          dispatcher: isDispatcher
        }"
        width="40"
        height="40"
        alt=""
      />

      <div class="raiting">
        <iconStar />
        5.0
      </div>
    </div>
    <div>
      <div class="name">
        {{ name }}
        <CopyBtn />
      </div>
      <div class="info">Hired: 87d</div>
      <div class="status">
        <span class="label-status">online</span>
        iOS, iPhone, 17.5.1 com.mobileapp.Rx4Route:2.0.92
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.person {
  display: flex;
  align-items: center;
  gap: 8px;
}
.photo {
  position: relative;
  flex-shrink: 0;
  padding-bottom: 4px;
  img {
    display: block;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border: 1px solid @color-cobalt-blue;
    border-radius: 50%;
    &.dispatcher {
      border-color: @color-radical-red;
    }
  }
}
.raiting {
  .text-nowrap();
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px 3px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
  color: @color-white;
  background-color: @color-lime-green-2;
  border-radius: 9px;
  transform: translateX(-50%);
  svg {
    flex-shrink: 0;
    width: 10px;
    height: 10px;
  }
}
.name {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  line-height: 19px;
  color: @color-cornflower-blue;
}
.info {
  margin-top: 2px;
  font-size: 14px;
  line-height: 17px;
  color: rgb(@color-signal-blue 0.4);
}
.status {
  margin-top: 5px;
  color: rgb(@color-signal-blue 0.4);
}
.label-status {
  display: inline-block;
  padding: 0 8px;
  font-size: 10px;
  line-height: 13px;
  font-weight: 500;
  color: @color-white;
  background-color: @color-lime-green-2;
  border-radius: 30px;
}
</style>
