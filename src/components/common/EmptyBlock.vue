<script setup lang="ts">
defineProps<{ title: string; text: string; isGray?: boolean }>()
</script>

<template>
  <div
    class="empty-block"
    :class="{
      gray: isGray
    }"
  >
    <div class="block-content">
      <div class="block-title">{{ title }}</div>
      <div class="block-msg">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.empty-block {
  display: grid;
  place-items: center;
  height: 100%;
  padding: 20px;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: @color-gray-blue;
  background-color: @color-white;
  border-radius: 20px;
  &.gray {
    background-color: @color-gray-965;
  }
}
.block-content {
  width: 330px;
  margin: 0 auto;
}
.block-title {
  font-size: 20px;
  line-height: 22px;
  font-weight: 700;
}
.block-msg {
  margin-top: 12px;
}
</style>
