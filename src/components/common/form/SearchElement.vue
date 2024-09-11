<script setup lang="ts">
import iconMagnifier from '@icons/magnifier.svg'

defineProps<{ isSmall?: boolean }>()
</script>

<template>
  <div class="search">
    <input
      class="search-input"
      :class="{ small: isSmall }"
      type="search"
      placeholder="Search..."
    />
    <iconMagnifier class="icon" />
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.search {
  position: relative;
}
.search-input {
  display: block;
  width: 100%;
  padding: 8px 40px 8px 11px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 18px;
  color: @color-grey-umber;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue;
  border-radius: 30px;
  &::placeholder {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: @color-grayish-blue;
  }
  &::-webkit-search-cancel-button {
    display: none;
  }
  // for hidden key icon in safari
  &::-webkit-credentials-auto-fill-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
  }
  &.small {
    padding: 5px 40px 5px 11px;
    border-color: @color-very-pale-blue-3;
    border-radius: 20px;
  }
}
.icon {
  position: absolute;
  top: 50%;
  right: 12px;
  display: block;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  fill: @color-very-pale-blue-3;
}
</style>
