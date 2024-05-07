<script setup>
import router from '../router'
const navbarCategories = [
  {
    name: 'Home',
    id: 1,
    paths: [
      { name: 'Home 01', path: 'home-01' },
      { name: 'Home 02', path: 'home-02' },
      { name: 'Home 03', path: 'home-03' },
      { name: 'Home 04', path: 'home-04' },
      { name: 'Home 05', path: 'home-05' },
      { name: 'Home 06', path: 'home-06' }
    ]
  },
  {
    name: 'About',
    id: 2,
    paths: [{ name: 'About', path: 'about' }]
  },
  {
    name: 'Tours',
    id: 3,
    paths: [
      { name: 'Package Grid', path: 'Package-Grid' },
      { name: 'Package Sidebar', path: 'Package-Sidebar' },
      { name: 'Package Category', path: 'Package-Category' },
      { name: 'Package Details', path: 'Package-Details' }
    ]
  },
  {
    name: 'Destination',
    id: 4,
    paths: [
      { name: 'Destination style 1', path: 'Destination-style' },
      { name: 'Destination style 2', path: 'Destination-Sidebar' },
      { name: 'Destination style 3', path: 'Destination-Category' },
      { name: 'Destination style 4', path: 'Destination-Details' }
    ]
  },
  {
    name: 'Pages',
    id: 5,
    paths: [
      { name: 'Destination style 1', path: 'Destination-style' },
      { name: 'Destination style 2', path: 'Destination-Sidebar' },
      { name: 'Destination style 3', path: 'Destination-Category' },
      { name: 'Destination style 4', path: 'Destination-Details' }
    ]
  },
  {
    name: 'Contact',
    id: 6,
    paths: [
      { name: 'Destination style 1', path: 'Destination-style' },
      { name: 'Destination style 2', path: 'Destination-Sidebar' },
      { name: 'Destination style 3', path: 'Destination-Category' },
      { name: 'Destination style 4', path: 'Destination-Details' }
    ]
  }
]

function onNavbarItemPress(path) {
  router.push({ name: path?.path })
  console.log('pathpath', path)
}

function onPressHome() {
  console.log('>>>>>>')
  router.push({ name: 'home-02' })
}

// don't forget to expose the function as well.
</script>

<template>
  <div class="row nav-container">
    <div @click="onPressHome" class="row center">
      <QImg
        style="width: 30px; height: 30px"
        src="https://cdn-icons-png.flaticon.com/512/6350/6350271.png"
      />
      <q-h1>Travel</q-h1>
    </div>
    <div class="category-container" v-for="category in navbarCategories" :key="category.id">
      <q-btn flat style="color: white; margin-left: 12px" v-bind:label="category.name">
        <q-menu>
          <q-list v-for="path in category.paths" :key="path.path" style="min-width: 100px">
            <q-item
              :href="path.path"
              style="background-color: black"
              clickable
              v-on:click="onNavbarItemPress(path)"
            >
              <q-item-section style="color: white">{{ path.name }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<style lang="css" scope>
@import './NavBar.css';
</style>
