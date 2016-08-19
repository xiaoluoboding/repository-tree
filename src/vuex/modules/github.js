// vuex/modules/main.js
import {
  SET_REPOLINK,
  SET_REPOTREE
} from '../mutation-types'
import {
  filter
} from 'lodash'
import treeify from 'treeify'


// initial state
const state = {
  siteLink: 'https://github.com/',
  repoLink: 'https://github.com/xiaoluoboding/vue-stroll',
  userName: '',
  repoName: '',
  repoTree: []
}

// mutations
const mutations = {
  [SET_REPOLINK](state, repoLink) {
    const parsedUrl = /^(\w+)\:\/\/([^\/]+)\/([^\/]+)\/(.*)$/.exec(repoLink)
    const [, , , userName, repoName] = parsedUrl

    state.repoLink = repoLink
    state.userName = userName
    state.repoName = repoName
  },
  [SET_REPOTREE](state, repoTree) {
    let perttyTree = {}

    // set rootTree
    let rootTreeArray = filter(repoTree, (obj) => !obj.path.includes('/') && obj.type == 'tree')
    let rootTree = {}
    for (let i in rootTreeArray) {
      if (rootTreeArray.hasOwnProperty(i)) {
        rootTree[rootTreeArray[i].path] = []
      }
    }

    // console.log(rootTree);

    // set rootBlob
    let rootBlobArray = filter(repoTree, (obj) => !obj.path.includes('/') && obj.type == 'blob')
    let rootBlob = {}
    for (let i in rootBlobArray) {
      if (rootBlobArray.hasOwnProperty(i)) {
        rootBlob[rootBlobArray[i].path] = null
      }
    }

    // console.log(rootBlob);

    // iterate childBlob
    let childBlobArray = filter(repoTree, (obj) => obj.path.includes('/') && obj.type == 'blob')
    for (var i in childBlobArray) {
      if (childBlobArray.hasOwnProperty(i)) {
        let treeParent = childBlobArray[i].path.split('\/').shift()
        let treeChild = childBlobArray[i].path.split('\/').pop()
        for (var i in rootTreeArray) {
          if (rootTreeArray.hasOwnProperty(i) && rootTreeArray[i].path == treeParent) {
            rootTree[treeParent][treeChild] = null
          }
        }
      }
    }

    // set perttyTree
    perttyTree = _.merge(rootTree, rootBlob)
    console.log(perttyTree);
    state.repoTree = treeify.asTree(perttyTree)
  }
}

export default {
  state,
  mutations
}
