<script setup lang="ts">
defineProps<{
  text: string
  type?: 'small' | 'big'
  tag?: 'h3' | 'h4' | 'p'
}>()
</script>

<template>
  <component class="title-card" :class="type" :is="tag || 'h3'">
    {{ text }}
  </component>
</template>

<style lang="less" scoped>
@import '@style/common';
.title-card {
  margin: 0;
  font-family: @font-default;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  text-align: left;
  color: @color-signal-blue;
  &.small {
    font-size: 16px;
    line-height: 19px;
  }
  &.big {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
