<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  options: Array,
  onItemClick: Function
})

const { options = [], onItemClick } = props
</script>

<template>
  <q-input v-model="ph" placeholder="Type your destination" :dense="dense">
    <template v-slot:before>
      <q-icon name="search" />
    </template>
  </q-input>
  <q-list v-for="(item, index) in options" :key="index" style="width: 300px">
    <q-item class="item-destination" clickable v-close-popup @click="onItemClick">
      <q-item-section>
        <q-item-label style="font-weight: bold" caption>{{ item.country }}</q-item-label>
        <q-item-label caption lines="2">{{ item.address }}</q-item-label>
      </q-item-section>
      <q-item-section
        style="
          background-color: green;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding-left: 0px;
        "
        side
      >
        <q-item-label
          style="
            color: white;
            font-weight: 400;
            font-size: 12px;
            line-height: 1;
            text-align: center;
          "
          caption
          >{{ item.numberOfTour }}</q-item-label
        >
        <q-item-label
          style="
            color: white;
            font-weight: 400;
            font-size: 12px;
            line-height: 1;
            text-align: center;
          "
          >Tour</q-item-label
        >
      </q-item-section>
    </q-item>
  </q-list>
</template>

<style>
@import './DestinationFilter.css';
</style>
