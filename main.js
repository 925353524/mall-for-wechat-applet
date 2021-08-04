import Vue from 'vue'
import App from './App'
import { myRequest } from 'utils/api.js'
import store from './store/index.js'

Vue.prototype.$myRequest = myRequest
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
