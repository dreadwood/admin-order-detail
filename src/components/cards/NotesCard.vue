<script setup lang="ts">
import ActvBtn from '../buttons/ActvBtn.vue'
import AddBtn from '../buttons/AddBtn.vue'
import EmptyBlock from '@common/EmptyBlock.vue'
import NoteItem from '@common/NoteItem.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'

defineProps<{ state: 1 | 2 }>()
</script>

<template>
  <div class="wrp card">
    <div class="top">
      <TitleBlock text="Notes" heading="h4" />
      <AddBtn text="Add" :type="2" />
    </div>

    <div class="filters">
      <ActvBtn text="All (4)" isActv :type="3" />
      <ActvBtn text="Internal notes (1)" :type="3" />
      <ActvBtn text="Alerts (2)" :type="3" />
      <ActvBtn text="Dispatch notes (1)" :type="3" />
    </div>

    <div v-if="state === 1" class="list">
      <EmptyBlock
        title="No Notes"
        text="As soon as the driver starts to fulfill the order, you can leave notes"
        isGray
      />
    </div>
    <div v-if="state === 2" class="list">
      <NoteItem
        msg="Very important internal notes"
        labelText="Internal notes"
        labelCSSClass="yellow"
      />
      <NoteItem
        msg="Very important alerts"
        labelText="Alert"
        labelCSSClass="red"
      />
      <NoteItem
        msg="Very important dispatch notes"
        labelText="Dispatch notes"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  position: relative;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  &::after {
    content: '';
    position: absolute;
    top: 47px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(@color-light-purple-blue 0.2);
  }
}
.filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
}
.list {
  .hide-scroll();
  height: 384px;
  margin-top: 12px;
  overflow: scroll;
  & > *:not(:first-child) {
    margin-top: 8px;
  }
}
</style>
