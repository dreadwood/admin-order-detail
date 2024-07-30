<script setup lang="ts">
import ExpandBtn from '@buttons/ExpandBtn.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'
</script>

<template>
  <div class="card">
    <div class="card-top">
      <TitleBlock text="Batch orders. (Parent order #23232622)" type="small" />
      <div class="card-contols">
        <ExpandBtn />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
</style>
