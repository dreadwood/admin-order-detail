<script setup lang="ts">
import PartQaqc from './PartQaqc.vue'
import PartPerson from './PartPerson.vue'
import PartDelivered from './PartDelivered.vue'
import PartPhotoList from './PartPhotoList.vue'
import PartPerson2 from './PartPerson2.vue'

import BlueBtn from '@buttons/BlueBtn.vue'
import TitleBlock from '@common/TitleBlock.vue'
</script>

<template>
  <div class="wrp card">
    <div class="card-top">
      <TitleBlock text="Vendor notes" type="big" tag="h3" />
    </div>

    <TitleBlock text="Assigned Vendor:" tag="p" />

    <div class="grid">
      <PartPerson name="Paul Thompson" photo="person-1.png" />
      <div class="vendor-info">
        <div class="label">Pick up time:</div>
        <div class="text-time">02/18/2024 10:45 AM</div>
      </div>

      <div class="vendor-info">
        <div class="label">The driver will be:</div>
        <div class="label-time">~45 min</div>
      </div>
    </div>

    <div class="btn-order">
      <BlueBtn text="Orders in current status (3)" />
    </div>

    <div class="map">
      <img src="/map-vendor-notes.png" width="580" height="442" alt="" />
    </div>

    <div class="separate"></div>
    <PartPhotoList />
    <div class="separate"></div>
    <PartDelivered />
    <div class="separate"></div>
    <PartPerson2 />
    <div class="separate"></div>
    <PartQaqc />
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  overflow: hidden;
}
.grid {
  display: grid;
  grid-template-columns: auto 35% 25%;
  align-items: start;
  gap: 10px;
  margin-top: 12px;
}
.text-time {
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
}
.label-time {
  width: max-content;
  padding: 1px 7px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: @color-white;
  background-color: @color-dark-pastel-green;
  border-radius: 12px;
}
.vendor-info {
  display: grid;
  gap: 4px;
}
.btn-order {
  margin-top: 10px;
}
.map {
  height: 442px;
  margin-top: 10px;
  overflow: hidden;
  border-radius: 12px;
}
.separate {
  padding: 10px 0;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: @color-light-purple-blue;
    opacity: 0.2;
  }
}
</style>
