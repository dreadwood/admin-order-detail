<script setup lang="ts">
import PhotoItem from '@common/PhotoItem.vue'
</script>

<template>
  <div class="photo-list">
    <PhotoItem photo="attach-1.png" type="vendor" iconVendor="snow" />
    <PhotoItem photo="attach-2.png" type="vendor" iconVendor="home" />
    <PhotoItem
      photo="attach-3.png"
      type="vendor"
      isIncorrect
      iconVendor="door"
    />
    <PhotoItem photo="attach-4.png" type="vendor" />
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.photo-list {
  .hide-scroll();
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: scroll;
}
</style>
