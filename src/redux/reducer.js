import {combineReducers} from 'redux'
import {RECEIVE_NAVLIST} from './action-types'


function GethomeNavdata(state='', action) {
  switch (action.type) {
    case RECEIVE_NAVLIST:
      return action.data
    default:return state
  }
}


export default combineReducers({
  GethomeNavdata
})
