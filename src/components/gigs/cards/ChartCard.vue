<script setup lang="ts">
//
</script>

<template>
  <div class="chart-card">
    <div class="card-title">ETA error over time</div>
    <div class="card-content">
      <img
        class="card-mock"
        src="/gigs-chart-mock.png"
        width="1450"
        height="424"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.chart-card {
  padding: 11px;
  font-family: @font-default;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 20px;
}
.card-title {
  flex-shrink: 0;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: @color-signal-blue;
}
.card-content {
  margin-top: 18px;
}
.card-mock {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
