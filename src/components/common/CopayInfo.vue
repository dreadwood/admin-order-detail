<script setup lang="ts">
import iconsQuestions from '@icons/questions-circle.svg'

defineProps<{ value: string; isError?: boolean }>()
</script>

<template>
  <div
    class="wrp"
    :class="{
      error: isError
    }"
  >
    {{ value }}
    <div class="copay-label">
      Not paid
      <iconsQuestions v-if="isError" />
      <div class="tooltip" v-if="isError">
        <div class="tooltip-title">If patient not paying copay:</div>
        Do not deliver the medication and contact the pharmacy as soon as
        possible.
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-width: 185px;
  padding: 3px 3px 3px 8px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  color: @color-dark-pastel-green;
  background-color: @color-white;
  border-radius: 8px;
  .error {
    color: @color-radical-red;
    .copay-label {
      background-color: rgb(@color-radical-red 0.2);
    }
  }
}
.copay-label {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 24px;
  padding: 2px 8px;
  font-size: 14px;
  line-height: 17px;
  color: @color-signal-blue;
  text-transform: uppercase;
  background-color: rgb(@color-dark-pastel-green 0.2);
  border-radius: 6px;
  cursor: default;
  svg {
    display: block;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    fill: currentcolor;
  }
  &:hover {
    .tooltip {
      display: block;
    }
  }
}
.tooltip {
  position: absolute;
  top: (100% - 4px);
  left: 50%;
  display: none;
  width: 216px;
  padding: 11px 10px;
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  color: @color-signal-blue;
  text-transform: none;
  background-color: rgb(@color-white 0.94);
  border: 1px solid rgb(@color-cornflower-2 0.44);
  border-radius: 12px;
}
.tooltip-title {
  margin-bottom: 15px;
  font-weight: 600;
}
</style>
