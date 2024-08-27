<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <div class="notification">{{ text }}</div>
</template>

<style lang="less" scoped>
@import '@style/common';
.notification {
  position: fixed;
  right: 12px;
  bottom: 12px;
  width: max-content;
  padding: 7px 23px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: @color-white;
  background-color: @color-radical-red;
  border-radius: 30px;
}
</style>
