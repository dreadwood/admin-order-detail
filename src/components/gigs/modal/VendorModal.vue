<script setup lang="ts">
import ModalOverlay from '@/components/modal/ModalOverlay.vue'
import iconCross from '@assets/icons/cross.svg'

defineProps<{
  closeModal: (evt: MouseEvent) => void
}>()
</script>

<template>
  <ModalOverlay :closeModal="closeModal">
    <div class="modal">
      <button class="btn-close" @click="closeModal">
        <iconCross />
      </button>
      <h3 class="modal-title">Signed Vendor Contract</h3>
      <div class="content">
        <div>
          <div class="description">
            <p>
              1. Pricing Template: <br />
              * Per Stop Rate for each successful delivery: <br />
              <b>35 x $6.29 = $220.15</b> <br />
              * Redelivery Fee: $0. Deliveries to incorrect addresses must be
              redelivered at no additional compensation. <br />
              * Special Instructions Non-compliance Penalty: Deduction equal to
              stop price but not less then $6.14 for each stop where special
              instructions are not followed. <br />
              * COD collection: Copay amount of $ should be collected.
            </p>

            <p>
              2. Route Completion: All assigned routes must be completed in
              their entirety.
            </p>

            <p>
              3. Unattended Packages: If a patient is not home during delivery,
              the package should be handled as per company protocol. All copays
              provided by the patient, including ice packages and fridge bags,
              must be returned to the office upon route completion.
            </p>
            <p>
              4. Payment Structure: As a vendor, you will be compensated based
              on the pricing template mentioned above. Please note that
              penalties apply for incorrect deliveries and non-compliance with
              special instructions.
            </p>
            <p>
              5. Contractor Agreement: You are operating as an independent
              contractor with your own company. This agreement does not
              establish an employer-employee relationship between you and RX
              Courier Company.
            </p>
            <p>
              6. Special Instructions: It is mandatory to adhere to all special
              instructions provided for each stop. Failure to do so will result
              in the associated penalty as mentioned in the pricing template.
            </p>
            <p>
              7. Incorrect Deliveries: In the event that a package is delivered
              to the wrong address, it is your responsibility to redeliver the
              package to the correct address without any additional
              compensation. Penalties apply as mentioned in the pricing
              template.
            </p>
            <p>
              8. Package Responsibility: As a vendor, you are responsible for
              all packages in your possession. It is crucial to ensure their
              safety and timely delivery.
            </p>
            <p>
              9. Scanning and Agreement: Each package must be scanned before
              delivery. Upon scanning, this contract will appear on your screen.
              By proceeding with the delivery, you signify your agreement to the
              terms set forth in this contract.
            </p>
          </div>

          <div class="bottom">
            <div>
              <div>
                By accepting a route, you confirm that you have read,
                understood, and agree to abide by all the terms and conditions
                outlined in this contract.
              </div>
              <div class="date">2024-07-16 08:19:20</div>
            </div>
            <div class="signature">
              <img src="/signature.png" width="132" alt="" />
            </div>
          </div>
        </div>
        <div class="person">
          <img
            class="person-photo"
            src="/vendor-person-1.jpg"
            width="200"
            height="292"
            alt=""
          />
          <div class="person-name">Oleksandra Bulbuk</div>
        </div>
      </div>
    </div>
  </ModalOverlay>
</template>

<style lang="less" scoped>
@import '@style/common';
.modal {
  position: relative;
  max-width: 970px;
  padding: 30px;
  font-family: @font-default;
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  background-color: @color-white;
  border-radius: 30px;
}
.btn-close {
  .transition(background-color);
  position: absolute;
  top: 16px;
  right: 16px;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin: 0;
  padding: 0;
  background-color: rgb(@color-cornflower-blue 0.1);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  svg {
    display: block;
    width: 16px;
    height: 16px;
    user-select: none;
    fill: @color-cornflower-blue;
  }
  &:hover,
  &:focus-visible {
    background-color: rgb(@color-cornflower-blue 0.2);
  }
}
.modal-title {
  margin: 0;
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  color: @color-signal-blue;
}
.content {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 16px;
  margin-top: 12px;
}
.description {
  padding: 20px;
  background-color: @color-periwinkle-crayola;
  border-radius: 16px;
  p {
    margin: 0;
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
}
.bottom {
  display: grid;
  grid-template-columns: 1fr 160px;
  align-items: end;
  margin-top: 24px;
}
.date {
  margin-top: 11px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  color: rgb(@color-signal-blue 0.6);
}
.signature {
  height: 100px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.person-photo {
  width: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
}
.person-name {
  margin-top: 8px;
  padding: 8px 12px;
  line-height: 19px;
  text-align: center;
  color: @color-gray-blue;
  background-color: @color-periwinkle-crayola;
  border-radius: 8px;
}
</style>
