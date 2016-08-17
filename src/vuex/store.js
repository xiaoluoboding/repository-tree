// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
// import parts from modules
import github from './modules/github'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    github
  }
})
