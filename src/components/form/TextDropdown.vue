<script setup lang="ts">
import { ref } from 'vue'

import iconCheck from '@icons/dropdown-check.svg'
import iconArrow from '@icons/dropdown-arrow.svg'

const props = defineProps<{ values: string[]; type?: 1 | 2 }>()

const isOpen = ref<boolean>(false)
const isSelected = ref<string>(props.values[0])

const btnHandle = () => {
  isOpen.value = !isOpen.value
}
const itemHandle = (hub: string) => {
  isOpen.value = false
  isSelected.value = hub
}
</script>

<template>
  <div class="wrp">
    <button
      class="btn"
      type="button"
      :class="{ actv: isOpen, style2: type === 2 }"
      @click="btnHandle"
    >
      {{ isSelected }}
      <iconArrow />
    </button>
    <div class="dropdown" v-if="isOpen === true">
      <button
        class="item"
        type="button"
        :class="{ actv: isSelected === it }"
        @click="itemHandle(it)"
        v-for="it in values"
        v-bind:key="it"
      >
        <span class="item-text">{{ it }}</span>
        <iconCheck v-if="isSelected === it" />
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  position: relative;
}
.btn {
  .transition(background-color);
  .text-truncate();
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0;
  padding: 9px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 9px;
  cursor: pointer;
  svg {
    .transition(transform);
    display: block;
    flex-shrink: 0;
    width: 20px;
    height: 16px;
    fill: @color-cadet-blue-crayola;
  }
  &.actv {
    svg {
      transform: scaleY(-1);
    }
  }
  &.style2 {
    padding: 10px 9px;
    line-height: 18px;
    font-weight: 400;
    & + .dropdown .item.actv {
      font-weight: 400;
    }
  }
}
.dropdown {
  .hide-scroll();
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  margin-top: 2px;
  overflow: scroll;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 12px;
  box-shadow: 2px 2px 13px 0 rgb(@color-black 0.05);
  & > *:not(:first-child) {
    margin-top: 8px;
  }
}
.item {
  .transition(background-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0;
  padding: 11px 10px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: transparent;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  svg {
    display: block;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
  }
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
  &.actv {
    font-weight: 700;
  }
}
.item-text {
  .text-truncate();
}
</style>
