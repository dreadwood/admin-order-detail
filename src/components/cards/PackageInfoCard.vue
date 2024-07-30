<script setup lang="ts">
import TitleBlock from '@/components/common/TitleBlock.vue'
</script>

<template>
  <div class="wrp card card-gray">
    <TitleBlock text="Package info" type="small" tag="h4" />

    <div>
      <div class="label"># Items</div>
      <input class="input-items" type="number" value="5" />
    </div>

    <div>
      <div class="label">Links to labels:</div>
      <div class="group">
        <button
          class="label-link"
          v-for="it in new Array(16).fill(0).map((_, i) => i + 1)"
          :key="it"
        >
          {{ it }}
        </button>
      </div>
    </div>

    <div class="label label-info green">
      Track Link Opened: <span>03/05/2024 10:23PM</span>
    </div>
    <div class="label label-info red">Confirmed: <span>No</span></div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: grid;
  gap: 10px;
}
.input-items {
  display: block;
  width: 46px;
  margin-top: 5px;
  padding: 3px 7px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 6px;
  outline: none;
  -moz-appearance: textfield;
  appearance: none;
  &::placeholder {
    font: inherit;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }
}
.group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px;
  margin-top: 5px;
}
.label-link {
  .transition(background-color);
  display: block;
  width: 22px;
  height: 22px;
  margin: 0;
  padding: 0;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: @color-white;
  text-decoration: none;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: @color-cornflower;
  }
}
.label-info {
  span {
    font-weight: 700;
    color: @color-signal-blue;
    // white-space: nowrap;
  }
  &.red {
    span {
      color: @color-radical-red;
    }
  }
  &.green {
    span {
      color: @color-lime-green;
    }
  }
}
</style>
