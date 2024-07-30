<script setup lang="ts">
import ActvBtn from '../buttons/ActvBtn.vue'
import EmptyBlock from '@common/EmptyBlock.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'

import iconIn from '@assets/icons/sms-in.svg'
import iconOut from '@assets/icons/sms-out.svg'
import MessageField from '../form/MessageField.vue'

defineProps<{ state: 1 | 2 }>()

const quickReply = [
  'Thank you for positive feedback',
  'Delivery confirmed',
  'Apology',
  'Thank you',
  'How may we assist you?',
  'Face-to-face delivery',
  'Contact with date of reschedule',
  'You are very welcome',
  'Delivery Confirmation',
  'Delay in delivery',
  'Pharmacy number'
]
const messages = [
  {
    id: 1,
    type: 'out',
    name: 'Rx2Go',
    date: 'today at 10:27 AM',
    img: '/logo-rx2go.png',
    text: 'Good morning Elon Musk!<br />Your prescription from "Your Pharmacy Name" via Rx2Go is out for delivery, with an estimated arrival today between 8am-11am.<br />Please ensure an adult is present to sign for the delivery. Track/Manage your delivery here: <a style="color: #4aa3ef;" href="#">https://track.rx2go.ai/?thjdgsgk-yjsrh.</a>'
  },
  {
    id: 2,
    type: 'in',
    name: 'Elon Musk',
    date: 'today at 10:27 AM',
    info: '3hr(s) ago',
    img: '/userpic.png',
    text: 'Thank you!'
  },
  {
    id: 3,
    type: 'out',
    name: 'Elizabeth Anderson',
    date: 'today at 10:27 AM',
    info: '3hr(s) ago',
    img: '/person-2.png',
    text: 'Your package was successfully delivered to "Your Pharmacy Name". Tkank you for using Rx2Go. We love your your feedback and take it seriously.'
  }
]
</script>

<template>
  <div class="wrp card card-gray">
    <div class="top-block">
      <TitleBlock text="SMS" heading="h4" />
      <div class="note-block">
        <div class="note-item">3</div>
        <button class="note-item">
          1
          <iconIn />
        </button>
        <button class="note-item">
          2
          <iconOut />
        </button>
      </div>

      <div class="link-block">
        <a class="link-item" href="#">Tracking link</a>
        <a class="link-item" href="#">Signature link</a>
      </div>
    </div>

    <div class="filters-block">
      <ActvBtn text="+19296844974" isActv :type="4" />
      <ActvBtn text="+19296844974" :type="4" />
    </div>

    <div v-if="state === 1" class="content-block">
      <EmptyBlock
        title="No messages yet"
        text="As soon as the driver starts to fulfill the order, you will see messages"
      />
    </div>

    <div v-if="state === 2" class="content-block">
      <div class="msg-block">
        <div
          class="msg"
          :class="{
            'msg-in': it.type === 'in'
          }"
          v-for="it in messages"
          v-bind:key="it.id"
        >
          <div class="msg-top">
            <img class="msg-img" :src="it.img" alt="" />
            <div>
              <div class="msg-name">{{ it.name }}</div>
              <div class="msg-date">
                {{ it.date }}
                <span class="msg-info" v-if="it.info">{{ it.info }}</span>
              </div>
            </div>
          </div>
          <div class="msg-text" v-html="it.text"></div>
        </div>
      </div>

      <div class="input-block">
        <MessageField placeholder="Type and press enter..." />
      </div>

      <div class="reply-block">
        <div class="reply-title">Quick reply:</div>
        <div class="reply-list">
          <buttton class="btn-reply" v-for="it in quickReply" v-bind:key="it">
            {{ it }}
          </buttton>
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
.link-block {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}
.link-item {
  .transition(background-color);
  display: block;
  width: max-content;
  padding: 3px 14px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: @color-white;
  text-decoration: none;
  background-color: @color-cornflower-blue;
  border-radius: 30px;
  &:hover {
    background-color: @color-cornflower;
  }
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
.msg-block {
  .hide-scroll();
  height: 270px;
  padding: 10px;
  overflow: scroll;
  background-color: @color-white;
  border-radius: 8px;
  &:not(:first-child) {
    margin-top: 6px;
  }
}
.msg {
  width: max-content;
  max-width: 336px;
  margin-left: auto;
  padding: 8px;
  background-color: @color-periwinkle-crayola;
  border-radius: 13px;
  &.msg-in {
    margin-right: auto;
    margin-left: 0;
    color: @color-white;
    background-color: @color-cornflower-blue;
    .msg-name {
      color: @color-white;
    }
    .msg-date {
      color: rgb(@color-white 0.5);
    }
    .msg-info {
      color: rgb(@color-white 0.5);
    }
  }
}
.msg-top {
  display: flex;
  align-items: center;
  gap: 8px;
}
.msg-img {
  display: block;
  width: 41px;
  height: 41px;
  object-fit: cover;
  border-radius: 50%;
}
.msg-name {
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
  color: @color-gray-blue;
}
.msg-date {
  font-size: 13px;
  line-height: 16px;
  color: rgb(@color-gray-blue 0.5);
}
.msg-info {
  font-weight: 700;
  color: @color-cornflower-blue;
}
.msg-text {
  margin-top: 4px;
  font-size: 14px;
  line-height: 17px;
}
.input-block {
  margin-top: 10px;
}
.reply-block {
  margin-top: 10px;
}
.reply-title {
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;
}
.reply-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
}
.btn-reply {
  .transition(background-color);
  display: block;
  width: max-content;
  margin: 0;
  padding: 5px 11px;
  font-family: @font-default;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-white;
  border: 1px solid rgb(@color-signal-blue 0.15);
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
}
</style>
