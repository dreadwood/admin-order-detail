<template>
  <section class="map-info">
    <img class="map-img" src="/gigs-map.jpg" width="641" height="487" alt="" />
    <button class="map-btn left">Show pickups</button>
    <button class="map-btn right green">Optimize Gig</button>
  </section>
</template>

<style lang="less" scoped>
@import '@style/common';
.map-info {
  position: relative;
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: 20px;
}
.map-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.map-btn {
  .transition(background-color);
  display: block;
  width: max-content;
  margin: 0;
  padding: 6px 12px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  text-align: center;
  color: @color-white;
  background-color: rgb(@color-signal-blue 0.8);
  border: 0;
  border-radius: 30px;
  box-shadow: 8px 3px 22px 10px rgb(@color-gray-588 0.11);
  cursor: pointer;
  &:hover,
  &:focus-visible {
    background-color: @color-signal-blue;
  }
  &.green {
    background-color: @color-mountain-meadow;
    &:hover,
    &:focus-visible {
      background-color: @color-shamrock-crayola;
    }
  }
  &.left {
    position: absolute;
    bottom: 12px;
    left: 12px;
  }
  &.right {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
}
</style>
