import { useRouterHistory } from 'react-router'
import { createHistory, createHashHistory } from 'history'

export const history = (__DEV__) ? useRouterHistory(createHistory)()
                                 : useRouterHistory(createHashHistory)()

// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange (location = '/') {
  return {
    type    : LOCATION_CHANGE,
    payload : location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}

export const refresh = () => {
  const location = history.getCurrentLocation()
  history.replace(location)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function locationReducer (state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state
}
