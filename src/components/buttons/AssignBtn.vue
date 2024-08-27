<template>
  <div class="wrp">
    <button class="btn yellow">Assign to me</button>
    <button class="btn">Assign to</button>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: flex;
  align-items: center;
  gap: 4px;
}
.btn {
  .transition(background-color);
  display: block;
  width: max-content;
  margin: 0;
  padding: 7px 12px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: center;
  color: @color-white;
  text-decoration: none;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 30px;
  &[disabled] {
    opacity: 0.6;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    background-color: @color-cornflower;
    cursor: pointer;
  }
  &.yellow {
    background-color: @color-amber;
    &:not([disabled]):hover,
    &:not([disabled]):focus-visible {
      background-color: @color-melon-yellow;
      cursor: pointer;
    }
  }
}
</style>
