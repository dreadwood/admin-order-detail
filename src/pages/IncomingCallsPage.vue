<script setup lang="ts">
import ModalOverlay from '@/components/modal/ModalOverlay.vue'
import IncomingCalls from '@/components/modal/IncomingCalls.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import CallCenterHeader from '@/components/header/CallCenterHeader.vue'
</script>

<template>
  <LayoutPage title="Call Center">
    <template v-slot:header>
      <CallCenterHeader />
    </template>
  </LayoutPage>

  <ModalOverlay>
    <IncomingCalls />
  </ModalOverlay>
</template>

<style lang="less" scoped>
@import '@style/common';
//
</style>
