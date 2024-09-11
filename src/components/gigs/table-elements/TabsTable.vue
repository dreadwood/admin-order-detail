<script setup lang="ts">
import { ref } from 'vue'

type Tab = {
  name: string
  icon?: string
}

const props = defineProps<{ values: Tab[] }>()

const isActv = ref<boolean[]>(props.values.map((_, i) => i === 0))

const handle = (i: number) => (isActv.value[i] = !isActv.value[i])
</script>

<template>
  <div class="tabs-list">
    <button
      class="tab"
      :class="{ actv: isActv[i] }"
      @click="handle(i)"
      v-for="(it, i) in values"
      v-bind:key="it.name"
    >
      <div class="tab-icon" v-if="it.icon" v-html="it.icon"></div>
      {{ it.name }}
    </button>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.tabs-list {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}
.tab {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  text-align: center;
  color: @color-signal-blue;
  background-color: @color-periwinkle-crayola-3;
  border: 0;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  &:not(.actv):hover,
  &:not(.actv):focus-visible {
    background-color: rgb(@color-cornflower-blue 0.15);
  }
  &.actv {
    font-weight: 500;
    color: @color-white;
    background-color: @color-cornflower-blue;
  }
}
.tab-icon {
  flex-shrink: 0;
  & > * {
    display: block;
    width: 17px;
    height: 17px;
    fill: currentcolor;
  }
}
</style>
