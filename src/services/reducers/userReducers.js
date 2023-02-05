import { GET_REGISTER } from "../actions/user"
import { REGISTER_SENDING_REQUEST } from "../actions/user"
import {REGISTER_SENDING_FAILED} from "../actions/user"
import {LOGIN_FORM_VALUE} from '../actions/user'
import { LOGIN_FORM_REQUEST } from "../actions/user"
import { LOGIN_FORM_FAILED } from "../actions/user"

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
    case LOGIN_FORM_VALUE:
      return{
        ...state,
        hasError: false,
        [action.field]: action.value
      }
    case LOGIN_FORM_REQUEST:
      return{
        ...state,
        email: '',
        password: ''
      }
    case LOGIN_FORM_FAILED:
      return{
        ...state,
        hasError: true,
        error: action.error,
      }
  }
}
