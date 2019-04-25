import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
  currentDeploy: {},
  deploys: [],
  notification: false,
  pellet: true,
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
)

export default store
