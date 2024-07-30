<script setup lang="ts">
import iconCalendar from '@icons/calendar.svg'
import iconCross from '@icons/cross-white.svg'
import iconTrash from '@icons/trash.svg'
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>Rx number</th>
        <th>Filled date</th>
        <th>Copay</th>
        <th>
          <button class="btn" aria-label="add">
            <iconCross />
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#432233</td>
        <td>
          <div class="calendar">
            <iconCalendar />
            10/11/2023
          </div>
        </td>
        <td>$ 5.00</td>
        <td>
          <button class="btn del" aria-label="delete">
            <iconTrash />
          </button>
        </td>
      </tr>
      <tr>
        <td>#432233</td>
        <td>
          <div class="calendar">
            <iconCalendar />
            10/11/2023
          </div>
        </td>
        <td>$ 5.00</td>
        <td>
          <button class="btn del" aria-label="delete">
            <iconTrash />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="less" scoped>
@import '@style/common';
.table {
  width: 100%;
  overflow: hidden;
  font-family: @font-default;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  text-align: left;
  color: @color-gray-blue;
  background-color: @color-white;
  border-radius: 8px;
  border-collapse: collapse;
  th,
  tr:not(:last-child) td {
    border-bottom: 1px solid @color-gray-965;
  }
  th,
  td {
    padding: 7px 12px;
  }
  th:last-child,
  td:last-child {
    width: 46px;
  }
  th {
    font-weight: 700;
  }
}
.btn {
  .transition(background-color);
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  margin: 0;
  padding: 0;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  svg {
    width: 12px;
    height: 12px;
  }
  &:hover {
    background-color: @color-cornflower;
  }
  &.del {
    background-color: @color-periwinkle-crayola;
    svg {
      fill: @color-radical-red;
    }
    &:hover {
      background-color: rgb(@color-cornflower-blue 0.2);
    }
  }
}
.calendar {
  display: flex;
  align-items: center;
  gap: 6px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    fill: @color-cornflower-blue;
  }
}
</style>
