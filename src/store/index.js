// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rate:'',
    count: 0,
    openid:'',
    token:'123'
  },
  mutations: {
    setOpennId:(state,openid)=>{
      state.openid = openid
    },
    setRate:(state,rate)=>{
      state.rate = rate
    },
    increment:(state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  },
  actions:{
    getLogin({commit}){
      console.log(commit);;
    }
  },
  getters:{
    getOpenId:(state) => state.openid,
    getRateVal:(state)=> state.rate
  }
})

export default store
