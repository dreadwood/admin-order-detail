<template>
  <div class="label-day">Today</div>
</template>

<style lang="less" scoped>
@import '@style/common';
.label-day {
  position: absolute;
  top: -1px;
  left: 0;
  padding: 0 3px;
  font-family: @font-default;
  font-size: 10px;
  line-height: 13px;
  font-weight: 700;
  color: @color-white;
  text-transform: uppercase;
  background-color: @color-signal-blue;
  border-radius: 0 0 3px 3px;
}
</style>
