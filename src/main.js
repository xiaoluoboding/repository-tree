import Vue from 'vue'
import VueRouter from 'vue-router'
import VueClipboard from 'vue-clipboard'
import Router from './router'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueClipboard)

// Set up a new router
const router = new VueRouter()

Router(router)

// For every new route scroll to the top of the page
router.beforeEach(function() {
  window.scrollTo(0, 0)
})

// If no route is matched redirect home
router.redirect({
  '*': '/'
})

// Start up our app
router.start(App, '#root')
