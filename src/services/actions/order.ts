import { getOrderNumber } from "../../utils/api";
import { AppDispatch, AppThunk } from "../../utils/types";
export const GET_ORDER: "GET_ORDER" = "GET_ORDER";
export const GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED: "GET_ORDER_FAILED" = "GET_ORDER_FAILED";
export const CLOSE_ORDER_MODAL: "CLOSE_ORDER_MODAL" = "CLOSE_ORDER_MODAL";
export const OPEN_ORDER_MODAL: "OPEN_ORDER_MODAL" = "OPEN_ORDER_MODAL";

export interface ICloseOrderModal {
  readonly type: typeof CLOSE_ORDER_MODAL;
}

export interface IOpenOrderModal {
  readonly type: typeof OPEN_ORDER_MODAL;
}

export interface IGetOrder {
  readonly type: typeof GET_ORDER;
}

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly number: number;
}

export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
  readonly error: unknown;
}

export type TOrder =
  | ICloseOrderModal
  | IOpenOrderModal
  | IGetOrder
  | IGetOrderSuccess
  | IGetOrderFailed;

export const closeOrderModal = (): ICloseOrderModal => {
  return {
    type: CLOSE_ORDER_MODAL,
  };
};

export const openOrderModal = (): IOpenOrderModal => {
  return {
    type: OPEN_ORDER_MODAL,
  };
};

export const getOrderDetails:AppThunk = (order:Array<string>) => {
  return function (dispatch:AppDispatch) {
    dispatch({
      type: GET_ORDER,
    });
    getOrderNumber(order)
      .then((res) => {
        if (res.success === true) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            number: res.order.number,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
          error: err,
        });
      });
  };
};
