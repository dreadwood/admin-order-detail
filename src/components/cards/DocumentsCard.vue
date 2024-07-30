<script setup lang="ts">
import { ref } from 'vue'

import CountLabel from '@labels/CountLabel.vue'
import ExpandBtn from '@buttons/ExpandBtn.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'

import iconDownload from '@assets/icons/doc-download.svg'
import iconEye from '@assets/icons/doc-eye.svg'

const props = defineProps<{ isShow?: boolean }>()

const isShow = ref<boolean>(props.isShow || true)

const btnHandle = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <div class="card">
    <div class="card-top">
      <TitleBlock text="Documents" />
      <CountLabel :count="4" />
      <div class="card-contols">
        <ExpandBtn :isShow="isShow" @click="btnHandle()" />
      </div>
    </div>
    <div v-if="isShow" class="list">
      <div
        class="doc"
        v-for="it in new Array(4).fill(0).map((_, i) => i + 1)"
        :key="it"
      >
        <div class="doc-wrp">
          <img class="doc-img" src="/doc.png" alt="" />
          <div class="doc-controls">
            <button class="doc-btn">
              <iconDownload />
            </button>
            <button class="doc-btn">
              <iconEye />
            </button>
          </div>
        </div>
        <div class="doc-name">Document name RX-100 Summary</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}
.doc {
  flex-shrink: 0;
  width: 210px;
  padding: 4px 4px 10px 4px;
  background-color: @color-periwinkle-crayola;
  border-radius: 10px;
}
.doc-wrp {
  position: relative;
  width: 100%;
  height: 252px;
  overflow: hidden;
  border-radius: 10px;
}
.doc-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.doc-controls {
  position: absolute;
  right: 4px;
  bottom: 4px;
  display: flex;
  gap: 4px;
}
.doc-btn {
  .transition(ackground-color);
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  text-transform: none;
  background-color: @color-white;
  border: 1px solid rgb(@color-gray-blue 0.1);
  border-radius: 8px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    /* stylelint-disable-next-line function-no-unknown */
    background-color: mix(@color-white, @color-cornflower-blue, 90%);
  }
}
.doc-name {
  .text-truncate();
  margin-top: 10px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: @color-gray-blue;
}
</style>
