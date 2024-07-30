<script setup lang="ts">
import { ref } from 'vue'

import CountLabel from '@labels/CountLabel.vue'
import AddBtn from '@buttons/AddBtn.vue'
import ActvBtn from '@buttons/ActvBtn.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'
import TextDropdown from '@form/TextDropdown.vue'
import MessageField from '@form/MessageField.vue'

const props = defineProps<{ isShow?: boolean }>()

const isShow = ref<boolean>(props.isShow || true)

const btnHandle = () => {
  isShow.value = !isShow.value
}

const otherValues = ['Item 2', 'Item 3', 'Item 4']
</script>

<template>
  <div class="card">
    <div class="card-top">
      <TitleBlock text="Tickets" type="big" />
      <CountLabel :count="3" />
      <div class="card-contols">
        <AddBtn text="Add new ticket" @click="btnHandle()" />
      </div>
    </div>

    <div v-if="isShow">
      <div class="filter-block">
        <ActvBtn text="#123456" :type="3" isActv />
        <ActvBtn text="#123456" :type="3" />
        <ActvBtn text="#123456" :type="3" />
      </div>
      <div class="content-block">
        <div class="content-top">
          <div class="content-label-status">In Progress</div>
          <div class="content-label-time">Created: <b>1h, 2m, 53s</b> ago</div>
        </div>

        <div class="content-info">
          Order ID: 19238518 Driver: Oleksandra Bulbuk Dispatcher: Dan/Smth
          Pharmacy: eScript360 Pharmacy Status: Delivery Attempted Not Present:
          10:16 AM (40m, 49s) Moderated at: 10:17 AM (40m, 4s) [X] - Was a
          Dispatch note validated after the delivery attempt?
        </div>

        <form class="form-block">
          <div class="form-list">
            <div>
              <div class="label">Status</div>
              <TextDropdown
                :values="['In Progress', ...otherValues]"
                :type="2"
              />
            </div>
            <div>
              <div class="label">Priority</div>
              <TextDropdown :values="['Normal', ...otherValues]" :type="2" />
            </div>
            <div>
              <div class="label">Type</div>
              <TextDropdown :values="['Other', ...otherValues]" :type="2" />
            </div>
            <div>
              <div class="label">Assign to</div>
              <TextDropdown :values="['Assign to', ...otherValues]" :type="2" />
            </div>
            <div>
              <div class="label">Managed by</div>
              <TextDropdown
                :values="['Jacob Murphy', ...otherValues]"
                :type="2"
              />
            </div>
            <div>
              <div class="label">Exparation minute</div>
              <TextDropdown :values="['35', ...otherValues]" :type="2" />
            </div>
          </div>

          <div class="form-field">
            <MessageField placeholder="Enter note" />
          </div>
        </form>

        <div class="note-block">
          <TitleBlock text="Notes:" type="small" tag="p" />
          <div class="note-list">
            <div class="note-item" v-for="it in [1, 2]" :key="it">
              <img
                class="note-img"
                src="/person-3.png"
                width="55"
                height="55"
                alt=""
              />
              <div class="note-content">
                <div class="note-name">Jacob Murphy</div>
                <div class="note-text">Confirmed rescheduling to tomorrow</div>
              </div>
              <div class="note-date">02/19/2024 12:11 pm (2 day(s) ago)</div>
            </div>
          </div>
        </div>

        <button class="btn-save" type="button">Save</button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.filter-block {
  display: flex;
  align-items: center;
  gap: 8px;
}
.content-block {
  margin-top: 12px;
  padding: 12px;
  background-color: @color-gray-965;
  border-radius: 22px;
}
.content-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-label-status {
  width: max-content;
  padding: 4px 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: @color-white;
  background-color: @color-amber;
  border-radius: 30px;
}
.content-label-time {
  width: max-content;
  padding: 4px 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: @color-signal-blue;
  background-color: @color-white;
  border-radius: 30px;
}
.content-info {
  margin-top: 12px;
  padding: 12px;
  font-size: 16px;
  line-height: 19px;
  background-color: rgb(@color-cornflower-blue 0.2);
  border-radius: 16px;
}
.form-block {
  margin-top: 12px;
}
.form-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 8px;
  & > * {
    flex-grow: 1;
  }
  .label {
    margin-bottom: 4px;
  }
}
.form-field {
  margin-top: 12px;
}
.note-block {
  margin-top: 12px;
}
.note-list {
  margin-top: 12px;
  & > *:not(:first-child) {
    margin-top: 12px;
  }
}
.note-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  font-size: 16px;
  line-height: 19px;
  background-color: @color-white;
  border-radius: 22px;
}
.note-img {
  flex-shrink: 0;
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 50%;
}
.note-content {
  padding-top: 3px;
}
.note-name {
  font-weight: 700;
}
.note-text {
  margin-top: 10px;
}
.note-date {
  flex-shrink: 0;
  margin-left: auto;
  padding-top: 3px;
  color: rgb(@color-signal-blue 0.6);
}
.btn-save {
  .transition(background-color);
  display: block;
  width: max-content;
  margin: 0;
  margin-top: 12px;
  padding: 9px 40px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  font-weight: 700;
  text-align: center;
  color: @color-white;
  text-transform: none;
  background-color: @color-cornflower-blue;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: @color-cornflower;
  }
}
</style>
