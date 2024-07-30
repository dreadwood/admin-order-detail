<script setup lang="ts">
import iconWrite from '@icons/write.svg'
import ActvBtn from '../buttons/ActvBtn.vue'
import TitleBlock from '@/components/common/TitleBlock.vue'
</script>

<template>
  <div class="card">
    <div class="card-top">
      <TitleBlock text="Instructions" />
    </div>

    <div class="grid">
      <div class="info">
        If not present, wrong address, refuse or reschedule - CALL the pharmacy.
        EXT 816 If the pharmacy is unreachable - TEXT on WhatsApp. If there's a
        doorman. deliver it to the doorman only in the NYC area
      </div>

      <div>
        <div class="label-item">What to do if:</div>
        <div class="list">
          <ActvBtn text="Not Present" :type="3" />
          <ActvBtn text="Patient not paying copay" :type="3" />
          <ActvBtn text="Refused" :type="3" />
          <ActvBtn text="Patient asking to reschedule" :type="3" />
          <ActvBtn text="Patient asking to leave" :type="3" />
          <ActvBtn text="Wrong address" :type="3" />
        </div>
      </div>

      <div>
        <div class="label-item">Special Instruction:</div>
        <div class="intruction-textarea">
          <textarea
            value="if the patient asks to leave for some reason cant reach the pharmacy plz put if the patient asks to leave for some reason cant reach the pharmacy plz put if the patient asks to leave"
          />
          <button class="btn-write">
            <iconWrite />
          </button>
        </div>
      </div>

      <div>
        <div class="label-item">Recipient instruction:</div>
        <div class="intruction-input">
          <input value="Please leave the package in the mailbox." />
          <button class="btn-write">
            <iconWrite />
          </button>
        </div>
      </div>

      <div>
        <div class="label-item">What to do if patient not paying copay:</div>
        <div class="intruction-input">
          <input
            value="Do not deliver the medication and contact the pharmacy as soon as possible."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@style/common';
.grid {
  display: grid;
  gap: 12px;
}
.info {
  padding: 10px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: rgb(@color-radical-red 0.1);
  border-radius: 12px;
}
.label-item {
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  color: @color-gray-blue;
}
.list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}
.intruction-textarea {
  .hide-scroll();
  position: relative;
  textarea {
    width: 100%;
    height: 70px;
    padding: 9px 8px;
    overflow: scroll;
    font-family: @font-default;
    font-size: 14px;
    line-height: 17px;
    background-color: rgb(@color-cornflower-blue 0.1);
    border: 1px solid @color-cornflower-blue;
    border-radius: 9px;
    appearance: none;
    resize: none;
  }
  .btn-write {
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
}
.intruction-input {
  position: relative;
  input {
    width: 100%;
    padding: 9px 8px;
    overflow: scroll;
    font-family: @font-default;
    font-size: 14px;
    line-height: 17px;
    background-color: @color-white;
    border: 1px solid @color-very-pale-blue-3;
    border-radius: 10px;
    appearance: none;
    resize: none;
  }
  .btn-write {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
}
.btn-write {
  display: block;
  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
