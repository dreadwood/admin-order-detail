<script setup lang="ts">
import iconCard from '@icons/delivery-card.svg'
import iconForbidden from '@icons/delivery-forbidden.svg'
import iconPen from '@icons/delivery-pen.svg'
import iconDoor from '@icons/delivery-door.svg'
import iconPad from '@icons/delivery-pad.svg'
import iconUser from '@icons/delivery-user.svg'

defineProps<{ type: 1 | 2 | 3 | 4 | 5 | 6 }>()
</script>

<template>
  <div v-if="type === 1" class="wrp">
    <iconCard />
    Face-to-Face ID & Signature requred
  </div>
  <div v-if="type === 2" class="wrp color2">
    <iconPen />
    Face-to-Face ID & Signature requred
  </div>
  <div v-if="type === 3" class="wrp color3">
    <iconUser />
    Face-to-Face ID & Signature requred
  </div>
  <div v-if="type === 4" class="wrp color4">
    <iconPad />
    Face-to-Face ID & Signature requred
  </div>
  <div v-if="type === 5" class="wrp color5">
    <iconDoor />
    Face-to-Face ID & Signature requred
  </div>
  <div v-if="type === 6" class="wrp color6">
    <iconForbidden />
    Face-to-Face ID & Signature requred
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
  background-color: @color-moderate-slate-blue;
  border-radius: 30px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 28px;
    height: 28px;
  }
}
.color2 {
  background-color: @color-cornflower-blue;
}
.color3 {
  background-color: @color-radiant-orchid;
}
.color4 {
  background-color: @color-blue-green-crayola;
}
.color5 {
  background-color: @color-caribbean-green;
}
.color6 {
  background-color: @color-cool-pink-crayola;
}
</style>
