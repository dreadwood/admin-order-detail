<script setup lang="ts">
withDefaults(defineProps<{ date?: string; timeAgo?: string }>(), {
  date: '02/19/2024 09:16:30 PM',
  timeAgo: '1 min (s) ago'
})
</script>

<template>
  <div class="datetime">
    {{ date }}
    <div class="time-ago">{{ timeAgo }}</div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.datetime {
  font-family: @font-default;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  text-align: left;
  color: @color-gray-blue;
}
.time-ago {
  margin-top: 4px;
  color: rgb(@color-gray-blue 0.6);
}
</style>
