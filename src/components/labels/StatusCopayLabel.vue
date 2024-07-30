<script setup lang="ts">
defineProps<{ type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }>()
</script>

<template>
  <div v-if="type === 1" class="item">Open</div>
  <div v-if="type === 2" class="item color2">Unpaid</div>
  <div v-if="type === 3" class="item color3">Paid to Driver</div>
  <div v-if="type === 4" class="item color4">Paid by Card</div>
  <div v-if="type === 5" class="item color5">Printed</div>
  <div v-if="type === 6" class="item color6">At Facility</div>
  <div v-if="type === 7" class="item color7">On its way to Pharmacy</div>
  <div v-if="type === 8" class="item color8">At Pharmacy</div>
</template>

<style lang="less" scoped>
@import '@style/common';
.item {
  padding: 6px 15px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  color: @color-signal-blue;
  background-color: @color-very-pale-blue-2;
  border-radius: 30px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 28px;
    height: 28px;
  }
}
.color2 {
  color: @color-white;
  background-color: @color-radical-red;
}
.color3 {
  background-color: @color-amber;
}
.color4 {
  background-color: @color-amber;
}
.color5 {
  color: @color-white;
  background-color: @color-dark-orange;
}
.color6 {
  color: @color-white;
  background-color: @color-cornflower-blue;
}
.color7 {
  color: @color-white;
  background-color: @color-persian-green;
}
.color8 {
  color: @color-white;
  background-color: @color-thrush-eggs;
}
</style>
