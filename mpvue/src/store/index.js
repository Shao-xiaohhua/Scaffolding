import Vue from 'vue'
import Vuex from 'vuex'
import group from './modules/group'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    group
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => wx.clearStorage()
      }
    })
  ]
})
