<script setup lang="ts">
import { ref } from 'vue'

import iconArrow from '@icons/checkbox-arrow.svg'

const props = defineProps<{
  isChecked?: boolean
  isBlue?: boolean
  id?: string
}>()

const status = ref<boolean>(props.isChecked || false)

const handle = () => {
  status.value = !status.value
}
</script>

<template>
  <div class="checkbox">
    <label
      class="checkbox-icon"
      :class="{
        checked: status,
        blue: isBlue
      }"
    >
      <iconArrow v-if="status" />
      <input
        class="visually-hidden"
        type="checkbox"
        :id="id"
        :checked="isChecked"
        @click="handle"
      />
    </label>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.checkbox {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
}
.checkbox-icon {
  display: grid;
  place-items: center;
  width: 14px;
  height: 14px;
  background-color: transparent;
  border: 1px solid @color-gray-592;
  border-radius: 3px;
  cursor: pointer;
  svg {
    display: block;
    width: 8px;
    height: 8px;
    fill: @color-white;
  }
  &.blue {
    border-color: @color-cornflower-blue;
  }
  &.checked {
    background-color: @color-cornflower-blue;
    border-color: @color-cornflower-blue;
  }
}
</style>
