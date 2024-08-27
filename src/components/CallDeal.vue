<script setup lang="ts">
import iconFullscreen from '@icons/fullscreen.svg'
import imgUserpic from '@assets/img/userpic-white.png'
import iconCallAdd from '@icons/call-add.svg'
import iconMic from '@icons/mic.svg'
import iconCallEnd from '@icons/call-end.svg'
import StatusIconLabel from '@/components/labels/StatusIconLabel.vue'

withDefaults(defineProps<{ type?: 1 | 2 }>(), { type: 1 })
</script>

<template>
  <div class="deal">
    <div class="top">
      <div class="title">
        {{ type === 1 ? 'Paste or dial a number' : 'Outbound call' }}
      </div>
      <div v-if="type === 2" class="time">00:46</div>
      <button class="fullscreen">
        <iconFullscreen />
      </button>
    </div>

    <div v-if="type === 2" class="person">
      <div class="person-info">
        <img
          class="person-photo"
          :src="imgUserpic"
          width="42"
          height="42"
          alt=""
        />
        <div>
          <div class="person-name">Elon Musk</div>
          <div class="person-phone">+1 (234) 567-8901</div>
        </div>
      </div>
      <div class="person-list">
        <div class="person-order">
          #19245347
          <StatusIconLabel value="Driver Out" />
        </div>
        <div class="person-order">
          #19245347
          <StatusIconLabel value="Route Optimized" />
        </div>
      </div>
    </div>

    <input
      class="field"
      type="text"
      placeholder="Select a number"
      :value="type === 1 ? '+1 (234) 567-8901' : null"
    />

    <div class="numbers">
      <button class="num">1</button>
      <button class="num">2</button>
      <button class="num">3</button>
      <button class="num">4</button>
      <button class="num">5</button>
      <button class="num">6</button>
      <button class="num">7</button>
      <button class="num">8</button>
      <button class="num">9</button>
      <button class="num">*</button>
      <button class="num">0</button>
      <button class="num">#</button>
    </div>

    <button v-if="type === 1" class="call">
      <iconCallOutgoing />
      Call
    </button>

    <div v-if="type === 2" class="deal-controls">
      <button class="deal-btn">
        <iconCallAdd />
      </button>
      <button class="deal-btn">
        <iconMic />
      </button>
      <button class="deal-btn red">
        <iconCallEnd />
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.deal {
  width: 312px;
  padding: 12px;
  color: @color-signal-blue;
  background-color: @color-white;
  border-radius: 22px;
  box-shadow: 0 8px 24px rgb(@color-gray-259 0.16);
}
.top {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}
.title {
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
}
.time {
  padding: 3px 8px;
  font-size: 14px;
  line-height: 18px;
  background-color: @color-periwinkle-crayola-2;
  border-radius: 30px;
}
.fullscreen {
  .transition(background-color);
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 30px;
  height: 30px;
  margin: 0;
  margin-left: auto;
  padding: 0;
  background-color: rgb(@color-blue-crayola 0.15);
  border: 0;
  border-radius: 50%;
  svg {
    width: 16px;
    height: 16px;
    fill: @color-blue-crayola;
  }
  &:hover,
  &:focus-visible {
    background-color: rgb(@color-blue-crayola 0.2);
    cursor: pointer;
  }
}
.person {
  margin-top: -6px;
  margin-bottom: 12px;
  padding: 8px;
  background-color: @color-periwinkle-crayola-2;
  border-radius: 16px;
}
.person-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.person-photo {
  display: block;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
}
.person-name {
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  color: @color-blue-crayola;
}
.person-phone {
  font-size: 16px;
  line-height: 19px;
}
.person-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
}
.person-order {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 4px 4px 12px;
  font-size: 16px;
  line-height: 20px;
  color: @color-signal-blue;
  background-color: @color-white;
  border-radius: 30px;
}
.field {
  .transition(border-color);
  width: 100%;
  padding: 14px 11px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-white;
  border: 1px solid @color-very-pale-blue-3;
  border-radius: 12px;
  outline: none;
  appearance: none;
  &::placeholder {
    color: rgb(@color-signal-blue 0.6);
  }
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }
  &:hover,
  &:focus-visible {
    border-color: rgb(@color-signal-blue 0.5);
  }
}
.numbers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px 16px;
  width: max-content;
  margin: 12px auto 16px auto;
}
.num {
  .transition(background-color);
  display: grid;
  place-items: center;
  width: 62px;
  height: 41px;
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  background-color: @color-periwinkle-crayola-2;
  border: 0;
  border-radius: 12px;
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    background-color: @color-very-pale-blue-2;
    cursor: pointer;
  }
}
.call {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 50px;
  margin: 0;
  padding: 13px 30px;
  font-family: inherit;
  font-size: 16px;
  line-height: 21px;
  font-weight: 700;
  color: @color-white;
  background-color: @color-mountain-meadow;
  border: 0;
  border-radius: 30px;
  svg {
    display: block;
    width: 23px;
    height: 23px;
    fill: currentcolor;
  }
  &[disabled] {
    opacity: 0.6;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    background-color: @color-dark-pastel-green;
    cursor: pointer;
  }
}
.deal-controls {
  display: flex;
  justify-content: center;
  gap: 7px;
  margin-top: 16px;
}
.deal-btn {
  .transition(background-color);
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  color: @color-blue-crayola;
  background-color: rgb(@color-blue-crayola 0.15);
  border: 0;
  border-radius: 50%;
  svg {
    width: 28px;
    height: 28px;
    fill: currentcolor;
  }
  &[disabled] {
    opacity: 0.6;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus-visible {
    background-color: rgb(@color-blue-crayola 0.25);
    cursor: pointer;
  }
  &.red {
    color: @color-white;
    background-color: @color-radical-red;
    &:not([disabled]):hover,
    &:not([disabled]):focus-visible {
      background-color: @color-red;
    }
  }
}
</style>
