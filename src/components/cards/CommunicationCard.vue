<script setup lang="ts">
import CardTopBtn from '@buttons/CardTopBtn.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'
import SmsCard from '@cards/SmsCard.vue'
import CallCard from './CallCard.vue'
</script>

<template>
  <div class="card">
    <div class="card-top">
      <TitleBlock text="Communication" />
      <div class="card-contols">
        <CardTopBtn text="Block SMS" />
        <CardTopBtn text="Block Calls" />
      </div>
    </div>

    <div class="row">
      <SmsCard :state="2" />
      <CallCard :state="2" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.row {
  display: flex;
  gap: 10px;
}
.col {
  display: grid;
  gap: 12px;
}
.col-fix {
  flex-shrink: 0;
  width: 270px;
}
</style>
