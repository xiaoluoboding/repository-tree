// index actions
export const setFullRepoName = makeAction('SET_FULLREPONAME')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
