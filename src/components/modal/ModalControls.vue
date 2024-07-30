<script setup lang="ts">
import ActvBtn from '@buttons/ActvBtn.vue'

import iconPrint from '@icons/print.svg'
import iconTrash from '@icons/trash.svg'
</script>

<template>
  <div class="wrp">
    <button class="btn-print" aria-label="print">
      <iconPrint />
    </button>
    <button class="btn-delete">
      <iconTrash />
      Cancel the Order
    </button>
    <button class="btn-ticket">New Ticket</button>
    <div class="group">
      <ActvBtn text="Order Visible" isActv />
      <ActvBtn text="Allow IOU" />
      <ActvBtn text="Without Scanning" />
      <ActvBtn text="Priority Order" />
      <ActvBtn text="Allow AOB" />
      <ActvBtn text="Lock Geofence" isActv />
      <ActvBtn text="Lock Early Face2Face" isActv />
      <ActvBtn text="Lock Geofence Full" isActv />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: flex;
  align-items: center;
  column-gap: 4px;
  padding: 16px 0;
}
.btn-print {
  display: grid;
  place-items: center;
  width: 40px;
  height: 31px;
  margin: 0;
  padding: 0;
  background-color: @color-very-pale-blue-2;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  svg {
    display: block;
    width: 18px;
    height: 18px;
    fill: @color-signal-blue;
  }
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
  &.actv {
    color: @color-white;
    background-color: @color-cornflower-blue;
  }
}
.btn-delete {
  .transition(background-color);
  display: flex;
  align-items: center;
  column-gap: 4px;
  width: max-content;
  margin: 0;
  padding: 5px 16px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  color: @color-white;
  background-color: @color-radical-red;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    fill: currentcolor;
  }
  &:hover {
    background-color: @color-bright-red;
  }
}
.btn-ticket {
  .transition(background-color);
  display: block;
  width: max-content;
  margin: 0;
  padding: 5px 16px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  color: @color-signal-blue;
  background-color: @color-very-pale-blue-2;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
}
.group {
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-left: auto;
}
</style>
