<script setup lang="ts">
import iconUsdCircle from '@icons/usd-circle.svg'
</script>

<template>
  <div class="wrp">
    <div class="label">
      <iconUsdCircle class="label-icon" />
      <div class="label-title">Finance info:</div>
      <div class="label-data">
        <b>Finance info:</b>
        Future Rate:
        <b>921.18</b>
        / Future Payout:
        <b>360.00</b>
        / Future Profit:
        <b>561.18</b>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}
.label {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  background-color: rgb(@color-cornflower-blue 0.2);
  border-radius: 30px;
  b {
    font-weight: 700;
    color: @color-signal-blue;
  }
}
.label-icon {
  width: 20px;
  height: 20px;
  fill: @color-cornflower-blue;
}
.label-title {
  margin-right: 13px;
  margin-left: 9px;
  font-weight: 700;
  color: @color-black;
}
.label-data {
  color: rgb(@color-signal-blue 0.75);
  b {
    font-weight: 700;
    color: @color-signal-blue;
  }
}
</style>
