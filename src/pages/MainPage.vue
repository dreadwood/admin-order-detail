<script setup lang="ts">
import {
  routesCallCenter,
  // routesGigs,
  routesOrderDetail
} from '@/router'
</script>

<template>
  <div class="container">
    <h1>Rx2Go</h1>

    <h2>Order Detail</h2>
    <ul>
      <li v-for="it in routesOrderDetail" :key="it.path">
        <RouterLink :to="it.path">Go to {{ it.name }}</RouterLink>
      </li>
    </ul>

    <!-- <h2>Gigs</h2>
    <ul>
      <li v-for="it in routesGigs" :key="it.path">
        <RouterLink :to="it.path">Go to {{ it.name }}</RouterLink>
      </li>
    </ul> -->

    <h2>Call Center</h2>
    <ul>
      <li v-for="it in routesCallCenter" :key="it.path">
        <RouterLink :to="it.path">Go to {{ it.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.container {
  --color-main: #4682b4;
  --color-bg: #ffffff;
  --color-title: #162854;
  --color-text: #4d5156;
  padding: 20px 40px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  color: var(--color-text);
  background-color: var(--color-bg);
}
h1 {
  font-size: 22px;
  line-height: 29px;
  font-weight: 700;
  color: var(--color-main);
  text-transform: uppercase;
}
h2 {
  margin: 0;
  margin-top: 20px;
  font-size: 20px;
  line-height: 26px;
  color: var(--color-title);
}
ul,
ol {
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 20px;
}
li {
  margin-bottom: 10px;
}
a {
  color: inherit;
  text-decoration: none;
  &:visited {
    color: var(--color-text);
  }
  &:hover,
  &:focus-visible {
    color: var(--color-main);
    span {
      color: gray;
    }
  }
}
</style>
