<script setup lang="ts">
import ModalHeader from '@modal/ModalHeader.vue'
import ModalControls from '@modal/ModalControls.vue'
import DeliveryDetailsCard from '@cards/DeliveryDetailsCard.vue'
import VendorNotesCard from '@cards/VendorNotesCard/CardIndex.vue'
import StatusHistoryCard from '@cards/StatusHistoryCard.vue'
import TicketsCard from '@cards/TicketsCard.vue'
import DocumentsCard from '@cards/DocumentsCard.vue'
import ActivityHistoryCard from '@cards/ActivityHistoryCard.vue'
import InstructionsCard from '@cards/InstructionsCard.vue'
import NotesCard from '@cards/NotesCard.vue'
import CommunicationCard from '@cards/CommunicationCard.vue'
import BatchOrdersCard from '@cards/BatchOrdersCard.vue'
</script>

<template>
  <div class="modal">
    <ModalHeader />
    <div class="content">
      <ModalControls />
      <div class="cols">
        <div class="left">
          <DeliveryDetailsCard />
          <div class="row">
            <NotesCard :state="2" />
            <InstructionsCard />
          </div>
          <CommunicationCard />
          <TicketsCard />
          <DocumentsCard />
          <ActivityHistoryCard />
        </div>

        <div class="right">
          <VendorNotesCard />
          <StatusHistoryCard />
          <BatchOrdersCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.modal {
  width: 1728px; // TODO: remove?
  font-family: @font-default;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: @color-signal-blue;
  word-break: break-word;
  background-color: @color-gray-965;
  border-radius: 30px;
}
.content {
  padding: 0 20px 20px 20px;
}
.cols {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.left {
  display: grid;
  gap: 10px;
}
.row {
  display: flex;
  gap: 10px;
  & > *:first-child {
    flex-shrink: 0;
    width: 485px;
  }
  & > * {
    flex-grow: 1;
  }
}
.right {
  display: grid;
  flex-shrink: 0;
  gap: 10px;
  width: 604px;
}
</style>
