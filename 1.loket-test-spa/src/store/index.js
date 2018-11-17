import Vue from 'vue'
import Vuex from 'vuex'

import Global from './modules/Global'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Global
  }
})
