import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerPath: []
  },
  mutations: {
    updateRoute(state, newRoute) { //更新路由状态
      state.routerPath = newRoute
    }
  },
  actions: {
  },
  modules: {
  }
})
