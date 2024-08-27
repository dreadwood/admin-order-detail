<script setup lang="ts">
import CopyBtn from '@components/buttons/CopyBtn.vue'
import FavStarBtn from '@components/buttons/FavStarBtn.vue'
import iconClock from '@icons/order-clock.svg'
import iconCross from '@icons/cross.svg'
import iconUserCard from '@icons/user-card.svg'
import iconSnowflake from '@icons/snowflake.svg'
import ActvBtn from '@buttons/ActvBtn.vue'

const callType = [
  'Confirmed rescheduling',
  'Confirmed sending it back to pharmacy',
  'Asked to hold on',
  'Confirm or update the address',
  'Receive a complain',
  'Asked to callback',
  'Other'
]
</script>

<template>
  <div class="modal">
    <h2 class="title">Set Call Note</h2>

    <div class="header">
      <div class="name">Manhattan apothecary</div>

      <div class="info">
        #19245347
        <FavStarBtn :width="22" :height="22" />
        <div class="info-label purple">
          <iconUserCard />
        </div>
        <div class="info-label lightpurple">
          <iconClock />
        </div>

        <div class="info-time">
          <iconSnowflake />
          23:22
        </div>
        <CopyBtn :icon="2" color="darkblue" :width="22" :height="22" />
      </div>
    </div>

    <div class="cards">
      <div class="cards-item">
        <div class="cards-rows">
          <div>
            <div class="card-title">Call Result:</div>
            <div class="card-list">
              <ActvBtn text="Answered" className="green" :type="7" />
              <ActvBtn text="Not Answered" isActv className="red" :type="7" />
            </div>
          </div>

          <div>
            <div class="card-title">Left voicemail::</div>
            <div class="card-list">
              <ActvBtn text="Yes" className="green" :type="7" />
              <ActvBtn text="No" isActv className="red" :type="7" />
            </div>
          </div>
        </div>
      </div>

      <div class="cards-item">
        <div class="card-title">Answer:</div>
        <div class="card-list">
          <ActvBtn text="Patient" :type="7" />
          <ActvBtn text="Pharmacy" :type="7" />
          <ActvBtn text="Driver" isActv :type="7" />
        </div>
      </div>
      <div class="cards-item">
        <div class="card-title">Scheduled next call attempt:</div>
        <div class="cards-field">
          <input type="text" value="8 min" />
          <button aria-label="clear">
            <iconCross />
          </button>
        </div>
      </div>
    </div>

    <div class="type-block">
      <div class="type-title">Call Type:</div>
      <div class="type-list">
        <ActvBtn
          v-for="(it, i) in callType"
          :isActv="i === 1"
          :text="it"
          :type="6"
          :key="it"
        />
      </div>
    </div>

    <div class="note-block">
      <textarea
        class="textarea"
        name="note"
        placeholder="Type Note Text"
      ></textarea>
    </div>

    <button class="btn-submin" disabled type="button">Save</button>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.modal {
  flex-shrink: 0;
  width: 852px;
  padding: 20px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: @color-signal-blue;
  word-break: break-word;
  background-color: @color-white;
  border-radius: 30px;
}
.title {
  margin: 0;
  font-size: 18px;
  line-height: 23px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
}
.name {
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
  text-transform: uppercase;
}
.info {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 36px;
  padding: 7px 22px 7px 12px;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  color: @color-signal-blue;
  background-color: rgb(@color-cornflower-blue 0.2);
  border-radius: 30px;
}
.info-label {
  svg {
    display: block;
    width: 22px;
    height: 22px;
    fill: currentcolor;
  }
  &.purple {
    color: @color-moderate-slate-blue;
  }
  &.lightpurple {
    color: @color-bright-lilac;
  }
}
.info-time {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 8px 0 7px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: @color-white;
  border-radius: 30px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 22px;
    height: 22px;
  }
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  gap: 12px;
  margin-top: 16px;
}
.cards-item {
  padding: 12px;
  color: rgb(@color-signal-blue 0.6);
  background-color: @color-periwinkle-crayola-2;
  border-radius: 12px;
}
.cards-rows {
  display: grid;
  gap: 16px;
}
.card-title {
  margin-bottom: 6px;
}
.card-list {
  display: flex;
  align-items: center;
  gap: 4px;
}
.cards-field {
  position: relative;
  width: 174px;
  input {
    .transition(color, border-color);
    width: 100%;
    padding: 7px;
    font-family: @font-default;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    text-align: left;
    color: @color-gray-067;
    background-color: @color-white;
    border: 1px solid @color-very-pale-blue-3;
    border-radius: 9px;
    outline: none;
    appearance: none;
    &:not([disabled]):hover,
    &:not([disabled]):focus-visible {
      border-color: rgb(@color-signal-blue 0.4);
    }
    &::placeholder {
      opacity: 0.4;
    }
  }
  button {
    .transition(color);
    position: absolute;
    top: 50%;
    right: 7px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    margin: 0;
    padding: 0;
    color: @color-cadet-blue-crayola-2;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transform: translateY(-50%);
    &:not([disabled]):hover,
    &:not([disabled]):focus-visible {
      color: @color-signal-blue;
    }
  }
  svg {
    width: 10px;
    height: 10px;
    fill: currentcolor;
  }
}
.type-block {
  margin-top: 16px;
}
.type-title {
  margin-bottom: 4px;
}
.type-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
}
.note-block {
  margin-top: 16px;
}
.textarea {
  .transition(color, border-color);
  .hide-scroll;
  display: block;
  width: 100%;
  height: 124px;
  padding: 15px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  text-align: left;
  color: @color-gray-067;
  background-color: @color-white;
  border: 1px solid rgb(@color-black 0.1);
  border-radius: 16px;
  outline: none;
  appearance: none;
  resize: none;
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    border-color: rgb(@color-signal-blue 0.4);
  }
  &::placeholder {
    opacity: 0.6;
  }
}
.btn-submin {
  .transition(background-color);
  display: block;
  width: 280px;
  margin: 0 auto;
  margin-top: 24px;
  padding: 8px 16px;
  font-family: @font-default;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  color: @color-white;
  text-transform: none;
  background-color: @color-mountain-meadow;
  border: 0;
  border-radius: 30px;
  &:not([disabled]) {
    cursor: pointer;
  }
  &[disabled] {
    background-color: rgb(@color-mountain-meadow 0.6);
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    background-color: @color-dark-pastel-green;
  }
}
</style>
