import { getRegistrationRecuest } from "../../utils/api";
export const GET_REGISTER = "GET_REGISTER";
export const REGISTER_SENDING_REQUEST = "REGISTER_SENDING_REQUEST";
export const REGISTER_SENDING_FAILED = "REGISTER_SENDING_FAILED";
export const SUCCESS_FAILED = "SUCCESS_FAILED"
export function setFormValue(field, value) {
  return function (dispatch) {
    dispatch({
      type: GET_REGISTER,
      field,
      value,
    });
  };
}

export function registration(name, email, pass) {
  return function (dispatch) {
    getRegistrationRecuest(name, email, pass)
      .then(() => {
        dispatch({
          type: REGISTER_SENDING_REQUEST,

        });
      })
      .catch((err,) => {

        dispatch({
          type: REGISTER_SENDING_FAILED,
          error: err,
        });
      });
  };
}
