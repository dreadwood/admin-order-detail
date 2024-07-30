<script setup lang="ts">
import HistoryTable from '@tables/HistoryTable.vue'
import SearchField from '@form/SearchField.vue'
import ActvBtn from '@buttons/ActvBtn.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'
</script>

<template>
  <div class="card">
    <div class="card-top">
      <TitleBlock text="Activity history" />
      <div class="card-contols">
        <SearchField />
      </div>
    </div>
    <div class="filter">
      <ActvBtn text="All (17)" isActv :type="2" />
      <ActvBtn text="Manual (0)" :type="2" />
      <ActvBtn text="System (17)" :type="2" />
      <ActvBtn text="Copay (17)" :type="2" />
    </div>
    <div class="activity-table">
      <HistoryTable :type="1" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.filter {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
}
.activity-table {
  margin-top: 12px;
}
</style>
