<script setup lang="ts">
import ModalOverlay from './components/modal/ModalOverlay.vue'
import ModalOrderDetails from './components/modal/ModalOrderDetails.vue'
import ClientInfo from './components/cards/ClientInfoCard.vue'
import PackageInfo from './components/cards/PackageInfoCard.vue'
</script>

<template>
  <ModalOverlay>
    <ModalOrderDetails>
      <ClientInfo />
      <PackageInfo />
    </ModalOrderDetails>
  </ModalOverlay>
</template>

<style lang="less" scoped>
//
</style>
