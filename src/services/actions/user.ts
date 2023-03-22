import { getRegistrationRecuest, getLoginRecuest, getResetPass, getRecoveryPass, getLogout,getUser, updateToken, updateUserInfo } from "../../utils/api";
import { deleteCookie, getCookie } from "../../utils/cookie";
import { AppDispatch, AppThunk, IUserInfo, IUpdateToken, IUpdateUser } from "../../utils/types";
export const GET_REGISTER:"GET_REGISTER" = "GET_REGISTER";
export const REGISTER_SENDING_REQUEST:"REGISTER_SENDING_REQUEST" = "REGISTER_SENDING_REQUEST";
export const REGISTER_SENDING_FAILED:"REGISTER_SENDING_FAILED" = "REGISTER_SENDING_FAILED";
export const SUCCESS_FAILED:"SUCCESS_FAILED" = "SUCCESS_FAILED";
export const LOGIN_FORM_VALUE:"LOGIN_FORM_VALUE" = "LOGIN_FORM_VALUE";
export const LOGIN_FORM_REQUEST:"LOGIN_FORM_REQUEST" = "LOGIN_FORM_REQUEST";
export const LOGIN_FORM_FAILED:"LOGIN_FORM_FAILED" = "LOGIN_FORM_FAILED";
export const RESET_FORM_VALUE:"RESET_FORM_VALUE" = "RESET_FORM_VALUE";
export const RESET_FORM_REQUEST:"RESET_FORM_REQUEST" = "RESET_FORM_REQUEST";
export const RESET_FORM_FAILED:"RESET_FORM_FAILED" = "RESET_FORM_FAILED";
export const RECOVERY_FORM_VALUE:'RECOVERY_FORM_VALUE' = 'RECOVERY_FORM_VALUE';
export const RECOVERY_FORM_REQUSET:'RECOVERY_FORM_REQUSET' = 'RECOVERY_FORM_REQUSET';
export const RECOVERY_FORM_FAILED:'RECOVERY_FORM_FAILED' = 'RECOVERY_FORM_FAILED';
export const LOGOUT_SENDING_SUCCESS:'LOGOUT_SENDING_SUCCESS' = 'LOGOUT_SENDING_SUCCESS';
export const LOGOUT_SENDING_FAILED:'LOGOUT_SENDING_FAILED' = 'LOGOUT_SENDING_FAILED';
export const PROFILE_FORM_VALUE:'PROFILE_FORM_VALUE' = 'PROFILE_FORM_VALUE';
export const PROFILE_SET:'PROFILE_SET'= 'PROFILE_SET';
export const PROFILE_RESET_VALUE:'PROFILE_RESET_VALUE' = 'PROFILE_RESET_VALUE';
export const GET_USER:'GET_USER' = 'GET_USER';
export const GET_USER_FAILED:"GET_USER_FAILED" = "GET_USER_FAILED";
export const UPDATE_TOKEN_SUCCESS:"UPDATE_TOKEN_SUCCESS" ="UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_FAILED:'UPDATE_TOKEN_FAILED' = 'UPDATE_TOKEN_FAILED';
export const UPDATE_USER_SUCCESS:'UPDATE_USER_SUCCESS' = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILIED:'UPDATE_USER_FAILIED' = 'UPDATE_USER_FAILIED';
export const TOGGLE_NAME:'TOGGLE_NAME' = 'TOGGLE_NAME';
export const TOGGLE_EMAIL:'TOGGLE_EMAIL' = 'TOGGLE_EMAIL';
export const TOGGLE_PASS:'TOGGLE_PASS' = 'TOGGLE_PASS';

export type TUser =
|IGetUser
|IGetUserFailed
|IUpdateTokenSuccess
|IUpdateTokenFailed
|IUpdateUserSuccess
|IUpdateUserFailed
|IGetRegisterForm
|ILoginFormValue
|IResetFormValue
|IRecoveryFormValue
|IProfileFormValue
|IProfileSet
|IProfileResetValue
|ILoginFormRequest
|ILoginFormFailed
|IRegisterSendingRequst
|IRegisterSendingFailed
|IResetFormRequest
|IResetFormFailed
|IRecoveryFormRequst
|IRecoveryFormFailed
|ILogoutSendingSuccess
|ILogoutSendingFailed
|IToggleInputName
|IToggleInputEmail
|IToggleInputPass

export interface IGetUser {
  readonly type: typeof GET_USER
  data: IUserInfo
}
export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED
  error: string
}

export interface IUpdateTokenSuccess {
  readonly type: typeof UPDATE_TOKEN_SUCCESS
  data: IUpdateToken
}

export interface IUpdateTokenFailed {
  readonly type: typeof UPDATE_TOKEN_FAILED,
  error: string
}

export const checkUser:AppThunk = () => {
  const token = getCookie("accessToken")
  return function (dispatch:AppDispatch) {
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

export interface IUpdateUserSuccess {
  readonly type: typeof UPDATE_USER_SUCCESS,
  data: IUserInfo
}

export interface IUpdateUserFailed {
  readonly type: typeof UPDATE_USER_FAILIED,
  error: string
}

export const updateUser:AppThunk = (name:string, email:string, pass:string) => {
  const token = getCookie("accessToken");
  return function (dispatch:AppDispatch) {
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

export interface IGetRegisterForm {
  readonly type: typeof GET_REGISTER,
  field: string,
  value: string
}

export const setFormValue:AppThunk =(field:string, value:string) => {
  return function (dispatch:AppDispatch) {
    dispatch({
      type: GET_REGISTER,
      field,
      value,
    });
  };
}

export interface ILoginFormValue {
  readonly type: typeof LOGIN_FORM_VALUE,
  field: string,
  value: string
}

export const setLoginValue:AppThunk = (field:string, value:string) =>{
  return function (dispatch:AppDispatch) {
    dispatch({
      type: LOGIN_FORM_VALUE,
      field,
      value,
    });
  };
}

export interface IResetFormValue {
  readonly type: typeof RESET_FORM_VALUE,
  field: string,
  value: string
}

export const setResetValue:AppThunk =(field:string,value:string) => {
  return function (dispatch:AppDispatch) {
    dispatch({
      type: RESET_FORM_VALUE,
      field,
      value,
    })
  }
}

export interface IRecoveryFormValue {
  readonly type: typeof RECOVERY_FORM_VALUE,
  field: string,
  value: string
}

export const setRecoveryValue:AppThunk=(field:string, value:string) => {
  return function (dispatch:AppDispatch) {
    dispatch({
      type: RECOVERY_FORM_VALUE,
      field,
      value
    })
  }
}

export interface IProfileFormValue{
  readonly type: typeof PROFILE_FORM_VALUE,
  field: string,
  value: string
}

export const setProfileValue:AppThunk =(field:string,value:string) => {
  return function (dispatch:AppDispatch) {
    dispatch({
      type: PROFILE_FORM_VALUE,
      field,
      value
    })
  }
}

export interface IProfileSet {
  readonly type: typeof PROFILE_SET
}

export const setProfile:AppThunk =()=>{
  return function(dispatch:AppDispatch){
  dispatch({
    type: PROFILE_SET
  })
  }
}

export interface IProfileResetValue {
  readonly type: typeof PROFILE_RESET_VALUE
}

export const resetProfileValue:AppThunk =()=>{
  return function(dispatch:AppDispatch){
    dispatch({
      type: PROFILE_RESET_VALUE
    })
  }
}

export interface ILoginFormRequest {
  readonly type: typeof LOGIN_FORM_REQUEST,
  data: IUserInfo
}

export interface ILoginFormFailed {
  readonly type: typeof LOGIN_FORM_FAILED,
  error: string
}

export const login:AppThunk = (email:string, pass:string) => {
  return function (dispatch:AppDispatch) {
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

export interface IRegisterSendingRequst {
  readonly type: typeof REGISTER_SENDING_REQUEST,
  data: IUserInfo
}
export interface IRegisterSendingFailed {
  readonly type: typeof REGISTER_SENDING_FAILED,
  error: string
}

export const registration:AppThunk = (name:string, email:string, pass:string) => {
  return function (dispatch:AppDispatch) {
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

export interface IResetFormRequest {
  readonly type: typeof RESET_FORM_REQUEST,
}
export interface IResetFormFailed{
  readonly type: typeof RESET_FORM_FAILED,
  error: string
}

export const resetPass:AppThunk = (email:string) => {
  return function (dispatch:AppDispatch) {
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

export interface IRecoveryFormRequst {
  readonly type: typeof RECOVERY_FORM_REQUSET
}

export interface IRecoveryFormFailed {
  readonly type: typeof RECOVERY_FORM_FAILED,
  error: string
}

export const recoveryPass:AppThunk = (pass:string, code:string) => {
  return function (dispatch:AppDispatch) {
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

export interface ILogoutSendingSuccess {
  readonly type: typeof LOGOUT_SENDING_SUCCESS
}
export interface ILogoutSendingFailed {
  readonly type: typeof LOGOUT_SENDING_FAILED,
  error: string
}

export const logout:AppThunk = () => {
  return function(dispatch:AppDispatch) {
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

export interface IToggleInputName {
  readonly type: typeof TOGGLE_NAME
}
export interface IToggleInputEmail {
  readonly type: typeof TOGGLE_EMAIL
}
export interface IToggleInputPass {
  readonly type: typeof TOGGLE_PASS
}

export const toggleInputName = ():IToggleInputName => {
  return{
    type: TOGGLE_NAME
  }
}
export const toggleInputEmail = ():IToggleInputEmail => {
  return{
    type: TOGGLE_EMAIL
  }
}

export const toggleInputPass = ():IToggleInputPass => {
  return{
    type: TOGGLE_PASS
  }
}
