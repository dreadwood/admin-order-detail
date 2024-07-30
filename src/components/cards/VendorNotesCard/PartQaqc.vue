<script setup lang="ts">
import TitleBlock from '@/components/common/TitleBlock.vue'

import iconDone from '@assets/icons/done.svg'
import iconWrong from '@assets/icons/wrong.svg'

const listData = [
  { text: 'Is the <b>Promised time interval</b> confirmed?', icon: 'wrong' },
  { text: 'Was a <b>Phone call</b> made before the delivery?', icon: 'wrong' },
  { text: 'Is the required <b>Delivery date</b> confirmed?', icon: 'done' },
  { text: 'Does the photo of the <b>Package</b> look real?', icon: 'done' },
  { text: 'Does the photo of the <b>Building</b> look real?', icon: 'done' },
  { text: 'Does the photo of the <b>Apartment</b> look real?', icon: 'done' },
  { text: 'Does the <b>Signature</b> look genuine?', icon: 'done' },
  { text: 'Does the <b>Delivery method</b> look correct?', icon: 'done' },
  { text: "Does the <b>Recipient's name</b> look correct?", icon: 'wrong' }
]
</script>

<template>
  <div class="wrp">
    <div>
      <TitleBlock text="QAQC" type="small" tag="h4" />
      <div class="list">
        <div
          class="item"
          v-for="it in listData"
          :key="it.text"
          :class="{
            wrong: it.icon === 'wrong'
          }"
        >
          <iconDone v-if="it.icon === 'done'" />
          <iconWrong v-if="it.icon === 'wrong'" />
          <span v-html="it.text"></span>
        </div>
      </div>
    </div>

    <div class="moderator-block">
      <div class="moderator-card">
        <img
          class="moderator-img"
          src="/person-3.png"
          width="44"
          height="44"
          alt=""
        />
        <div class="moderator-row">
          <div class="moderator-label">Moderator:</div>
          Noah Lewis
        </div>
        <div class="moderator-row">
          <div class="moderator-label">Date:</div>
          2024-02-19 12:57:53
        </div>
      </div>

      <button class="btn-moderator" type="button">Remoderate</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}
.list {
  margin-top: 12px;
  & > *:not(:first-child) {
    margin-top: 10px;
  }
}
.item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 17px;
  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }
  &.wrong {
    color: @color-radical-red;
  }
}
.moderator-block {
  flex-shrink: 0;
  width: 172px;
}
.moderator-card {
  padding: 12px;
  font-size: 14px;
  line-height: 17px;
  background-color: @color-periwinkle-crayola;
  border-radius: 20px;
}
.moderator-img {
  display: block;
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 50%;
}
.moderator-row {
  margin-top: 10px;
}
.moderator-label {
  margin-bottom: 2px;
  opacity: 0.4;
}
.btn-moderator {
  .transition(background-color);
  display: block;
  width: 100%;
  margin: 0;
  margin-top: 10px;
  padding: 8px 15px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  text-align: center;
  color: @color-signal-blue;
  text-transform: uppercase;
  background-color: @color-gray-925;
  border: 0;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
}
</style>
