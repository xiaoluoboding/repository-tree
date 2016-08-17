<script>
import NavBar from './components/NavBar.vue'
import Main from './components/Main.vue'
import store from './vuex/store'

export default {
  name: 'App',

  store,

  components: {
    NavBar,
    Main
  }
}
</script>

<template>
  <div id="app">
    <header>
      <nav-bar></nav-bar>
    </header>
    <main></main>
  </div>
</template>

<style>
@import '~primer-css/build/build.css';
@import '~octicons/build/font/octicons.min.css';
</style>
