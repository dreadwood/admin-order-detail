<script setup lang="ts">
import SwitchOrders from '@components/gigs/form/SwitchOrders.vue'
import ToogleOrders from './gigs/form/ToogleOrders.vue'
import SearchOrders from './gigs/form/SearchOrders.vue'
import StatusFilterBtn from './gigs/button/StatusFilterBtn.vue'
import OrderFilterBtn from './gigs/button/OrderFilterBtn.vue'

const orders = [
  {
    id: 1,
    department: 'NATES BRONX 1ST - 1',
    operator: 'Mason Honey',
    driver: 'Avtandil Chubinidze',
    status: 'late'
  },
  {
    id: 2,
    department: 'CONNECTICUT - 10',
    operator: 'Isabella',
    driver: 'Olivia',
    status: 'ontime',
    isActv: true
  },
  {
    id: 3,
    department: 'NATES BRONX 1ST - 1',
    operator: 'Mason Honey',
    driver: 'Avtandil Chubinidze',
    status: 'late',
    isLost: true
  },
  {
    id: 4,
    department: 'Jersey - 1',
    operator: 'Isabella',
    driver: 'Olivia',
    status: 'early'
  },
  {
    id: 5,
    department: 'Jersey - 1',
    operator: 'Isabella',
    driver: 'Olivia',
    status: 'ontime',
    time: '08/29 11:19'
  },
  {
    id: 6,
    department: 'Jersey - 1',
    operator: 'Isabella',
    driver: 'Olivia',
    status: 'early'
  },
  {
    id: 7,
    department: 'Jersey - 1',
    operator: 'Isabella',
    driver: 'Olivia',
    status: 'ontime',
    time: '11:19'
  }
]
</script>

<template>
  <section class="orders">
    <div class="filter">
      <div class="filter-toogle">
        Show only pending
        <ToogleOrders :value="true" />
      </div>
      <SwitchOrders :values="['Show all', 'Only mine']" />
      <SearchOrders placeholder="Route Name Or Id" />
    </div>

    <div class="types">
      Order Types:
      <div class="types-list">
        <StatusFilterBtn value="All" :count="533" isActv />
        <StatusFilterBtn value="Only Regular" :count="233" />
        <StatusFilterBtn value="Only Time Window" :count="123" />
        <StatusFilterBtn value="Only Pick Up" :count="23" />
        <StatusFilterBtn value="Only Same Day" :count="57" />
      </div>
    </div>

    <div class="list">
      <OrderFilterBtn
        v-for="it in orders"
        :department="it.department"
        :operator="it.operator"
        :driver="it.driver"
        :status="it.status"
        :time="it.time"
        :isLost="it.isLost"
        :isActv="it.isActv"
        v-bind:key="it.id"
      />
      <OrderFilterBtn
        v-for="(_, i) in new Array(20)"
        :department="orders[5].department"
        :operator="orders[5].operator"
        :driver="orders[5].driver"
        :status="orders[5].status"
        :time="orders[5].time"
        :isLost="orders[5].isLost"
        :isActv="orders[5].isActv"
        v-bind:key="i"
      />
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '@style/common';
.filter {
  display: grid;
  gap: 8px;
  padding: 8px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  color: @color-signal-blue;
  background-color: @color-periwinkle-crayola;
  border-radius: 12px;
}
.filter-toogle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.types {
  margin-top: 12px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  color: @color-signal-blue;
}
.types-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
}
.list {
  display: grid;
  gap: 4px;
  margin-top: 12px;
}
</style>
