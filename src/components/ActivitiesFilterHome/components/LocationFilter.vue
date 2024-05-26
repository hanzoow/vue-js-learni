<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  options: Array,
  onItemClick: Function
})

onMounted(() => {
  console.log('>>>>>>>>>>>')
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
      </q-item-section>
    </q-item>
  </q-list>
</template>

<style></style>
