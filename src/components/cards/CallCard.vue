<script setup lang="ts">
import { ref } from 'vue'

import ActvBtn from '@buttons/ActvBtn.vue'
import EmptyBlock from '@common/EmptyBlock.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'

import iconPhoneEl from '@assets/icons/call-phone.svg'
import iconPlay from '@assets/icons/player-play.svg'
import iconPause from '@assets/icons/player-pause.svg'
import iconPhone from '@assets/icons/call-phone.svg?raw'
import iconCross from '@assets/icons/call-cross.svg?raw'
import iconUser from '@assets/icons/call-user.svg?raw'

defineProps<{ state: 1 | 2 }>()

const isPlayActv = ref<boolean>(false)

const playHandle = () => {
  isPlayActv.value = !isPlayActv.value
}
</script>

<template>
  <div class="wrp card card-gray">
    <div class="top-block">
      <TitleBlock text="Call Notes" heading="h4" />

      <div class="top-filter-block">
        <ActvBtn text="Patient (0)" isActv :type="5" />
        <ActvBtn text="Pharmacy (0)" :type="5" />
        <ActvBtn text="Auto Calls (0)" :type="5" />
      </div>
    </div>

    <div class="filters-block">
      <ActvBtn text="All" isActv :type="5" />
      <ActvBtn text="Patient (0)" :icon="iconUser" :type="5" />
      <ActvBtn text="Pharmacy (0)" :icon="iconCross" :type="5" />
      <ActvBtn text="Auto Calls (1)" :icon="iconPhone" :type="5" />
    </div>

    <div v-if="state === 1" class="content-block">
      <EmptyBlock
        title="No Call Notes"
        text="As soon as the driver starts to fulfill the order, you will see calls"
      />
    </div>

    <div v-if="state === 2" class="content-block">
      <div class="note">
        <div class="note-top">
          <div class="contact">
            <img
              class="contact-img"
              src="/person-2.png"
              width="41"
              height="41"
              alt=""
            />
            <div>
              <div class="contact-name">Elizabeth Anderson</div>
              <div class="contact-date">
                today at 10:27 AM
                <span class="contact-info">3hr(s) ago</span>
              </div>
            </div>
          </div>
          <a class="note-phone" href="#">
            <iconPhoneEl />
            +19296844974
          </a>
        </div>
        <div class="note-text">
          Answered - Recipient Informed about ETA and Address Confirmed
        </div>
        <div class="player">
          <button class="player-control" @click="playHandle()">
            <iconPlay v-if="!isPlayActv" />
            <iconPause v-if="isPlayActv" />
          </button>
          <div class="player-timeline">
            <img class="player-mock" src="/timeline.png" alt="" />
          </div>
          <div class="player-time">0:10</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  position: relative;
}
.top-block {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  &::after {
    content: '';
    position: absolute;
    top: 47px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(@color-light-purple-blue 0.2);
  }
}
.note-block {
  display: flex;
  align-items: center;
  gap: 4px;
}
.note-item {
  .transition(background-color);
  display: flex;
  align-items: center;
  gap: 3px;
  width: max-content;
  margin: 0;
  padding: 3px 8px;
  font-family: @font-default;
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
  color: @color-signal-blue;
  background-color: @color-white;
  border: 0;
  border-radius: 15px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 12px;
    height: 12px;
  }
  &:not(div):hover {
    background-color: rgb(@color-cornflower-blue 0.2);
    cursor: pointer;
  }
}
.top-filter-block {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}
.filters-block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}
.content-block {
  margin-top: 8px;
}
.note {
  padding: 12px;
  background-color: @color-white;
  border-radius: 13px;
}
.note-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}
.contact {
  display: flex;
  align-items: center;
  gap: 8px;
}
.contact-img {
  display: block;
  width: 41px;
  height: 41px;
  object-fit: cover;
  border-radius: 50%;
}
.contact-name {
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
  color: @color-gray-blue;
}
.contact-date {
  font-size: 13px;
  line-height: 16px;
  color: rgb(@color-gray-blue 0.5);
}
.contact-info {
  font-weight: 700;
  color: @color-cornflower-blue;
}
.note-phone {
  .transition(background-color);
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin: 0;
  padding: 4px 12px;
  font-size: 16px;
  line-height: 20px;
  color: @color-signal-blue;
  text-decoration: none;
  background-color: @color-gray-965;
  border: 0;
  border-radius: 30px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    fill: currentcolor;
  }
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
}
.note-text {
  margin-top: 8px;
}
.player {
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 3px 8px;
  background-color: @color-periwinkle-crayola;
  border-radius: 8px;
}
.player-control {
  .transition(background-color);
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 30px;
  height: 30px;
  margin: 0;
  margin-right: 5px;
  color: @color-white;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  svg {
    display: block;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    fill: currentcolor;
  }
  &:hover {
    background-color: @color-cornflower;
  }
}
.player-timeline {
  height: 43px;
}
.player-mock {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.player-time {
  flex-shrink: 0;
  margin-left: 17px;
  font-size: 10px;
  line-height: 12px;
  color: rgb(@color-signal-blue 0.5);
}
</style>
