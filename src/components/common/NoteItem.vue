<script setup lang="ts">
defineProps<{
  msg: string
  labelText: string
  labelCSSClass?: 'yellow' | 'red'
}>()
</script>

<template>
  <div class="note">
    <div class="top">
      <div class="contact">
        <img class="photo" src="/person-2.png" width="42" height="42" alt="" />
        <div>
          <div class="name">Elizabeth Anderson</div>
          <div class="date">today at 10:27 AM</div>
        </div>
      </div>

      <div class="note-label" :class="labelCSSClass">Internal notes</div>
    </div>

    <div class="msg">{{ msg }}</div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.note {
  padding: 12px 12px 15px 12px;
  background-color: @color-gray-965;
  border-radius: 13px;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}
.contact {
  display: flex;
  align-items: center;
  gap: 8px;
}
.photo {
  display: block;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
}
.name {
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
}
.date {
  font-size: 13px;
  line-height: 16px;
  opacity: 0.5;
}
.note-label {
  position: relative;
  top: -4px;
  right: -4px;
  width: max-content;
  padding: 3px 10px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: @color-blue-degrees;
  background-color: rgb(@color-blue-degrees 0.1);
  border-radius: 30px;
  &.yellow {
    color: @color-melon-yellow;
    background-color: rgb(@color-amber 0.15);
  }
  &.red {
    color: @color-radical-red;
    background-color: rgb(@color-radical-red 0.2);
  }
}
.msg {
  margin-top: 4px;
  font-size: 14px;
  line-height: 17px;
  color: @color-signal-blue;
}
</style>
