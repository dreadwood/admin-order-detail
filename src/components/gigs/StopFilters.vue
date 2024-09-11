<script setup lang="ts">
import { ref } from 'vue'

import ModalFilters from '@/components/gigs/modal/ModalFilters.vue'
import iconFilter from '@icons/filter.svg'

const isOpen = ref<boolean>(false)

const openModal = () => {
  isOpen.value = true
}
const closeModal = (evt: MouseEvent) => {
  if (evt.currentTarget === evt.target) {
    isOpen.value = false
  }
}
</script>

<template>
  <button class="btn" @click="openModal">
    <iconFilter />
    Filters
  </button>
  <ModalFilters v-if="isOpen" :closeModal="closeModal" />
</template>

<style lang="less" scoped>
@import '@style/common';
.btn {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 8px 15px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  text-align: center;
  color: @color-white;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    fill: currentcolor;
  }
  &:hover,
  &:focus-visible {
    background-color: @color-cornflower;
  }
}
</style>
