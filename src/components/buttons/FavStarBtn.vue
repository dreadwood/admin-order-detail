<script setup lang="ts">
import { ref } from 'vue'

import iconStar from '@icons/star.svg'

const props = withDefaults(
  defineProps<{
    isActv?: boolean
    width?: number
    height?: number
  }>(),
  {
    isActv: false,
    width: 28,
    height: 28
  }
)

const isBtnActiv = ref<boolean>(props.isActv)

const btnHandle = () => {
  isBtnActiv.value = !isBtnActiv.value
}
</script>

<template>
  <button
    class="btn-fav"
    :class="{ actv: isBtnActiv }"
    @click="btnHandle"
    :aria-label="isBtnActiv ? 'remove favorite' : 'add favorite'"
  >
    <iconStar :width="width" :height="height" />
  </button>
</template>

<style lang="less" scoped>
@import '@style/common';
.btn-fav {
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  svg {
    .transition(fill, stroke);
    display: block;
    fill: none;
    stroke: @color-signal-blue;
    stroke-width: 2px;
  }
  &:not([disabled]) {
    cursor: pointer;
  }
  &:not(.actv):hover svg {
    stroke: @color-purple-blue;
  }
  &.actv svg {
    fill: @color-brilliant-greenish-yellow;
    stroke: @color-brilliant-greenish-yellow;
  }
}
</style>
