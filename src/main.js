import Vue from 'vue'
import VueClipboard from 'vue-clipboard'
import App from './App.vue'

Vue.use(VueClipboard)

new Vue({
  el: 'body',
  components: { App }
})
