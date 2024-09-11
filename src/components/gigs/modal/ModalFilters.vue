<script setup lang="ts">
import SearchElement from '@common/form/SearchElement.vue'
import DefaultCheckbox from '@components/form/DefaultCheckbox.vue'
import ModalOverlay from '@components/modal/ModalOverlay.vue'
import DefaultSelectDropdown from '@gigs/form/DefaultSelectDropdown.vue'
import DefaultField from '@gigs/form/DefaultField.vue'

defineProps<{
  closeModal: (evt: MouseEvent) => void
}>()

const driverList = ['Choose Driver']

const typesList = [
  'All Types',
  'Back to Pharmacy',
  'Exchange',
  'Facility',
  'Fedex_2_day',
  'Next Day Special Hours',
  'Pharmacy Pickup',
  'Pick up from the location',
  'Regular',
  'Return to Pharmacy',
  'Same Day',
  'Same Day Special Hours',
  'STAT',
  'Time Window Next Day',
  'Time Window Next Day 9am-3pm, 3pm-9pm',
  'UPS_ground_saver',
  'UPS_next_day_air',
  'UPS_next_day_air_early_am',
  'UPS_next_day_air_saver',
  'UPS_second_day_air',
  'USPS_ground_advantage',
  'USPS_priority',
  'USPS_priority_express',
  'Priority'
]

const clientList = [
  'All Clients',
  'harry12',
  'Alto Pharmacy LLC',
  'Brookdale Pharmacy',
  'Alto Pharmacy LLC',
  'Alto Pharmacy LLC',
  'Alto Pharmacy LLC',
  'Alto Pharmacy LLC',
  'Alto Pharmacy LLC'
]

const statusCheckbox = [
  { id: 'status_check_1', value: 'Recipient Refused' },
  { id: 'status_check_2', value: 'Wrong Address' },
  { id: 'status_check_3', value: 'Recipient not present' }
]

const columnsCheckbox = [
  { id: 'show_col_1', value: 'Order #', isChecked: true },
  { id: 'show_col_2', value: 'In Queue QAQC', isChecked: true },
  { id: 'show_col_3', value: 'Address', isChecked: true },
  { id: 'show_col_4', value: 'Instructions' },
  { id: 'show_col_5', value: 'Call Notes Patient', isChecked: true },
  { id: 'show_col_6', value: 'Notes' },
  { id: 'show_col_7', value: 'Call Notes Pharmacy', isChecked: true },
  { id: 'show_col_8', value: 'Last Contacted' },
  { id: 'show_col_9', value: 'Geofence Detection' },
  { id: 'show_col_10', value: 'Copay' },
  { id: 'show_col_11', value: 'Recipient Name' },
  { id: 'show_col_12', value: '# of Items' },
  { id: 'show_col_13', value: 'Recipient Phone' },
  { id: 'show_col_14', value: 'Dispatcher Notes' },
  { id: 'show_col_15', value: 'Recipient Phone 2' },
  { id: 'show_col_16', value: 'Rx Name' },
  { id: 'show_col_17', value: 'Request Call Upon Arrival' },
  { id: 'show_col_18', value: 'Created' },
  { id: 'show_col_19', value: 'Need to Call' },
  { id: 'show_col_20', value: 'Lates Pickup' },
  { id: 'show_col_21', value: 'Contract Scanned AT' },
  { id: 'show_col_22', value: 'Attempts' },
  { id: 'show_col_23', value: 'Driver' },
  { id: 'show_col_24', value: 'In System' },
  { id: 'show_col_25', value: 'Current Payout' },
  { id: 'show_col_26', value: 'Visible' },
  { id: 'show_col_27', value: 'Future Payout' },
  { id: 'show_col_28', value: 'Confirmed' },
  { id: 'show_col_29', value: 'Route Status' },
  { id: 'show_col_30', value: 'Type' },
  { id: 'show_col_31', value: 'Stop Type' },
  { id: 'show_col_32', value: 'Delivery Method' },
  { id: 'show_col_33', value: 'Real ETA' },
  { id: 'show_col_34', value: 'Provider Name' },
  { id: 'show_col_35', value: 'Real DT' },
  { id: 'show_col_36', value: 'Activity' },
  { id: 'show_col_37', value: 'Time to Deliver' },
  { id: 'show_col_38', value: 'Date to Deliver' },
  { id: 'show_col_39', value: 'Time at Stop' },
  { id: 'show_col_40', value: 'Note Status' },
  { id: 'show_col_41', value: 'Rx Number' },
  { id: 'show_col_42', value: 'Note Sub-Status' },
  { id: 'show_col_43', value: 'Client' },
  { id: 'show_col_44', value: 'Note Activity' },
  { id: 'show_col_45', value: 'In Queue' }
]

const columsConrols = [
  { id: 1, value: 'Default' },
  { id: 2, value: 'Show All' },
  { id: 3, value: 'Hide All' }
]
</script>

<template>
  <ModalOverlay :closeModal="closeModal">
    <div class="modal">
      <div class="top">
        <h3 class="modal-title">Filters</h3>
        <SearchElement class="search-element" isSmall />
      </div>
      <div class="content">
        <div class="left">
          <div>
            <div class="label-field">Gigs was created after start of</div>
            <DefaultField value="07/01/2024" />
          </div>
          <div>
            <div class="label-field">Gigs was created before start of</div>
            <DefaultField placeholder="__/__/____" />
          </div>
          <div>
            <div class="label-field">By Driver</div>
            <DefaultSelectDropdown :values="driverList" isDisabled />
          </div>
          <div>
            <div class="label-field">By Client</div>
            <DefaultSelectDropdown :values="clientList" />
          </div>
          <div>
            <div class="label-field">By Types</div>
            <DefaultSelectDropdown :values="typesList" />
          </div>
          <div class="checkbox-fildset">
            <div
              class="filter-checkbox"
              v-for="it in statusCheckbox"
              :key="it.id"
            >
              <DefaultCheckbox isBlue />
              {{ it.value }}
            </div>
          </div>
        </div>
        <div>
          <div class="colums-top">
            <div class="colums-title">Show/hide colums</div>
            <div class="colums-contols">
              <template v-for="(it, i) in columsConrols" :key="it.id">
                <button class="colums-btn">
                  {{ it.value }}
                </button>
                {{ i === columsConrols.length ? '' : '/' }}
              </template>
            </div>
          </div>
          <div class="colums-list">
            <div
              class="filter-checkbox"
              v-for="it in columnsCheckbox"
              :key="it.id"
            >
              <DefaultCheckbox isBlue :isChecked="it.isChecked" />
              {{ it.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </ModalOverlay>
</template>

<style lang="less" scoped>
@import '@style/common';
.modal {
  padding: 20px;
  color: @color-signal-blue;
  background-color: @color-white;
  border-radius: 20px;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  grid-template-columns: 230px 434px;
  gap: 32px;
  margin-top: 12px;
}
.left {
  display: grid;
  align-content: start;
  gap: 8px;
}
.label-field {
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
}
.colums-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.colums-title {
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: @color-signal-blue;
}
.colums-contols {
  flex-shrink: 0;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  text-align: left;
  color: @color-light-purple-blue;
}
.colums-btn {
  .transition(color);
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  text-decoration: underline;
  background-color: transparent;
  border: 0;
  &:hover,
  &:focus-visible {
    color: @color-cornflower-blue;
    cursor: pointer;
  }
}
.colums-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 24px;
  width: 434px;
  margin-top: 8px;
  padding: 12px;
  background-color: @color-periwinkle-crayola;
  border-radius: 12px;
}
.checkbox-fildset {
  display: grid;
  gap: 12px;
  padding: 12px;
  background-color: @color-periwinkle-crayola;
  border-radius: 10px;
}
.filter-checkbox {
  display: flex;
  align-self: center;
  gap: 8px;
  font-size: 14px;
  line-height: 18px;
}
</style>
