phone
<script setup lang="ts">
import StatusCopayLabel from '@labels/StatusCopayLabel.vue'
import InputField from '@form/InputField.vue'
import FinanceTable from '@tables/FinanceTable.vue'

import CopayInfo from '@common/CopayInfo.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'
</script>

<template>
  <div class="card card-gray">
    <div class="top">
      <TitleBlock text="Finance info" type="small" tag="h4" />
      <div class="price-group">
        <div class="price-wrp">
          Rate
          <div class="price-field">
            <InputField value="$10.00" isSmall isBorder />
          </div>
        </div>

        <div class="price-wrp">
          Payout
          <div class="price-field">
            <InputField value="$8.00" isSmall isBorder />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div>
        <div class="label">Copay:</div>
        <CopayInfo value="$10.00" isError />
      </div>

      <div>
        <div class="label">Status:</div>
        <StatusCopayLabel :type="1" />
      </div>
    </div>

    <div class="fin-table">
      <FinanceTable />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.top {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(@color-light-purple-blue 0.2);
}
.price-group {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-left: auto;
}
.price-wrp {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 17px;
  color: rgb(@color-signal-blue 0.6);
}
.price-field {
  width: 100px;
}
.row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 10px;
  .label {
    margin-bottom: 5px;
  }
}
.fin-table {
  margin-top: 10px;
}
</style>
