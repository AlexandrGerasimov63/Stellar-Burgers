import {getOrderNumber} from '../../utils/api'


export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';
export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';

export const closeOrderModal = () => {
  return {
    type: CLOSE_ORDER_MODAL
  }
}

export const openOrderModal = () => {
  return {
    type: OPEN_ORDER_MODAL
  }
}

export const getOrderDetails = (order) => {
  return function (dispatch) {
		dispatch({
			type: GET_ORDER
		});
		getOrderNumber(order)
			.then((res) => {
				dispatch({
					type: GET_ORDER_SUCCESS,
					number: res.order.number
				});
			})
			.catch((err) => {
				dispatch({
					type: GET_ORDER_FAILED,
          error: err
				});
			})
	};
}
