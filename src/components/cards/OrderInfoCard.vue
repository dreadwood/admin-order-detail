<script setup lang="ts">
import StatusDropdown from '@form/StatusDropdown.vue'
import SubStatusDropdown from '@form/SubStatusDropdown.vue'
import DeliveryMethodDropdown from '@form/DeliveryMethodDropdown.vue'
import OrderTypeDropdown from '@form/OrderTypeDropdown.vue'
import InputField from '@form/InputField.vue'
import BlueBtn from '@buttons/BlueBtn.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'

import iconCrossCircle from '@icons/cross-circle.svg'
import iconUps from '@assets/img/ups.svg?url'
</script>

<template>
  <div class="wrp card card-gray">
    <TitleBlock text="Order info" type="small" tag="h4" />

    <div class="top">
      <div>
        <div class="label-order label">Status:</div>
        <StatusDropdown value="Ready to Print" />
      </div>
      <div>
        <div class="label-order label">SubStatus:</div>
        <SubStatusDropdown value="Open" />
      </div>
    </div>

    <div class="grid">
      <div>
        <div class="label-order label">
          <iconCrossCircle />
          Delivery method
        </div>
        <DeliveryMethodDropdown value="Face-to-Face ID & Signature requred" />
      </div>
      <div>
        <div class="label-order label">Order Type</div>
        <OrderTypeDropdown value="Regular" />
      </div>
      <div>
        <div class="label-order label">Date to Deliver (Prom ETA):</div>
        <InputField isBorder value="02/18/2024" />
      </div>
      <div>
        <div class="label-order label">Time to Deliver (Prom ETA):</div>
        <InputField isBorder value="08:00 PM - 09:00 PM" />
      </div>
      <div>
        <div class="label-order label">Order Condition:</div>
        <InputField isBorder value="Regular" />
      </div>
      <div>
        <div class="label-order label"> </div>
        <InputField isBorder value="Fridge Storage" />
      </div>

      <BlueBtn text="Track link" />
    </div>

    <div class="delivery">
      UPS
      <img :src="iconUps" width="45" height="20" />
    </div>

    <div class="adress">
      Next Day Air® Early <br />
      Next business day delivery by 8:30 a.m., 9:00 a.m., or 9:30 a.m.
    </div>

    <div class="bottom"><span class="label">Source:</span> dashboard rx2go</div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.wrp {
  //
}
.top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 12px;
  margin-top: 10px;
}
.label-order {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;
  svg {
    display: block;
    width: 12px;
    height: 12px;
    fill: @color-radical-red;
  }
}
.bottom {
  margin-top: 10px;
}
.delivery {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 18px;
  svg {
    display: block;
    flex-shrink: 0;
    width: 45px;
    height: 20px;
  }
}
.adress {
  margin-top: 10px;
  font-size: 16px;
  line-height: 21px;
}
</style>
