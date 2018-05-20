<template>
  <div id="app">
    <v-navbar></v-navbar>
    <router-view/>
    <my-slider id="slider"></my-slider>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Slider from './components/Slider'

export default {
  name: 'App',
  components: {
    'v-navbar': Navbar,
    'v-footer': Footer,
    'my-slider': Slider
  }
}
</script>

<style>
</style>
