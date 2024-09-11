<script setup lang="ts">
import CopyBtn from '@buttons/CopyBtn.vue'

withDefaults(defineProps<{ type?: 1 | 2; name: string; photo: string }>(), {
  type: 1
})
</script>

<template>
  <div
    class="person"
    :class="{
      style2: type === 2
    }"
  >
    <div class="photo">
      <img :src="`/${photo}`" width="40" height="40" alt="" />
    </div>
    <div>
      {{ name }}
      <div class="num">
        123456789
        <CopyBtn />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.person {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: @color-gray-blue;
  &.style2 {
    font-size: 16px;
  }
}
.photo {
  flex-shrink: 0;
  img {
    display: block;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
  }
}
.num {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  color: @color-cornflower-blue;
}
</style>
