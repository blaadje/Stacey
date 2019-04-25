import {
  GET_DEPLOYS,
  TOGGLE_NOTIFICATIONS,
  TOGGLE_PELLET
} from './constants'

const deploys = (state, action) => {
  switch (action.type) {
    case GET_DEPLOYS:
      return {
        ...state,
        deploys: action.deploys,
        currentDeploy: action.deploys[0],
      }
    case TOGGLE_NOTIFICATIONS:
      return {
        ...state,
        notification: !state.notification
      }
    case TOGGLE_PELLET:
      return {
        ...state,
        pellet: !state.pellet
      }

    default:
      return state
  }
}

export default deploys