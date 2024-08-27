<script setup lang="ts">
import PartPerson from './PartPerson.vue'

defineProps<{ state: 1 | 2 | 3 }>()
</script>

<template>
  <PartPerson name="Paul Thompson" photo="person-1.png" />
  <PartPerson name="Elizabeth Anderson" photo="person-2.png" />
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
</style>
