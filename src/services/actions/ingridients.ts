import { getIngredientsData } from "../../utils/api";
import { AppDispatch, AppThunk, IIngredientType } from "../../utils/types";
export const GET_INGRIDIENTS: "GET_INGRIDIENTS" = "GET_INGRIDIENTS";
export const GET_INGRIDIENTS_FAILED: "GET_INGRIDIENTS_FAILED" =
  "GET_INGRIDIENTS_FAILED";
export const GET_INGRIDIENTS_SUCCESS: "GET_INGRIDIENTS_SUCCESS" =
  "GET_INGRIDIENTS_SUCCESS";

export interface IGetIngridients {
  readonly type: typeof GET_INGRIDIENTS;
}
export interface IGetIngridientsSuccess {
  readonly type: typeof GET_INGRIDIENTS_SUCCESS;
  readonly ingredients: Array<IIngredientType>;
}

export interface IGetIngridientsFailed {
  readonly type: typeof GET_INGRIDIENTS_FAILED;
  readonly error: string;
}

export type TIngridient =
  | IGetIngridients
  | IGetIngridientsSuccess
  | IGetIngridientsFailed;

export const getBurgerIngredients:AppThunk = () => {
  return function (dispatch:AppDispatch) {
    dispatch({
      type: GET_INGRIDIENTS,
    });
    getIngredientsData()
      .then((res) => {
        if (res.success === true) {
          dispatch({
            type: GET_INGRIDIENTS_SUCCESS,
            ingredients: res.data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_INGRIDIENTS_FAILED,
          error: err,
        });
      });
  };
}
