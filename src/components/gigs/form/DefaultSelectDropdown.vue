<script setup lang="ts">
import { ref } from 'vue'

import iconArrow from '@icons/dropdown-arrow.svg'
import iconCheck from '@icons/dropdown-check.svg'

const props = defineProps<{
  values: string[]
  name?: string
  isDisabled?: boolean
}>()

const currentValue = ref<string>(props.values[0])
const isOpen = ref<boolean>(false)

function handleChangeValue(it: string) {
  currentValue.value = it
  isOpen.value = false
}

function toogleOpen() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="dropdown">
    <button class="dropdown-field" @click="toogleOpen" :disabled="isDisabled">
      {{ currentValue }}
      <iconArrow class="dropdown-field-icon" />
    </button>
    <input type="hidden" :name="name" :value="currentValue" />
    <div class="dropdown-list" :class="{ open: isOpen }">
      <button
        class="dropdown-value"
        :class="{ actv: it === currentValue }"
        v-for="it in values"
        @click="handleChangeValue(it)"
        :key="it"
      >
        {{ it }}
        <iconCheck v-if="it === currentValue" />
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.dropdown {
  position: relative;
  &:hover,
  &:focus-within {
    .dropdown-field:not([disabled]) {
      border-color: rgb(@color-cornflower-blue 0.5);
    }
    .dropdown-field:not([disabled]) svg {
      fill: @color-cornflower-blue;
    }
  }
}
.dropdown-field {
  .transition(border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin: 0;
  padding: 7px 11px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 8px;
  cursor: pointer;
  svg {
    .transition(fill);
    flex-shrink: 0;
    width: 20px;
    height: 16px;
    fill: @color-cadet-blue-crayola-2;
  }
  &[disabled] {
    color: rgb(@color-signal-blue 0.4);
  }
}
.dropdown-list {
  .hide-scroll();
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  display: none;
  width: 100%;
  background-color: @color-white;
  border-radius: 12px;
  box-shadow: 8px 3px 22px 10px rgb(@color-gray-588 0.11);
  &.open {
    display: block;
  }
}
.dropdown-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 8px 12px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: transparent;
  border: 0;
  border-radius: 12px;
  &.actv {
    font-weight: 700;
  }
  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
  }
  &:hover,
  &:focus-visible {
    background-color: rgb(@color-cornflower-blue 0.2);
    cursor: pointer;
  }
}
</style>
