import { getRegistrationRecuest, getLoginRecuest, getResetPass, getRecoveryPass, getLogout,getUser, updateToken, updateUserInfo } from "../../utils/api";
import { deleteCookie, getCookie } from "../../utils/cookie";
export const GET_REGISTER = "GET_REGISTER";
export const REGISTER_SENDING_REQUEST = "REGISTER_SENDING_REQUEST";
export const REGISTER_SENDING_FAILED = "REGISTER_SENDING_FAILED";
export const SUCCESS_FAILED = "SUCCESS_FAILED";
export const LOGIN_FORM_VALUE = "LOGIN_FORM_VALUE";
export const LOGIN_FORM_REQUEST = "LOGIN_FORM_REQUEST";
export const LOGIN_FORM_FAILED = "LOGIN_FORM_FAILED";
export const RESET_FORM_VALUE = "RESET_FORM_VALUE";
export const RESET_FORM_REQUEST = "RESET_FORM_REQUEST"
export const RESET_FORM_FAILED = "RESET_FORM_FAILED";
export const RECOVERY_FORM_VALUE = 'RECOVERY_FORM_VALUE';
export const RECOVERY_FORM_REQUSET = 'RECOVERY_FORM_REQUSET';
export const RECOVERY_FORM_FAILED = 'RECOVERY_FORM_FAILED';
export const LOGOUT_SENDING_SUCCESS = 'LOGOUT_SENDING_SUCCESS';
export const LOGOUT_SENDING_FAILED = 'LOGOUT_SENDING_FAILED';
export const PROFILE_FORM_VALUE = 'PROFILE_FORM_VALUE';
export const PROFILE_SET= 'PROFILE_SET';
export const PROFILE_RESET_VALUE = 'PROFILE_RESET_VALUE';
export const GET_USER = 'GET_USER';
export const GET_USER_FAILED = "GET_USER_FAILED";
export const UPDATE_TOKEN_SUCCESS ="UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILIED = 'UPDATE_USER_FAILIED';

export function checkUser () {
  const token = getCookie("accessToken")
  return function (dispatch) {
    getUser(token)
    .then((res)=>{
      dispatch({
        type: GET_USER,
        data: res
      })

    })
    .catch((err)=>{
      dispatch({
        type: GET_USER_FAILED,
        error:err,
      })
      const token = localStorage.getItem("refreshToken")
      updateToken(token)
      .then((res)=>{
        dispatch({
          type: UPDATE_TOKEN_SUCCESS,
          data: res,
        })
      })
      .catch((err)=>{
        dispatch({
          type:UPDATE_TOKEN_FAILED,
          error: err
        })
      })
    })

  }
}

export function updateUser (name, email, pass) {
  const token = getCookie("accessToken");
  return function (dispatch) {
    updateUserInfo(name, email, pass, token)
    .then((res)=>{
      dispatch({
        type: UPDATE_USER_SUCCESS,
        data: res,
      })

    })
    .catch((err)=>{
      dispatch({
        type: UPDATE_USER_FAILIED,
        error: err,
      })
    })
  }
}

export function setFormValue(field, value) {
  return function (dispatch) {
    dispatch({
      type: GET_REGISTER,
      field,
      value,
    });
  };
}

export function setLoginValue(field, value) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_FORM_VALUE,
      field,
      value,
    });
  };
}

export function setResetValue(field,value) {
  return function (dispatch) {
    dispatch({
      type: RESET_FORM_VALUE,
      field,
      value,
    })
  }
}

export function setRecoveryValue(field, value) {
  return function (dispatch) {
    dispatch({
      type: RECOVERY_FORM_VALUE,
      field,
      value
    })
  }
}

export function setProfileValue(field,value) {
  return function (dispatch) {
    dispatch({
      type: PROFILE_FORM_VALUE,
      field,
      value
    })
  }
}

export function setProfile(){
  return function(dispatch){
  dispatch({
    type: PROFILE_SET
  })
  }
}

export function resetProfileValue(){
  return function(dispatch){
    dispatch({
      type: PROFILE_RESET_VALUE
    })
  }
}

export function login(email, pass) {
  return function (dispatch) {
    getLoginRecuest(email, pass)
      .then((res) => {
        dispatch({
          type: LOGIN_FORM_REQUEST,
          data: res,
        });

      })
      .catch((err) => {

        dispatch({
          type: LOGIN_FORM_FAILED,
          error: err,
        });
      });
  };
}

export function registration(name, email, pass) {
  return function (dispatch) {
    getRegistrationRecuest(name, email, pass)
      .then((res) => {
        dispatch({
          type: REGISTER_SENDING_REQUEST,
          data: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_SENDING_FAILED,
          error: err,
        });
      });
  };
}

export function resetPass(email){
  return function (dispatch) {
    getResetPass(email)
      .then(()=>{
        dispatch({
          type: RESET_FORM_REQUEST
        })
      })
      .catch((err)=>{
        dispatch({
          type: RESET_FORM_FAILED,
          error: err
        })
      })
  }
}

export function recoveryPass(pass, code){
  return function (dispatch) {
    getRecoveryPass(pass, code)
    .then(()=>{
      dispatch({
        type: RECOVERY_FORM_REQUSET
      })
    })
    .catch((err)=>{
      dispatch({
        type: RECOVERY_FORM_FAILED,
        error: err
      })
    })
  }
}

export function logout() {
  return function(dispatch) {
      getLogout()
      .then(() => {
        deleteCookie('accessToken')
        localStorage.removeItem("refreshToken")
      })
      .then(() => {
          dispatch({
              type: LOGOUT_SENDING_SUCCESS,
          })
      })
      .catch((err) => {
          dispatch({
              type: LOGOUT_SENDING_FAILED,
              error:err
          })
      })
  }
}
