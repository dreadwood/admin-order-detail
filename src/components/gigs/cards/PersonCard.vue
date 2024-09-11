<script setup lang="ts">
import iconStar from '@icons/star-yellow-2.svg'
import iconPhone from '@icons/call-phone.svg'
import iconContactPhone from '@icons/call-phone-3.svg'
import iconContactTelegram from '@icons/icon-telegram.svg'
import iconCopy from '@icons/copy-3.svg'
</script>

<template>
  <div class="person">
    <div class="person-photo">
      <img src="/vendor-userpic.jpg" width="55" height="55" alt="" />
      <div class="person-raiting">
        <iconStar />
        4.8
      </div>
    </div>

    <div class="person-info">
      <div class="person-name">Oleksandra Bulbuk</div>
      <button class="person-tel">
        <iconPhone class="icon-phone" />
        +15512841920
        <iconCopy class="icon-copy" />
      </button>
      <div class="person-hired">Hired: 87d</div>
      <div class="person-action">
        Last action:
        <span class="date">06/17 02:41 PM</span>{{}}
        <span class="time">(1h 45 min)</span>
      </div>
    </div>

    <div class="person-contact">
      <a class="person-link phone" href="tel:+15512841920">
        <iconContactPhone />
      </a>
      <a class="person-link telegram" href="tel:+15512841920">
        <iconContactTelegram />
      </a>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.person {
  display: flex;
  align-items: flex-start;
  padding: 12px;
  background-color: @color-white;
  border-radius: 16px;
}
.person-photo {
  position: relative;
  flex-shrink: 0;
  width: max-content;
  padding-bottom: 4px;
  img {
    display: block;
    width: 55px;
    height: 55px;
    overflow: hidden;
    object-fit: cover;
    border: 2px solid @color-cobalt-blue;
    border-radius: 50%;
  }
}
.person-raiting {
  .text-nowrap();
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px 4px;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  color: @color-white;
  background-color: @color-lime-green-2;
  border-radius: 9px;
  transform: translateX(-50%);
  svg {
    flex-shrink: 0;
    width: 12px;
    height: 12px;
  }
}
.person-info {
  margin-right: 8px;
  margin-left: 12px;
}
.person-name {
  font-weight: 500;
}
.person-tel {
  .transition(color);
  display: flex;
  align-items: center;
  gap: 2px;
  width: max-content;
  margin: 0;
  margin-top: 4px;
  padding: 0;
  color: @color-cornflower-blue;
  text-decoration: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  svg {
    display: block;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    fill: currentcolor;
  }
  &:hover,
  &:focus-visible {
    color: @color-cornflower;
  }
}
.person-hired {
  margin-top: 4px;
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  color: rgb(@color-signal-blue 0.6);
}
.person-action {
  margin-top: 7px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  color: rgb(@color-signal-blue 0.6);
  .date {
    .text-nowrap;
    font-weight: 700;
    color: @color-signal-blue;
  }
  .time {
    .text-nowrap;
    font-weight: 700;
    color: @color-radical-red;
  }
}
.person-contact {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 4px;
  margin-left: auto;
}
.person-link {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  cursor: pointer;
  svg {
    display: block;
    width: 17px;
    height: 17px;
    fill: @color-white;
  }
  &.phone {
    background-color: @color-mountain-meadow;
    &:hover,
    &:focus-visible {
      background-color: @color-mountain-meadow-2;
    }
  }
  &.telegram {
    padding-right: 2px;
    background: linear-gradient(180deg, #2aabee 0%, #229ed9 99.21%);
    &:hover,
    &:focus-visible {
      background: linear-gradient(180deg, #20a1e4 0%, #0480bb 99.21%);
    }
  }
}
</style>
