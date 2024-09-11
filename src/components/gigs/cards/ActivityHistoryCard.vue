<script setup lang="ts">
import SearchElement from '@components/common/form/SearchElement.vue'
import CardLayout from '@components/gigs/layout/CardLayout.vue'
import ActivityHistoryTable from '@components/gigs/table/ActivityHistoryTable.vue'
import TabsTable from '@components/gigs/table-elements/TabsTable.vue'

const tabs = ['All (21)', 'Manual (0)', 'System (17)', 'Copay (4)'].map(
  (it) => ({ name: it })
)
</script>

<template>
  <CardLayout title="Activity history">
    <template v-slot:top>
      <SearchElement class="search-element" />
    </template>
    <template v-slot:content>
      <TabsTable :values="tabs" />
      <ActivityHistoryTable />
    </template>
  </CardLayout>
</template>

<style lang="less" scoped>
@import '@style/common';
.search-element {
  width: 240px;
  margin-left: auto;
}
</style>
