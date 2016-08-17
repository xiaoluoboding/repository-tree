// vuex/modules/main.js
import { SET_FULLREPONAME } from '../mutation-types'

// 该模块的初始状态
const state = {
  fullRepoName: ''
}

// 相关的 mutations
const mutations = {
  [SET_FULLREPONAME] (state, fullRepoName) {
    state.fullRepoName = fullRepoName
  }
}

export default {
  state,
  mutations
}
