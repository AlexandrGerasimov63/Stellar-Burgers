
import { getRegistrationRecuest, getLoginRecuest } from "../../utils/api";
export const GET_REGISTER = "GET_REGISTER";
export const REGISTER_SENDING_REQUEST = "REGISTER_SENDING_REQUEST";
export const REGISTER_SENDING_FAILED = "REGISTER_SENDING_FAILED";
export const SUCCESS_FAILED = "SUCCESS_FAILED"
export const LOGIN_FORM_VALUE = 'LOGIN_FORM_VALUE'
export const LOGIN_FORM_REQUEST = 'LOGIN_FORM_REQUEST'
export const LOGIN_FORM_FAILED = 'LOGIN_FORM_FAILED'


export function setFormValue(field, value) {
  return function (dispatch) {
    dispatch({
      type: GET_REGISTER,
      field,
      value,
    });
  };
}

export function setLoginValue(field,value) {
  return function(dispatch) {
    dispatch({
      type: LOGIN_FORM_VALUE,
      field,
      value
    })
  }
}

export function login(email, pass) {
  return function (dispatch) {
    getLoginRecuest(email,pass)
    .then((res)=>{

      dispatch({
        type: LOGIN_FORM_REQUEST
      })
      console.log(res)
    })
    .catch((err)=> {
      dispatch({
        type: LOGIN_FORM_FAILED,
        error: err
      })
    })
  }
}


export function registration(name, email, pass) {
  return function (dispatch) {
    getRegistrationRecuest(name, email, pass)
      .then(() => {

        dispatch({
          type: REGISTER_SENDING_REQUEST,

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
