// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main
  }
})
