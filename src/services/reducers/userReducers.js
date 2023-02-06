import { GET_REGISTER } from "../actions/user"
import { REGISTER_SENDING_REQUEST } from "../actions/user"
import {REGISTER_SENDING_FAILED} from "../actions/user"
import {LOGIN_FORM_VALUE} from '../actions/user'
import { LOGIN_FORM_REQUEST } from "../actions/user"
import { LOGIN_FORM_FAILED } from "../actions/user"
import { setCookie } from "../../utils/cookie"
const userInitialState = {

  hasError: false,
  name: '',
  email: '',
  password: '',
  error: '',
  userName: '',
  userEmail: '',
  userPassword: '',
  isLogin: false
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
      const accessToken = action.data.accessToken.split("Bearer ")[1];
      const refreshToken = action.data.refreshToken;
      setCookie("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return{
        ...state,
        email: '',
        hasError: false,
        error: '',
        userName: action.data.user.name,
        userEmail: action.data.user.email,
        userPassword: state.password,
        isLogin: true,
        password: '',
      }
    case LOGIN_FORM_FAILED:
      return{
        ...state,
        hasError: true,
        error: action.error,
      }
  }
}
