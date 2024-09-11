<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ values: [string, string] }>()

const isActv = ref<string>(props.values[0])

const handle = (it: string) => {
  isActv.value = it
}
</script>

<template>
  <div class="switch">
    <button
      v-for="it in values"
      class="switch-btn"
      :class="{
        actv: isActv === it
      }"
      @click="handle(it)"
      v-bind:key="it"
    >
      {{ it }}
    </button>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.switch {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 100%;
  background-color: @color-white;
  border-radius: 15px;
}
.switch-btn {
  width: 50%;
  margin: 0;
  padding: 6px 10px;
  font-family: inherit;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: center;
  color: rgb(@color-signal-blue 0.5);
  background-color: transparent;
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  &:not(.actv):hover,
  &:not(.actv):focus-visible {
    color: @color-cornflower-blue;
  }
  &.actv {
    color: @color-white;
    background-color: @color-cornflower-blue;
  }
}
</style>
