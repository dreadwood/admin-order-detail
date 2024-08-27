phone
<script setup lang="ts">
import { ref } from 'vue'

import CopyBtn from '@buttons/CopyBtn.vue'
import TextDropdown from '@form/TextDropdown.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'

import iconPhone from '@icons/call-phone.svg'
import iconUser from '@icons/user.svg'
import iconShare from '@icons/share.svg'
import iconCheckOff from '@icons/checkbox-off.svg'
import iconCheckOn from '@icons/checkbox-on.svg'

const isCheckActiv = ref<boolean>(false)
const checkHandle = () => {
  isCheckActiv.value = !isCheckActiv.value
}

const hubs = [
  'Brooklyn',
  'Long Island',
  'Connecticut',
  'Pennsylvania',
  'New Jersey'
]
</script>

<template>
  <div class="card card-gray">
    <div class="top">
      <TitleBlock text="Patient info" type="small" tag="h4" />
      <div class="label-title">Previous Orders 4</div>
    </div>

    <div class="user">
      <iconUser />
      Elon Musk
      <CopyBtn />
    </div>

    <div class="tel-wrp">
      <a class="tel" :class="{ green: isCheckActiv }" href="tel:+12345678901">
        <iconPhone />
        Cell: +12345678901
      </a>
      <CopyBtn />
    </div>

    <label class="call-checkbox">
      <input class="visually-hidden" type="checkbox" @click="checkHandle" />
      <iconCheckOff v-if="isCheckActiv === false" />
      <iconCheckOn v-if="isCheckActiv === true" />
      Call Upon Arrival
    </label>

    <div class="address-wrp">
      <a class="address" href="#">
        <iconShare />
        931 Lexington Ave, New York, NY 10065, Manhattan, NY, 10065
      </a>
      <CopyBtn />
    </div>

    <div class="map">
      <img src="/map-patient-info.jpg" width="245" height="245" alt="" />
    </div>

    <div class="address-original-wrp">
      <div class="label">Original Address:</div>
      <a class="address-original" href="#">
        <iconShare />
        931 Lexington Ave, New York, NY 10065, Manhattan, NY, 10065
      </a>
    </div>

    <div class="dropdown">
      <div class="label">Facility Hub:</div>
      <TextDropdown :values="hubs" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.label-title {
  padding: 2px 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: @color-white;
  background-color: @color-signal-blue;
  border-radius: 30px;
}
.user {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 14px;
  text-decoration: none;
  & > svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    fill: @color-cornflower-blue;
  }
}
.tel-wrp {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 14px;
}
.tel {
  .transition(color);
  display: flex;
  align-items: center;
  gap: 2px;
  color: @color-signal-blue;
  text-decoration: none;
  svg {
    .transition(fill);
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    fill: @color-cornflower-blue;
  }
  &.green {
    svg {
      fill: @color-lime-green-2;
    }
  }
  &:hover {
    color: @color-purple-blue;
    text-decoration: underline;
  }
}
.call-checkbox {
  .transition(color);
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: @color-purple-blue;
  }
}
.address-wrp {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin-top: 14px;
}
.address {
  .transition(color);
  color: @color-signal-blue;
  text-transform: uppercase;
  text-decoration: none;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
    fill: @color-cornflower-blue;
  }
  &:hover {
    color: @color-purple-blue;
    text-decoration: underline;
  }
}
.map {
  margin-top: 14px;
  overflow: hidden;
  border-radius: 12px;
}
.address-original-wrp {
  margin-top: 14px;
}
.address-original {
  .transition(color);
  display: block;
  margin-top: 4px;
  color: @color-light-slate-gray;
  text-decoration: none;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
    fill: currentcolor;
  }
  &:hover {
    color: @color-purple-blue;
    text-decoration: underline;
  }
}
.dropdown {
  margin-top: 14px;
  .label {
    margin-bottom: 4px;
  }
}
</style>
