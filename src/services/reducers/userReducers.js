import {
  GET_REGISTER,
  RESET_FORM_FAILED,
  RESET_FORM_REQUEST,
  RECOVERY_FORM_VALUE,
  RECOVERY_FORM_REQUSET,
  RECOVERY_FORM_FAILED,
  LOGOUT_SENDING_SUCCESS,
  LOGOUT_SENDING_FAILED,
  PROFILE_FORM_VALUE,
  PROFILE_SET,
  PROFILE_RESET_VALUE,
  GET_USER,
  GET_USER_FAILED,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILIED,
  TOGGLE_NAME,
  TOGGLE_EMAIL,
  TOGGLE_PASS,
} from "../actions/user";
import { REGISTER_SENDING_REQUEST } from "../actions/user";
import { REGISTER_SENDING_FAILED } from "../actions/user";
import { LOGIN_FORM_VALUE } from "../actions/user";
import { LOGIN_FORM_REQUEST } from "../actions/user";
import { LOGIN_FORM_FAILED } from "../actions/user";
import { RESET_FORM_VALUE } from "../actions/user";
import { setCookie } from "../../utils/cookie";


const userInitialState = {
  hasError: false,
  name: "",
  email: "",
  password: "",
  error: "",
  userName: "",
  userEmail: "",
  userPassword: "",
  isLogin: false,
  resetPass: false,
  code: "",
  recoveryPass: false,
  nameInput: false,
  emailInput: false,
  passInput: false,
};

export const authReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case GET_REGISTER:
      return {
        ...state,
        [action.field]: action.value,
      };
    case REGISTER_SENDING_REQUEST:
      const accessToken = action.data.accessToken.split("Bearer ")[1];
      const refreshToken = action.data.refreshToken;
      setCookie("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return {
        ...state,
        name: "",
        email: "",
        userName: action.data.user.name,
        userEmail: action.data.user.email,
        userPassword: state.password,
        password: "",
        hasError: false,
        error: "",
        isLogin: true,
      };

    case REGISTER_SENDING_FAILED:
      return {
        ...state,
        hasError: true,
        error: action.error,
      };
    case LOGIN_FORM_VALUE:
      return {
        ...state,
        hasError: false,
        [action.field]: action.value,
      };
    case LOGIN_FORM_REQUEST:
      const accessTokenLogin = action.data.accessToken.split("Bearer ")[1];
      const refreshTokenLogin = action.data.refreshToken;
      localStorage.setItem("refreshToken", refreshTokenLogin);
      setCookie("accessToken", accessTokenLogin);
      return {
        ...state,
        email: "",
        hasError: false,
        error: "",
        userName: action.data.user.name,
        userEmail: action.data.user.email,
        userPassword: state.password,
        isLogin: true,
        password: "",
      };
    case LOGIN_FORM_FAILED:
      return {
        ...state,
        hasError: true,
        error: action.error,
      };
    case RESET_FORM_VALUE:
      return {
        ...state,
        hasError: false,
        [action.field]: action.value,
      };
    case RESET_FORM_REQUEST:
      return {
        ...state,
        hasError: false,
        resetPass: true,
        email: "",
        recoveryPass: false,
      };
    case RESET_FORM_FAILED:
      return {
        ...state,
        hasError: true,
        error: action.error,
      };
    case RECOVERY_FORM_VALUE:
      return {
        ...state,
        hasError: false,
        [action.field]: action.value,
      };
    case RECOVERY_FORM_REQUSET:
      return {
        ...state,
        userPassword: state.password,
        hasError: false,
        password: "",
        code: "",
        recoveryPass: true,
        resetPass: false,
      };
    case RECOVERY_FORM_FAILED:
      return {
        ...state,
        hasError: true,
        error: action.error,
      };
    case LOGOUT_SENDING_SUCCESS:
      return {
        ...state,
        hasError: false,
        isLogin: false,
        recoveryPass: false,
        resetPass: false,
      };
    case LOGOUT_SENDING_FAILED:
      return {
        ...state,
        hasError: true,
        error: action.error,
      };
    case PROFILE_SET:
      return{
        ...state,
        name:state.userName,
        email:state.userEmail,
        password:state.userPassword
      }
    case PROFILE_FORM_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case PROFILE_RESET_VALUE:
      return{
        ...state,
        name:state.userName,
        email:state.userEmail,
        password:state.userPassword,
        nameInput: false,
        emailInput: false,
        passInput: false,
      }
    case GET_USER:
      return{
        ...state,
        userName: action.data.user.name,
        userEmail: action.data.user.email,
        isLogin: true,
      }
    case GET_USER_FAILED:
      return{
        ...state,
        hasError: true,
        error: action.error,
      }
    case UPDATE_TOKEN_SUCCESS:
      const updateToken = action.data.refreshToken;
      const updataCookie = action.data.accessToken.split("Bearer ")[1];
      localStorage.setItem("refreshToken", updateToken);
      setCookie("accessToken", updataCookie)
      return{
        ...state,
        isLogin: true
      }
    case UPDATE_TOKEN_FAILED:
      return{
        ...state,
        isLogin: false,
        hasError:true,
        error: action.error,
      }
    case UPDATE_USER_SUCCESS:
      return{
        ...state,
        isLogin: true,
        userName: action.data.user.name,
        userEmail:action.data.user.email,
        hasError: false,
        nameInput: false,
        emailInput: false,
        passInput: false,
      }
    case UPDATE_USER_FAILIED:
      return{
        ...state,
        hasError: true,
        error: action.error,
      }
    case TOGGLE_NAME:
      return{
        ...state,
        nameInput: !state.nameInput
      }
    case TOGGLE_EMAIL:
      return{
        ...state,
        emailInput: !state.emailInput
      }
    case TOGGLE_PASS:
      return{
        ...state,
        passInput: !state.passInput
      }
    default: {
      return state;
    }
  }
};
