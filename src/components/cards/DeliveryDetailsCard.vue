<script setup lang="ts">
import CardTopBtn from '@buttons/CardTopBtn.vue'
import ClientInfoCard from '@/components/cards/ClientInfoCard.vue'
import PackageInfoCard from '@/components/cards/PackageInfoCard.vue'
import PatientInfoCard from '@/components/cards/PatientInfoCard.vue'
import OrderInfoCard from '@/components/cards/OrderInfoCard.vue'
import FinanceInfoCard from '@/components/cards/FinanceInfoCard.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'
</script>

<template>
  <div class="card">
    <div class="card-top">
      <TitleBlock text="Delivery details" type="big" />
      <div class="card-contols">
        <CardTopBtn text="Edit" />
      </div>
    </div>

    <div class="row">
      <div class="col col-fix">
        <ClientInfoCard />
        <PackageInfoCard />
      </div>
      <div class="col col-fix">
        <PatientInfoCard />
      </div>
      <div class="col">
        <OrderInfoCard />
        <FinanceInfoCard />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.col {
  display: grid;
  gap: 12px;
}
.col-fix {
  flex-shrink: 0;
  width: 270px;
}
</style>
