<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <div class="card-layout">
    <div class="card-top">
      <div v-if="title" class="card-title">{{ title }}</div>
      <slot name="top"></slot>
    </div>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.card-layout {
  padding: 11px;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 22px;
}
.card-top {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.card-title {
  flex-shrink: 0;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: @color-signal-blue;
}
</style>
