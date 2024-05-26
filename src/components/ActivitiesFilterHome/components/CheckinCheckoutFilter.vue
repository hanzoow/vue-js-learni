<script setup>
import { ref, onMounted } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import moment from 'moment'

const date = ref()
const datepicker = ref(null)

const props = defineProps({
  closePopup: Function
})

console.log('propsprops', props)

onMounted(() => {
  const startDate = new Date()
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
  date.value = [startDate, endDate]
  datepicker.value.openMenu()
})

const validDate = (date) => {
  const startDate = new Date(new Date().setHours(0, 0, 0, 0))

  return startDate > date
}

const getDate = (dateVal) => {
  return dateVal
    .map((value) => {
      const newDate = new Date(value)

      return newDate.getDate() + '-' + moment(newDate).format('MMM')
    })
    .join(' - ')
}

const onApplyFilter = () => {
  props.closePopup?.()
  datepicker.value.closeMenu()
}
</script>

<template>
  <div style="height: fit-content">
    <VueDatePicker
      style="height: 400px; width: 520px; display: block"
      ref="datepicker"
      v-model="date"
      :enable-time-picker="false"
      :disabled-dates="validDate"
      :monthChangeOnScroll="false"
      range
      position="right"
      :multi-calendars="{ solo: true, count: 2 }"
      v-close-popup
    >
      <template #trigger> </template>
      <template #action-preview="{ value }">
        {{ getDate(value) }}
      </template>
      <template #action-buttons>
        <q-btn rounded label="Cancel" />
        <q-btn @click="onApplyFilter" color="green" rounded label="Apply" />
      </template>
    </VueDatePicker>
  </div>
</template>

<style>
@import './CheckinCheckoutFilter.css';
</style>
