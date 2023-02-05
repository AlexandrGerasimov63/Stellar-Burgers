import { GET_REGISTER } from "../actions/user"
import { REGISTER_SENDING_REQUEST } from "../actions/user"
import {REGISTER_SENDING_FAILED} from "../actions/user"
import { SUCCESS_FAILED } from "../actions/user"


const userInitialState = {

  hasError: false,
  name: '',
  email: '',
  password: '',
  error: '',
}

export const authReducer = (state= userInitialState, action) => {
  switch(action.type){
    case GET_REGISTER:
      return{
        ...state,
        [action.field]: action.value,
      }
    case REGISTER_SENDING_REQUEST:
      return{
        ...state,
        name: '',
        email: '',
        password: ''
      }
      default:{
        return state
      }

    case REGISTER_SENDING_FAILED:
      return{
        ...state,
        hasError: true,
        error: action.error,

      }
  }
}
