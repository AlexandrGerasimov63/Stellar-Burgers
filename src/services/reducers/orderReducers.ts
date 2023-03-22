import {GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILED, CLOSE_ORDER_MODAL, OPEN_ORDER_MODAL, TOrder} from '../actions/order'

interface IOrderInitialState {
  orderNumber: null | number,
  orderFailed: boolean,
  isLoading: boolean,
  hasError: boolean,
  error:string,
  modal: null | boolean
}

const orderInitialState = {
  orderNumber: null,
  orderFailed: false,
  isLoading: false,
  hasError: false,
  error:'',
  modal: null
}

export const orderReducer = (state=orderInitialState,action:TOrder):IOrderInitialState => {
  switch(action.type){
    case GET_ORDER:
      return{
        ...state,
        isLoading: true,
        orderFailed: false,
        hasError: false,
        error:''
      }
    case GET_ORDER_SUCCESS:
      return{
        ...state,
        isLoading: false,
        orderFailed: false,
        hasError: false,
        error:'',
        orderNumber: action.number
      }
    case GET_ORDER_FAILED:
      return{
        ...state,
        isLoading: false,
        orderFailed: true,
        hasError: true,
        error: action.error,
      }
    case OPEN_ORDER_MODAL:
      return{
        ...state,
        modal: true
      }
    case CLOSE_ORDER_MODAL:
      return{
        ...state,
        orderNumber: null,
        modal: null,
      }
    default: {
      return state
    }
  }
}
