<script setup lang="ts">
import LayoutPage from '@/layout/LayoutPage.vue'
import ActvBtn from '@components/buttons/ActvBtn.vue'
import ActivityHistoryCard from '@components/gigs/cards/ActivityHistoryCard.vue'
import GigsHeader from '@components/header/GigsHeader.vue'
import OrdersGigs from '@components/OrdersGigs.vue'
import StopsCard from '@components/gigs/cards/StopsCard.vue'
import InfoCard from '@components/gigs/cards/InfoCard.vue'

const filters = [
  'All (120)',
  'Calculation (9)',
  'Ready to start (33)',
  'Vendor assigned (123)',
  'Gig started (456)',
  'Vendor finished (8)',
  'QAQC checked (8)',
  'Accouting checked (8)'
]
</script>

<template>
  <LayoutPage title="Gigs">
    <template v-slot:header>
      <GigsHeader />
    </template>
    <template v-slot:content>
      <div class="content">
        <div class="filter-content">
          <ActvBtn
            v-for="(it, i) in filters"
            :text="it"
            :type="8"
            :isActv="i === 0"
            v-bind:key="it"
          />
        </div>

        <div class="colums-content">
          <div class="left-content">
            <OrdersGigs />
          </div>
          <div class="right-content">
            <InfoCard />
            <StopsCard />
            <ActivityHistoryCard />
          </div>
        </div>
      </div>
    </template>
  </LayoutPage>
</template>

<style lang="less" scoped>
@import '@style/common';
.content {
  height: 100%;
  padding: 16px;
}
.filter-content {
  display: flex;
  align-items: center;
  gap: 8px;
}
.colums-content {
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 16px;
  margin-top: 16px;
  padding-bottom: 16px;
}
.right-content {
  display: grid;
  align-content: start;
  align-items: start;
  gap: 12px;
}
</style>
