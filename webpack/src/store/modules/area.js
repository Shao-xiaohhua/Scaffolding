// import * as types from '../mutation-types'
import api from '@/api/index'

const state = {
  allNumber: 0
}

const getters = {
  allNumber: state => state.allNumber
}

const actions = {
  getDistrict ({ commit }, data) {
    return api.getDistrict(data).then(json => {
      commit('getAllNum', json.data)
      return json.data
    })
  }
}

const mutations = {
  getAllNum (state, inner) {
    state.allNumber = inner
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
