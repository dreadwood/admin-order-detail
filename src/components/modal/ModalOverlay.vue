<template>
  <div class="overlay">
    <div class="modal-wrp">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.overlay {
  position: fixed;
  padding: 20px;
  overflow: scroll;
  background-color: rgb(@color-black 0.5);
  inset: 0 0 0 0;
}
.modal-wrp {
  width: max-content;
  margin: 0 auto;
}
</style>
