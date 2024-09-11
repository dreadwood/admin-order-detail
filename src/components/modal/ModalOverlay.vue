<script setup lang="ts">
defineProps<{
  closeModal?: (evt: MouseEvent) => void
}>()
</script>

<template>
  <div class="overlay" @click="closeModal">
    <div class="modal-wrp">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.overlay {
  .hide-scroll;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: scroll;
  background-color: rgb(@color-black 0.5);
  inset: 0 0 0 0;
}
.modal-wrp {
  width: max-content;
  margin: auto;
}
</style>
