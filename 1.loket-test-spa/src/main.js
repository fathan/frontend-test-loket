import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import Configuration from './mixins/Configuration'

import './components/InitializeGlobalComponent/InitializeGlobalComponent'
import './plugins/vue-buefy'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.mixin(Configuration)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
