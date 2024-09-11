<script setup lang="ts">
import StatusSelectDropdown from '../form/StatusSelectDropdown.vue'
</script>

<template>
  <div class="status-card">
    <div class="top">
      <div class="status-select">
        Status:
        <StatusSelectDropdown :type="1" />
      </div>
      <div class="status-select">
        Sub Status:
        <StatusSelectDropdown :type="2" />
      </div>
    </div>

    <div>
      <div class="group">
        <div class="row">
          Gig ready to start:
          <div class="value">06/17/2024 01:56 PM</div>
        </div>
        <div class="row">
          Vendor started:
          <div class="value">06/17/2024 02:08 PM</div>
        </div>
        <div class="row">
          Started By:
          <div class="value">Oleksandra Bulbuk</div>
        </div>
      </div>

      <div class="group">
        <div class="row">
          Actual driving time:
          <div class="value">0 Hr 33 Min</div>
        </div>
        <div class="row">
          Approximate driving time:
          <div class="value">3 Hr 43 Min</div>
        </div>
        <div class="row">
          Driving time difference:
          <div class="value green">–3 Hr 21 Min</div>
        </div>
      </div>

      <div class="group">
        <div class="row">Last stop real ETA:</div>
        <div class="row">
          Service time:
          <div class="value">08:33M</div>
        </div>
        <div class="row">
          Total Stops per Hour:
          <div class="value">5.42</div>
        </div>
        <div class="row">
          Total distance:
          <div class="value">175.90 mi</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.status-card {
  padding: 12px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  text-align: left;
  color: rgb(@color-signal-blue 0.6);
  background-color: @color-periwinkle-crayola;
  border-radius: 20px;
}
.top {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.status-select {
  display: grid;
  gap: 5px;
  font-size: 14px;
  line-height: 17px;
  color: rgb(@color-signal-blue 0.6);
}
.group {
  padding: 30px 0;
  &:first-child {
    padding-top: 25px;
  }
  &:not(:first-child) {
    border-top: 1px solid rgb(@color-signal-blue 0.1);
  }
}
.row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  &:not(:first-child) {
    margin-top: 8px;
  }
}
.value {
  font-weight: 600;
  color: @color-signal-blue;
  &.green {
    color: @color-mountain-meadow;
  }
}
</style>
