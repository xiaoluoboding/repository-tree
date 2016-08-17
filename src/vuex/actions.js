// index actions
export const setRepoLink = makeAction('SET_REPOLINK')
export const setRepoTree = makeAction('SET_REPOTREE')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
