import { IWsOrder } from "../../utils/types";
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_FAILED,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  TWsActions,
} from "../actions/wsAction";

interface IInitialStateWs {
  message: IWsOrder[],
  isConnect: boolean,
  isError: boolean,
  total: null | number,
  totalToday: null | number
}

const initialState = {
  message: [],
  isConnect: false,
  isError: false,
  total: null,
  totalToday: null,
};

export function wsReducer(state = initialState, action:TWsActions):IInitialStateWs {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        isConnect: true,
      };
    case WS_CONNECTION_FAILED:
      return {
        ...state,
        isConnect: false,
        isError: true,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        isConnect: false,
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        message: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
}
