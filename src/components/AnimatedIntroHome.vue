<script setup>
import { computed } from 'vue'

const introText = 'Let’s Explore Your'
const categoryTrip = '{category} Trip.'
const introChangedText = ['Honeymoon', 'Family', 'Holiday']

const getIntroText = computed(() => {
  return introText.replace('{category}', introChangedText[1])
})
</script>

<template>
  <div style="justify-content: center">
    <span class="label-intro">
      {{ introText }}
    </span>
    <br />
    <span class="label-intro"> {{ categoryTrip }}</span>
  </div>
</template>

<style>
@import './AnimatedIntroHome.css';
</style>
