<script setup lang="ts">
import ModalOverlay from '@components/modal/ModalOverlay.vue'
import SetCall from '@/components/modal/SetCall.vue'
import ToastNotification from '@/components/common/ToastNotification.vue'
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
    <SetCall />
    <ToastNotification
      text="You won't be able to close the window until you leave the call notes"
    />
  </ModalOverlay>
</template>

<style lang="less" scoped>
@import '@style/common';
//
</style>
