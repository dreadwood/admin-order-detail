<script setup lang="ts">
import PesonTable from '@/components/common/table-elements/PesonTable.vue'
import StatusLabel from '../labels/StatusLabel.vue'

defineProps<{ type: 1 | 2 }>()
</script>

<template>
  <div class="table-border">
    <table v-if="type === 1" class="table">
      <thead>
        <tr>
          <th>Time</th>
          <th>User</th>
          <th>Activity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            02/19/2024 09:16:30 PM
            <div class="when">1 min (s) ago</div>
          </td>
          <td>
            <PesonTable name="Elizabeth Anderson" photo="person-2.png" />
          </td>
          <td>[QAQC] building number 345 autodetect is <b>success</b></td>
        </tr>
        <tr>
          <td>
            02/19/2024 09:16:30 PM
            <div class="when">2 min (s) ago</div>
          </td>
          <td>
            <PesonTable name="Paul Thompson" photo="person-1.png" />
          </td>
          <td>QAQC status changed to <b>progress</b></td>
        </tr>
        <tr>
          <td>
            02/19/2024 09:16:30 PM
            <div class="when">24 min (s) ago</div>
          </td>
          <td>
            <PesonTable name="Elizabeth Anderson" photo="person-2.png" />
          </td>
          <td>[QAQC] building number 345 autodetect is <b>success</b></td>
        </tr>
        <tr>
          <td>
            02/19/2024 09:16:30 PM
            <div class="when">55 min (s) ago</div>
          </td>
          <td>
            <PesonTable name="Paul Thompson" photo="person-1.png" />
          </td>
          <td>QAQC status changed to <b>progress</b></td>
        </tr>
      </tbody>
    </table>

    <table v-if="type === 2" class="table">
      <thead>
        <tr>
          <th>Date time</th>
          <th>User</th>
          <th>From</th>
          <th>To</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="date">
            02/19/2024 09:16:30 PM
            <div class="when">2 day (s) ago</div>
          </td>
          <td>
            <PesonTable name="Paul Thompson" photo="person-1.png" />
          </td>
          <td>
            <StatusLabel value="Driver Out" />
          </td>
          <td>
            <StatusLabel value="Delivery Attempted" />
          </td>
        </tr>
        <tr>
          <td class="date">
            02/19/2024 09:16:30 PM
            <div class="when">2 day (s) ago</div>
          </td>
          <td>
            <PesonTable name="Paul Thompson" photo="person-1.png" />
          </td>
          <td>
            <StatusLabel value="Route Optimized" />
          </td>
          <td>
            <StatusLabel value="Driver Out" />
          </td>
        </tr>
        <tr>
          <td class="date">
            02/19/2024 09:16:30 PM
            <div class="when">2 day (s) ago</div>
          </td>
          <td>
            <PesonTable name="Paul Thompson" photo="person-1.png" />
          </td>
          <td>
            <StatusLabel value="Ready for delivery" />
          </td>
          <td>
            <StatusLabel value="Route Optimized" />
          </td>
        </tr>
        <tr>
          <td class="date">
            02/19/2024 09:16:30 PM
            <div class="when">2 day (s) ago</div>
          </td>
          <td>
            <PesonTable name="Paul Thompson" photo="person-1.png" />
          </td>
          <td>
            <StatusLabel value="Pickup Occurred" />
          </td>
          <td>
            <StatusLabel value="Ready for delivery" />
          </td>
        </tr>
        <tr>
          <td class="date">
            02/19/2024 09:16:30 PM
            <div class="when">2 day (s) ago</div>
          </td>
          <td>
            <PesonTable name="Paul Thompson" photo="person-1.png" />
          </td>
          <td>
            <StatusLabel value="Ready for Pickup" />
          </td>
          <td>
            <StatusLabel value="Pickup Occurred" />
          </td>
        </tr>
        <tr>
          <td class="date">
            02/19/2024 09:16:30 PM
            <div class="when">2 day (s) ago</div>
          </td>
          <td class="person">
            <PesonTable name="Paul Thompson" photo="person-1.png" />
          </td>
          <td>
            <StatusLabel value="Ready to Print" />
          </td>
          <td>
            <StatusLabel value="Ready for Pickup" />
          </td>
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
  border-radius: 8px;
}
.table {
  width: 100%;
  font-family: @font-default;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  text-align: left;
  color: @color-gray-blue;
  background-color: @color-white;
  border-collapse: collapse;
  th,
  tr:not(:last-child) td {
    border-bottom: 1px solid @color-very-pale-blue-3;
  }
  th {
    padding: 10px 12px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    background-color: @color-periwinkle-crayola;
  }
  td {
    min-height: 62px;
    padding: 10px 10px 12px 10px;
  }
}
.date {
  width: 110px;
}
.when {
  margin-top: 5px;
  opacity: 0.6;
}
.person {
  width: 170px;
}
</style>
