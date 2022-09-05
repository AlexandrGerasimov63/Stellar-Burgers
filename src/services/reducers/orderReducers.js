import {GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILED, CLOSE_ORDER_MODAL} from '../actions/order'

const orderInitialState = {
  orderNumber: null,
  orderFailed: false,
  isLoading: false,
  hasError: false,
  error:''
}

export const orderReducer = (state=orderInitialState,action) => {
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
    case CLOSE_ORDER_MODAL:
      return{
        ...state,
        orderNumber: null
      }
    default: {
      return state
    }
  }
}
