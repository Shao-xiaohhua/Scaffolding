// import * as types from '../mutation-types'
import api from '@/api/index'
const state = {
  allNumber: 0,
  crfcode: '', // csrf token
  collection: '', // 公钥
  navbarText: '首页' // nabver 名称
}

const getters = {
  allNumber: state => state.allNumber,
  crfcode: state => state.crfcode,
  collection: state => state.collection,
  navbarText: state => state.navbarText
}

const actions = {
  getLogin ({ commit }, data) { // 登录函数
    api.getDistrict(data).then(json => {
      console.log(json)
    })
  },
  AgetCrf ({commit}, inner) { // 获取token
    api.getCsrf().then(json => {
      commit('getCrf', json.data.result)
    })
  },
  AgetCollection ({commit}, inner) { // 获取公钥
    api.getColle().then(json => {
      commit('getCollection', json.data.result)
    })
  },
  AgetnavbarText ({commit}, inner) { // navbar
    commit('getnavbarText', inner)
  },
  AgetUrlName ({commit}, inner) { // 获取地址栏内容
    let name,value
    let str=location.href  //取得整个地址栏
    let num=str.indexOf("?") 
    str=str.substr(num+1) //str得到?之后的字符串

    let arr=str.split("&") //得到&分割的参数，放入数组中
    for(let i = 0; i < arr.length; i++)
    {
      num=arr[i].indexOf("=")
      if(num>0)
      {
          name=arr[i].substring(0,num)
          value=arr[i].substr(num+1)
          this[name]=value
      }
    }
  }
}

const mutations = {
  getAllNum (state, inner) {
    state.allNumber = inner
  },
  getCrf (state, inner) {
    state.crfcode = ''
    state.crfcode = inner
    console.log(inner)
  },
  getPasWord (state, inner) {
    return inner
  },
  getCollection (state, inner) {
    state.collection = ''
    state.collection = inner
    console.log(inner)
  },
  getnavbarText (state, inner) {
    state.navbarText = inner
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
