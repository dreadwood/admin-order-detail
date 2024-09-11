<script setup lang="ts">
import DataTimeTable from '@/components/common/table-elements/DataTimeTable.vue'
import PesonTable from '@/components/common/table-elements/PesonTable.vue'
</script>

<template>
  <div class="table-border">
    <table class="table">
      <thead>
        <tr>
          <th class="table-time">Time</th>
          <th class="table-user">User</th>
          <th class="table-activity">Activity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <DataTimeTable />
          </td>
          <td>
            <PesonTable
              name="Oleksandra Bulbuk"
              :type="2"
              photo="person-1.png"
            />
          </td>
          <td>[APP] Driver Contract Scanned order: 23803176</td>
        </tr>
        <tr>
          <td><DataTimeTable timeAgo="2 min (s) ago" /></td>
          <td>
            <PesonTable
              name="Oleksandra Bulbuk"
              :type="2"
              photo="person-1.png"
            />
          </td>
          <td>[APP] Driver Contract Scanned order: 23803172</td>
        </tr>
        <tr>
          <td><DataTimeTable timeAgo="24 min (s) ago" /></td>
          <td>
            <PesonTable
              name="Oleksandra Bulbuk"
              :type="2"
              photo="person-1.png"
            />
          </td>
          <td>[APP] Driver Contract Scanned order: 23803172</td>
        </tr>
        <tr>
          <td><DataTimeTable timeAgo="55 min (s) ago" /></td>
          <td>
            <PesonTable name="Paul Thompson" :type="2" photo="person-1.png" />
          </td>
          <td>Order id:23755347 transferred from route 698607</td>
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
  font-size: 16px;
  line-height: 1;
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
  tbody tr {
    &:nth-child(2n) {
      background-color: @color-periwinkle-crayola;
    }
  }
  tbody td {
    padding: 10px 11px;
  }
  tr:not(:last-child) {
    border-bottom: 1px solid @color-very-pale-blue-3;
  }
}
.table-time {
  width: 220px;
}
.table-user {
  width: 230px;
}
</style>
