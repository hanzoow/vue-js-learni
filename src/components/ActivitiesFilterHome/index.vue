<script setup>
import { ref, watch } from 'vue'
import DestinationFilter from './components/DestinationFilter.vue'
import LocationFilter from './components/LocationFilter.vue'
import CheckinCheckoutFilter from './components/CheckinCheckoutFilter.vue'
const activitiesFilters = ref([
  {
    id: 1,
    name: 'Tour',
    isSelecting: true,
    childrenFilter: [
      {
        icon: 'location_on',
        id: 'DestinationFilter',
        filterName: 'Destination',
        placeholder: 'Select Destination',
        uiType: 'q-select',
        component: DestinationFilter,
        options: [
          {
            country: 'Sweden',
            address: 'Bandar ban,Khagrachori,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'Japan',
            address: 'Bandar ban,Khagrachori,Sajek Vally,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'India',
            address: 'Saint Martin,Sajek Vally,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'Brazil',
            address: 'Bandar ban,Cox’s Bazar,Khagrachori,Saint Martin,Sajek Vally,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'Australia',
            address: 'Bandar ban,Cox’s Bazar,Khagrachori,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'Spain',
            address: 'Bandar ban,Sajek Vally,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'Italy',
            address: 'Bandar ban,Cox’s Bazar,Khagrachori,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'Indonesia',
            address: 'Khagrachori,Saint Martin,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'Indonesia',
            address: 'Khagrachori,Saint Martin,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'Saudi Arab',
            address: 'Cox’s Bazar,Khagrachori,Saint Martin,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'Switzerland',
            address: 'Bandar ban,Khagrachori,Sajek Vally,Sea Beach',
            numberOfTour: 5
          },
          {
            country: 'New York',
            address: 'Cox’s Bazar,Saint Martin,Sajek Vally',
            numberOfTour: 5
          }
        ]
      },
      {
        icon: 'train',
        filterName: 'Tour Type',
        id: 'TourTypeFilter',
        placeholder: 'Select Tour Type',
        uiType: 'q-select',
        options: [
          'Luxury Tour',
          'Luxury Tour',
          'Cultural Tours',
          'Honey moon Tour',
          'Historical Tours',
          'Historical Tours'
        ]
      },
      {
        icon: 'schedule',
        filterName: 'When',
        id: 'WhenFilter',
        placeholder: 'Select Month',
        uiType: 'q-date',
        options: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]
      },
      {
        icon: 'train',
        filterName: 'Tour Duration',
        id: 'TourDurationFilter',
        placeholder: 'Select Duration',
        uiType: 'q-select',
        options: [
          '1 Week',
          '3 Days / 4 Night',
          '10 Days / 11 Night',
          '4 Days / 5 Night',
          '4 Days / 5 Night',
          '7 Days / 8 Night',
          '5 Days / 6 Night'
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Hotel',
    isSelecting: false,
    childrenFilter: [
      {
        icon: 'location_on',
        id: 'LocationFilter',
        filterName: 'Locatio 1231232n',
        placeholder: 'Select Location',
        uiType: 'q-select',
        component: LocationFilter,
        options: [
          {
            country: 'Sweden'
          },
          {
            country: 'Japan'
          },
          {
            country: 'India'
          },
          {
            country: 'Brazil'
          },
          {
            country: 'Australia'
          },
          {
            country: 'Spain'
          },
          {
            country: 'Italy'
          },
          {
            country: 'Indonesia'
          },
          {
            country: 'Indonesia'
          },
          {
            country: 'Saudi Arab'
          },
          {
            country: 'Switzerland'
          },
          {
            country: 'New York'
          }
        ]
      },
      {
        icon: 'clock',
        filterName: 'Check in - check out',
        id: 'CheckinCheckoutFilter',
        placeholder: '24-May - 24-May',
        uiType: 'q-select',
        component: CheckinCheckoutFilter,
        options: [
          'Luxury Tour',
          'Luxury Tour',
          'Cultural Tours',
          'Honey moon Tour',
          'Historical Tours',
          'Historical Tours'
        ]
      },
      {
        icon: 'schedule',
        filterName: 'Room',
        id: 'RoomFilter',
        placeholder: 'Room Type',
        uiType: 'q-date',
        options: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]
      },
      {
        icon: 'train',
        filterName: 'Guest',
        id: 'GuestFIlter',
        placeholder: '1 Person',
        uiType: 'q-select',
        options: [
          '1 Week',
          '3 Days / 4 Night',
          '10 Days / 11 Night',
          '4 Days / 5 Night',
          '4 Days / 5 Night',
          '7 Days / 8 Night',
          '5 Days / 6 Night'
        ]
      }
    ]
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

const refMenu = ref(null)

const currentActivitiesFilterState = ref(
  activitiesFilters.value.find((activity) => activity.isSelecting).childrenFilter
)

watch(activitiesFilters, (newActivitiesFilter) => {
  currentActivitiesFilterState.value = newActivitiesFilter.find(
    (activity) => activity.isSelecting
  ).childrenFilter
})

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

function onSearchPress() {}

function onItemClick(itemSearchPress) {}

const closeMenu = () => {
  refMenu.value.forEach((a) => {
    a.hide()
  })
}
</script>

<template>
  <div class="column align-items-center activities-container">
    <div class="container row center filter-container">
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
    <div
      class="row center justify-content-between"
      style="border-radius: 18px; width: fit-content; overflow: hidden"
    >
      <div
        class="align-items-center"
        v-for="filterItem in currentActivitiesFilterState"
        :key="filterItem.filterName"
        @click="onChangeActivitySearch(filterItem)"
      >
        <q-item
          :style="[{ background: 'rgba(255, 255, 255, 0.15)' }]"
          style="align-items: center; padding: 0px"
          :clickable="true"
          @click="onChangeActivitySearch(filterItem)"
        >
          <q-btn flat icon-right="arrow_drop_down" :icon="filterItem.icon" color="none">
            <q-item class="column items-start">
              <q-item-label :no-caps="true" style="color: green">
                {{ filterItem.filterName }}
              </q-item-label>
              <q-item-label :no-caps="true"> {{ filterItem.placeholder }} </q-item-label>
            </q-item>
            <q-menu ref="refMenu" :max-height="filterItem.component ? '400px' : '300px'">
              <component
                v-if="filterItem.component"
                :is="filterItem.component"
                :options="filterItem.options"
                :closePopup="closeMenu"
              />
              <q-list
                v-else
                v-for="(filterItem, index) in filterItem.options"
                :key="index"
                style="min-width: 100px"
              >
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label caption>{{ filterItem }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item>
      </div>
      <q-btn :no-caps="true" color="green" @click="onSearchPress" label="Search" />
    </div>
  </div>
</template>

<style>
@import './ActivitiesFilterHome.css';
</style>
