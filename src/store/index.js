import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowAnswer: null,
    answerList: []
  },
  mutations: {
    pushNowAnswer (state, answer) {
      state.nowAnswer = answer
    },
    addAnswer (state) {
      const truely = state.nowAnswer
      state.answerList.push(truely)
      this.commit('pushNowAnswer', null)
    }
  },
  actions: {
  },
  modules: {
  }
})
