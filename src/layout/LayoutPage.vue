<script setup lang="ts">
import HeaderLayout from '@/components/header/HeaderLayout.vue'
import imgLogoRx2go from '@assets/img/logo-rx2go.svg?url'

defineProps<{ title: string }>()
</script>

<template>
  <section class="page">
    <div class="left">
      <a class="logo" href="#">
        <img :src="imgLogoRx2go" width="97" height="25" alt="" />
      </a>
    </div>
    <div class="right">
      <HeaderLayout :title="title">
        <slot name="header"></slot>
      </HeaderLayout>
      <slot name="content"></slot>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '@style/common';
.page {
  display: flex;
  width: 100%;
  height: 100%;
  max-width: @container-max;
  min-width: 1660px;
  margin: 0 auto;
  background-color: @color-white;
}
.left {
  flex-shrink: 0;
  width: 132px;
  padding-top: 19px;
  border-right: 1px solid rgb(@color-cornflower-blue 0.2);
}
.logo {
  display: block;
  width: max-content;
  width: 97px;
  height: 25px;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
  }
}
.right {
  width: 100%;
  font-family: @font-default;
}
</style>
