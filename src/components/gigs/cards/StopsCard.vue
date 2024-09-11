<script setup lang="ts">
import iconCross from '@assets/icons/cross-2.svg?raw'
import iconDone from '@assets/icons/done-2.svg?raw'
import iconBan from '@assets/icons/ban.svg?raw'
import iconHouse from '@assets/icons/house.svg?raw'

import ActvBtn from '@components/buttons/ActvBtn.vue'
import SearchElement from '@components/common/form/SearchElement.vue'
import CardLayout from '@components/gigs/layout/CardLayout.vue'
import TabsTable from '@components/gigs/table-elements/TabsTable.vue'
import StopsTable from '@components/gigs/table/StopsTable.vue'
import StopFilters from '@components/gigs/StopFilters.vue'

const tabs = [
  {
    name: 'All (37)'
  },
  {
    name: 'Delivered (351)',
    icon: iconDone
  },
  {
    name: 'Not Present (232)',
    icon: iconBan
  },
  {
    name: 'Wrong Address (023)',
    icon: iconHouse
  },
  {
    name: 'Recipient Refused (230)',
    icon: iconCross
  }
]

const filters = ['Payout', 'Force Confirm Stop', 'Transfer Stop']
</script>

<template>
  <CardLayout title="Stops">
    <template v-slot:top>
      <div class="head">
        <ActvBtn v-for="it in filters" :text="it" :type="8" v-bind:key="it" />
        <SearchElement class="search-element" />
        <StopFilters />
      </div>
    </template>
    <template v-slot:content>
      <TabsTable :values="tabs" />
      <StopsTable />
      <div class="info-table">Showing 1 to 14 of 14 entries</div>
    </template>
  </CardLayout>
</template>

<style lang="less" scoped>
@import '@style/common';
.head {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.info-table {
  margin-top: 12px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
}
.search-element {
  width: 240px;
}
</style>
