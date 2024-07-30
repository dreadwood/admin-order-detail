<script setup lang="ts">
import TitleBlock from '@/components/common/TitleBlock.vue'
import HistoryTable from '@tables/HistoryTable.vue'
</script>

<template>
  <div class="card">
    <div class="card-top">
      <TitleBlock text="Status history" type="small" tag="h3" />
    </div>
    <HistoryTable :type="2" />
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
//
</style>
