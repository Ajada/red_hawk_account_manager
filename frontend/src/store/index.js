import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    authentication (context, payload) {
      if (payload.user === 'tes@tes' && payload.pass === '12') { localStorage.__access = 'token_teste' }
      return (window.location.href = '/home')
    //   axios.post('auth/login', payload)
    //     .then(
    //       res => {
    //         if (res.data.error) {
    //           return console.log(res.data.error) // message error
    //         }
    //         localStorage.__access = res.data._token
    //         return (window.location.href = '/')
    //       },
    //       err => {
    //         alert('erro')
    //         console.log(err)
    //       }
    //     )
    }
  },
  modules: {
  }
})
