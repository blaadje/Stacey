import { GET_DEPLOYS } from './constants'

const deploys = (state, action) => {
  switch (action.type) {
    case GET_DEPLOYS:
      return {
        ...state,
        deploys: action.deploys,
        currentDeploy: deploys[0],
      }

    default:
      return state
  }
}

export default deploys