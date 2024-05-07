<script setup>
import { computed, ref } from 'vue'
const activitiesFilters = ref([
  {
    id: 1,
    name: 'Tour',
    isSelecting: true,
    childrenFilter: [
      {
        icon: '',
        filterName: 'Destination',
        placeholder: 'Select Destination',
        uiType: 'q-select',
        options: []
      },
      {
        icon: '',
        filterName: 'Destination',
        placeholder: 'Select Destination',
        uiType: 'q-select',
        options: []
      },
      {
        icon: '',
        filterName: 'Destination',
        placeholder: 'Select Destination',
        uiType: 'q-select',
        options: []
      },
      {
        icon: '',
        filterName: 'Destination',
        placeholder: 'Select Destination',
        uiType: 'q-select',
        options: []
      }
    ]
  },
  {
    id: 2,
    name: 'Hotel',
    isSelecting: false,
    childrenFilter: [{}]
  },
  {
    id: 3,
    name: 'Visa',
    isSelecting: false,
    childrenFilter: [{}]
  },
  {
    id: 4,
    name: 'Activities',
    isSelecting: false,
    childrenFilter: [{}]
  },
  {
    id: 5,
    name: 'Transport',
    isSelecting: false,
    childrenFilter: [{}]
  }
])

const currentActivitiesFilter = computed(() => {
  return activitiesFilters.value.find((activity) => activity.isSelecting).childrenFilter
})

const currentActivitiesFilterState = ref(currentActivitiesFilter.value)

function onChangeActivitySearch(filter) {
  currentActivitiesFilterState.value = currentActivitiesFilterState.value.map((eachActivity) => {
    return { ...eachActivity, isSelecting: filter.id === eachActivity.id }
  })
}

function onChangeActivityFilter(activity) {
  activitiesFilters.value = activitiesFilters.value.map((eachActivity) => {
    return { ...eachActivity, isSelecting: activity.id === eachActivity.id }
  })
}
</script>

<template>
  <div style="justify-content: center; align-items: center; display: grid">
    <div class="row center filter-container">
      <div v-for="activity in activitiesFilters" :key="activity.id">
        <q-btn
          :class="{
            'q-chip-active': activity.isSelecting,
            'q-chip-inactive': !activity.isSelecting
          }"
          :style="[
            { background: 'rgba(255, 255, 255, 0.15)' },
            activity.isSelecting ? { background: 'green' } : {}
          ]"
          text-color="white"
          icon="phone"
          :label="activity.name"
          @click="onChangeActivityFilter(activity)"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import './ActivitiesFilterHome.css';
</style>
