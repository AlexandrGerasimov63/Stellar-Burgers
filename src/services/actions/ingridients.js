import {getIngredientsData} from '../../utils/api'


export const GET_INGRIDIENTS = 'GET_INGRIDIENTS';
export const GET_INGRIDIENTS_FAILED = 'GET_INGRIDIENTS_FAILED';
export const GET_INGRIDIENTS_SUCCESS = 'GET_INGRIDIENTS_SUCCESS';

export function getBurgerIngredients() {
	return function (dispatch) {
		dispatch({
			type: GET_INGRIDIENTS
		});
		getIngredientsData()
			.then((res) => {
				dispatch({
					type: GET_INGRIDIENTS_SUCCESS,
					ingredients: res.data
				});
			})
			.catch((err) => {
				dispatch({
					type: GET_INGRIDIENTS_FAILED,
          error: err
				});
			})
	};
}
