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
  repoLink: '',
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
    let rootTree = []
    // set rootBlob
    let rootBlobArray = filter(repoTree, function(obj) {
      return !obj.path.includes('/') && obj.type == 'blob'
    })
    let rootBlob = {}
    for (let i in rootBlobArray) {
      rootBlob[rootBlobArray[i].path] = null
    }
    // console.dir(rootBlob)

    let rootTreeArray = filter(repoTree, function(obj) {
      return obj.type == 'tree'
    })

    let treeArray = {}
    for (var i in rootTreeArray) {
      if (rootTreeArray.hasOwnProperty(i)) {

      }
    }

    let childBlobArray = filter(repoTree, function(obj) {
      return obj.path.includes('/') && obj.type == 'blob'
    })

    let childArray = {}
    for (var i in childBlobArray) {
      if (childBlobArray.hasOwnProperty(i)) {
        let treeParent = childBlobArray[i].path.split('\/').shift()
        let treeChild = childBlobArray[i].path.split('\/').pop()
        console.log(childBlobArray[i].path)
        console.log(treeChild)
        childArray[treeChild] = null
      }
    }
    console.log(childArray)
    // set rootTree
    rootTree.push(rootBlob)
    state.repoTree = treeify.asTree(rootTree)
  }
}

export default {
  state,
  mutations
}
