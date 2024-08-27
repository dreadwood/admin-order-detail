phone
<script setup lang="ts">
import CopyBtn from '@buttons/CopyBtn.vue'

import iconPhone from '@icons/call-phone.svg'
import iconShare from '@icons/share.svg'
import TitleBlock from '@/components/common/TitleBlock.vue'
</script>

<template>
  <div class="wrp card card-gray">
    <TitleBlock text="Client info" type="small" tag="h4" />

    <a class="name" href="#">MANHATTAN APOTHECARY</a>

    <div>Reg: <b>1988d</b></div>

    <div class="tel-wrp">
      <a class="tel" href="tel:+12345678901">
        <iconPhone />
        +12345678901
      </a>
      <CopyBtn />
    </div>

    <div>
      <div class="label">Pharmacy Address:</div>
      <a class="address" href="#">
        931 Lexington Ave, New York, NY 10065, Manhattan, NY, 10065
        <iconShare />
      </a>
    </div>

    <div class="work-time">OPEN. Closing [10:00 PM]</div>

    <button class="btn-limit">Attempts limit (1)</button>

    <div class="tel-grid">
      <div>
        <b>If Not Present:</b>
        <div class="tel-wrp">
          <a class="tel underline" href="tel:+12345678901">+12345678901</a>
          <CopyBtn />
        </div>
      </div>
      <div>
        <b>Wrong Address:</b>
        <div class="tel-wrp">
          <a class="tel underline" href="tel:+12345678901">+12345678901</a>
          <CopyBtn />
        </div>
      </div>
      <div>
        <b>If Refused:</b>
        <div class="tel-wrp">
          <a class="tel underline" href="tel:+12345678901">+12345678901</a>
          <CopyBtn />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  display: grid;
  align-items: start;
  gap: 10px;
}
.name {
  .transition(color);
  font-size: 16px;
  line-height: 19px;
  color: @color-cornflower-blue;
  text-transform: uppercase;
  &:hover {
    color: @color-cornflower;
  }
}
.tel-wrp {
  display: flex;
  align-items: center;
  gap: 4px;
}
.tel {
  .transition(color);
  display: flex;
  align-items: center;
  gap: 2px;
  color: @color-signal-blue;
  text-decoration: none;
  .underline {
    text-decoration: underline;
  }
  svg {
    .transition(fill);
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    fill: @color-cornflower-blue;
  }
  &:hover {
    color: @color-purple-blue;
    text-decoration: underline;
    .underline {
      text-decoration: none;
    }
    svg {
      fill: @color-cornflower;
    }
  }
}
.add-tel {
  .transition(color);
  display: flex;
  align-items: center;
  color: @color-signal-blue;
  text-decoration: none;
  svg {
    .transition(fill);
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    fill: @color-cornflower-blue;
  }
  svg:first-child {
    margin-right: 2px;
  }
  svg:last-child {
    margin-left: 4px;
  }
  &:hover {
    color: @color-purple-blue;
    text-decoration: underline;
    svg {
      fill: @color-cornflower;
    }
  }
}
.address {
  .transition(color);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4px;
  margin-top: 4px;
  color: @color-signal-blue;
  text-decoration: none;
  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    fill: currentcolor;
  }
  &:hover {
    color: @color-purple-blue;
    text-decoration: underline;
  }
}
.work-time {
  font-weight: 700;
  color: @color-lime-green;
}
.btn-limit {
  .transition(background-color);
  display: block;
  width: 100%;
  margin: 0;
  padding: 3px 16px;
  font-family: @font-default;
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  text-align: center;
  color: @color-signal-blue;
  text-transform: none;
  background-color: @color-very-pale-blue-2;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
}
.tel-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 8px 4px;
  .tel-wrp {
    margin-top: 4px;
  }
}
</style>
