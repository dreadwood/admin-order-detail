<script setup lang="ts">
defineProps<{ count: number }>()
</script>

<template>
  <div class="label-count">{{ count }}</div>
</template>

<style lang="less" scoped>
@import '@style/common';
.label-count {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 26px;
  height: 26px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  color: @color-white;
  background-color: @color-cornflower-blue;
  border-radius: 50%;
}
</style>
