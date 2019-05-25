import {RECEIVE_NAVLIST, SHOW_ERROR_MSG} from './action-types'
import {reqhomeData} from '../api'

export const receivenavlist = (navList) => ({type: RECEIVE_NAVLIST, data: navList})
export const showErrorMsg = (errorMsg) => ({type: SHOW_ERROR_MSG, errorMsg})
export const navList = () => {
  return async dispatch => {
    const result = await reqhomeData()
    if (result.status === 0) {
      const navdata = result.data
      dispatch(receivenavlist(navdata))
    } else {
      const msg = result.msg
      dispatch(showErrorMsg(msg))
    }
  }

}


