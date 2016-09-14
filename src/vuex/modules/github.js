// vuex/modules/main.js
import {
  SET_REPOLINK,
  SET_REPOTREE
} from '../mutation-types'
import _ from 'lodash'
import treeify from 'treeify'


// initial state
const state = {
  siteLink: 'https://github.com/',
  repoLink: 'https://github.com/xiaoluoboding/repository-tree',
  userName: '',
  repoName: '',
  repoTree: [],
  rootTree: ''
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
    const self = this

    // ES6 lambda calculus
    const Y = f =>
      (x => f(y => x(x)(y)))
      (x => f(y => x(x)(y)))

    // filter repoTree
    const resolve = _.partial(_.map, _, 'path')
    let rootTreeArray = resolve(_.filter(repoTree, (obj) => obj.type == 'tree'))
    let otherBlobArray = resolve(_.filter(repoTree, (obj) => obj.path.includes('/') && obj.type == 'blob'))
    let rootBlobArray = resolve(_.filter(repoTree, (obj) => !obj.path.includes('/') && obj.type == 'blob'))

    // Build nesting directory
    function parse(arr) {
      return arr.reduceRight((result, key) => ({[key]: result}), null)
    }

    let treeArray = []
    const walkPath = Y(
      f => (rootTreeArray) => {
        let fullPath = _.nth(rootTreeArray, 0)
        let parsePath = _.split(fullPath, '/')

        treeArray.push(parse(parsePath))

        rootTreeArray.shift()
        _.size(rootTreeArray) == 0 ? 1 : f(rootTreeArray)
      }
    )
    walkPath(_.concat(rootTreeArray, otherBlobArray))

    let rootTree = _.reduce(treeArray, function(result, value, key) {
      return _.merge(result, value);
    }, {});


    let rootBlob = _.reduce(rootBlobArray, function(result, value, key) {
      return _.merge(result, {[value]: key})
    }, {});

    let prettyTree = _.merge(rootTree, rootBlob)

    state.repoTree = treeify.asTree(prettyTree)
  }
}

export default {
  state,
  mutations
}
