<script setup lang="ts">
import TitleBlock from '@/components/common/TitleBlock.vue'
</script>

<template>
  <TitleBlock text="Delivered to" type="small" tag="h4" />
  <div>Time Delivered</div>
  Patient
  <div class="name">Elon Musk</div>
  <div class="date">
    <div class="label">Time Delivered</div>
    02/18/2024 11:33 PM
  </div>

  <div class="signature">
    <img src="/signature.png" width="132" height="90" alt="" />
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
//
</style>
