// import * as types from '../mutation-types'

const state = {
  group: []
}

const getters = {
  group: state => state.group
}

const actions = {
  getGroup ({ commit }, data) {
    commit('togroup', data)
  }
}

const mutations = {
  togroup (state, inner) {
    state.group = inner
    console.log(state.group)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
