<script setup lang="ts">
import iconRefresh from '@icons/squard-refresh.svg'
import iconStop from '@icons/squard-stop.svg'

defineProps<{ number: number; status: string }>()
</script>

<template>
  <div class="sort-number">
    <div class="number">
      {{ number }}
    </div>
    <iconRefresh class="icon" v-if="status === 'refresh'" />
    <iconStop class="icon" :class="'stop'" v-if="status === 'stop'" />
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.sort-number {
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  text-align: center;
  color: @color-signal-blue;
}
.number {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 24px;
  height: 24px;
}
.icon {
  display: block;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  fill: @color-mountain-meadow;
  &.stop {
    fill: @color-radical-red;
  }
}
</style>
