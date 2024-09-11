<script setup lang="ts">
import imgLogoPlaceholder from '@assets/img/placeholder-vertical.jpg'
import SearchElement from '@components/common/form/SearchElement.vue'

defineProps<{ title: string }>()
</script>

<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
    <div class="content">
      <slot></slot>
    </div>
    <form class="account-page__search" role="search">
      <SearchElement class="search-element" />
    </form>
    <div class="logo">
      <img :src="imgLogoPlaceholder" width="40" height="40" alt="" />
    </div>
  </header>
</template>

<style lang="less" scoped>
@import '@style/common';
.header {
  display: flex;
  align-items: center;
  column-gap: 20px;
  min-height: 64px;
  padding: 10px 16px;
  border-bottom: 1px solid rgb(@color-cornflower-blue 0.2);
}
.title {
  margin: 0;
  font-size: 22px;
  line-height: 130%;
  font-weight: 700;
  color: @color-signal-blue;
  text-transform: uppercase;
}
.content {
  flex-grow: 1;
}
.search-element {
  width: 240px;
}
.logo {
  width: 40px;
  height: 40px;
  overflow: hidden;
  background-color: rgb(@color-blue-light 0.3);
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
