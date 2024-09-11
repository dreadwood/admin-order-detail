<script setup lang="ts">
import SortBtnTable from '@components/common/table-elements/SortBtnTable.vue'
import DefaultCheckbox from '@components/form/DefaultCheckbox.vue'
import CallInfoTable from '../table-elements/CallInfoTable.vue'
import AddressTable from '../table-elements/AddressTable.vue'
import StatusTable from './StatusTable.vue'
import SortNumberTable from '../table-elements/SortNumberTable.vue'
import OrderTable from '../table-elements/OrderTable.vue'
import LabelDayTable from '../table-elements/LabelDayTable.vue'

const dataTable = [
  {
    id: 1,
    colorRow: null,
    sortIcon: 'refresh',
    orderWait: false,
    orderTime: '3 min',
    status: 'Delivered',
    address: '123 Main St. New York NY 10001',
    callUponArrival: false,
    patient: 'N/A',
    pharmacy: 'N/A'
  },
  {
    id: 2,
    colorRow: null,
    sortIcon: 'refresh',
    orderWait: false,
    orderTime: '3 min',
    status: 'Not Present',
    address: '3854 HYLAN BLVD STATEN ISLAND NY  DAY CARE',
    callUponArrival: true,
    patient: ['red', 'yellow', 'blue', 'green'],
    pharmacy: ['red', 'yellow', 'blue', 'green']
  },
  {
    id: 3,
    colorRow: 'green',
    sortIcon: 'refresh',
    orderWait: false,
    orderTime: '3 min',
    status: 'Wrong Address',
    address: '26 W CASTOR PL STATEN ISLAND NY',
    callUponArrival: true,
    patient: ['red', 'yellow', 'blue', 'green'],
    pharmacy: 'N/A'
  },
  {
    id: 4,
    colorRow: 'green',
    sortIcon: 'refresh',
    orderWait: true,
    status: 'Refuse',
    address: '147 NORWAY AVE STATEN ISLAND NY 4 B',
    callUponArrival: true,
    patient: ['red', 'yellow', 'blue', 'green'],
    pharmacy: ['red', 'yellow', 'blue', 'green']
  },
  {
    id: 5,
    colorRow: null,
    sortIcon: 'refresh',
    orderWait: false,
    orderTime: '3 min',
    status: 'Delivered',
    address: '20 FATHER CAPODANNO BLVD STATEN ISLAND NY 5L',
    callUponArrival: true,
    patient: ['red', 'yellow', 'blue', 'green'],
    pharmacy: 'N/A'
  },
  {
    id: 6,
    colorRow: null,
    sortIcon: 'refresh',
    orderWait: false,
    orderTime: '3 min',
    status: 'Delivered',
    address: '679 TARGEE ST STATEN ISLAND NY',
    callUponArrival: true,
    patient: 'N/A',
    pharmacy: ['red', 'yellow', 'blue', 'green']
  },
  {
    id: 7,
    colorRow: null,
    sortIcon: 'refresh',
    orderWait: true,
    status: 'Delivered',
    address: '700 VICTORY BLVD STATEN ISLAND NY 16 K',
    callUponArrival: false,
    patient: 'N/A',
    pharmacy: 'N/A'
  },
  {
    id: 8,
    colorRow: null,
    sortIcon: 'refresh',
    orderWait: false,
    orderTime: '3 min',
    status: 'Delivered',
    address: '164 WINTER AVE MID ISLAND NY 3 R',
    callUponArrival: true,
    patient: ['red', 'yellow', 'blue', 'green'],
    pharmacy: 'N/A'
  },
  {
    id: 9,
    colorRow: null,
    sortIcon: 'refresh',
    orderWait: false,
    orderTime: '3 min',
    status: 'Delivered',
    address: '30 TAFT AVE STATEN ISLAND NY',
    callUponArrival: false,
    patient: 'N/A',
    pharmacy: 'N/A'
  },
  {
    id: 10,
    colorRow: null,
    sortIcon: 'refresh',
    orderWait: true,
    status: 'Delivered',
    address: '173 54th St, Brooklyn, NY 11220, USA',
    callUponArrival: true,
    patient: ['red', 'yellow', 'blue', 'green'],
    pharmacy: ['red', 'yellow', 'blue', 'green']
  },
  {
    id: 11,
    colorRow: 'gray',
    sortIcon: 'refresh',
    orderWait: false,
    orderTime: '3 min',
    status: 'Delivered',
    address: '154 SCRANTON AVE Staten Island NY',
    callUponArrival: true,
    patient: ['red', 'yellow', 'blue', 'green'],
    pharmacy: ['green']
  },
  {
    id: 12,
    colorRow: null,
    sortIcon: 'refresh',
    orderWait: false,
    orderTime: '3 min',
    status: 'Not Present',
    address: '123 Main St. New York NY 10001',
    callUponArrival: true,
    patient: ['green'],
    pharmacy: ['red', 'yellow', 'blue', 'green']
  },
  {
    id: 13,
    colorRow: 'yellow',
    sortIcon: 'stop',
    orderWait: true,
    status: 'Driver Out',
    address: '123 Main St. New York NY 10001',
    callUponArrival: true,
    patient: ['blue', 'green'],
    pharmacy: ['blue', 'green']
  },
  {
    id: 14,
    colorRow: 'green',
    sortIcon: 'stop',
    orderWait: false,
    orderTime: '3 min',
    status: 'Driver Out',
    address: '123 Main St. New York NY 10001',
    callUponArrival: true,
    patient: ['yellow', 'green'],
    pharmacy: ['yellow', 'green']
  }
]
</script>

<template>
  <div class="table-border">
    <table class="table">
      <thead>
        <tr>
          <th>
            <DefaultCheckbox />
          </th>
          <th>
            <div class="col-title">Sort <SortBtnTable /></div>
          </th>
          <th>
            <div class="col-title">Order # <SortBtnTable /></div>
          </th>
          <th>
            <div class="col-title">Status <SortBtnTable /></div>
          </th>
          <th>
            <div class="col-title">Address <SortBtnTable /></div>
          </th>
          <th>
            <div class="col-title">Call Upon Arrival <SortBtnTable /></div>
          </th>
          <th>
            <div class="col-title">Recipient Name <SortBtnTable /></div>
          </th>
          <th>
            <div class="col-title">C.N. Patient <SortBtnTable /></div>
          </th>
          <th>
            <div class="col-title">C.N. Pharmacy <SortBtnTable /></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><DefaultCheckbox /></td>
          <td>
            <div class="label-stops yellow">Start</div>
          </td>
          <td></td>
          <td></td>
          <td>
            <AddressTable text="123 Main St. New York NY 10001" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr :class="it.colorRow" v-for="it in dataTable" v-bind:key="it.id">
          <td><DefaultCheckbox /></td>
          <td>
            <SortNumberTable :number="it.id" :status="it.sortIcon" />
          </td>
          <td class="body-order">
            <LabelDayTable />
            <OrderTable :isWait="it.orderWait" :time="it.orderTime" />
          </td>
          <td>
            <StatusTable :text="it.status" />
          </td>
          <td>
            <AddressTable :text="it.address" />
          </td>
          <td>
            <div class="body-call-cell">
              <DefaultCheckbox :isChecked="it.callUponArrival" />
            </div>
          </td>
          <td>Elon Musk</td>
          <td>
            <CallInfoTable
              v-if="Array.isArray(it.patient)"
              :values="it.patient"
            />
            <template v-else>{{ it.patient }}</template>
          </td>
          <td>
            <CallInfoTable
              v-if="Array.isArray(it.pharmacy)"
              :values="it.pharmacy"
            />
            <template v-else>{{ it.pharmacy }}</template>
          </td>
        </tr>
        <tr>
          <td><DefaultCheckbox /></td>
          <td>
            <div class="label-stops">End</div>
          </td>
          <td></td>
          <td></td>
          <td>
            <AddressTable text="123 Main St. New York NY 10001" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.table-border {
  overflow: hidden;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 0 16px 16px 16px;
}
.table {
  width: 100%;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: @color-gray-blue;
  border-collapse: collapse;
  thead tr {
    background-color: @color-periwinkle-crayola;
    border-bottom: 1px solid @color-very-pale-blue-3;
  }
  thead th {
    padding: 15px 11px;
    font-weight: 500;
  }
  tbody tr:not(:first-child, :last-child) td {
    padding: 15px 6px 15px 15px;
  }
  tbody tr:first-child td,
  tbody tr:last-child td {
    padding: 7px 6px 7px 15px;
  }
  tbody tr {
    &.green {
      background-color: rgb(@color-dark-pastel-green 0.12);
    }
    &.gray {
      background-color: rgb(@color-black 0.12);
    }
    &.yellow {
      background-color: rgb(@color-amber 0.4);
    }
  }
  tr:not(:last-child) {
    border-bottom: 1px solid @color-very-pale-blue-3;
  }
}
.col-title {
  .text-nowrap();
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
}
.body-order {
  position: relative;
}
.body-call-cell {
  display: flex;
  justify-content: center;
}
.label-stops {
  width: max-content;
  min-width: 50px;
  padding: 5px 13px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  text-align: center;
  color: @color-white;
  background-color: @color-mountain-meadow;
  border-radius: 30px;
  &.yellow {
    background-color: @color-amber;
  }
}
</style>
