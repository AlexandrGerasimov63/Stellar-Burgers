import { IIngredientType } from "../../utils/types";
import {
  GET_INGRIDIENTS,
  GET_INGRIDIENTS_FAILED,
  GET_INGRIDIENTS_SUCCESS,
  TIngridient,
} from "../actions/ingridients";


interface IIngredientInitialState {
  ingridients: IIngredientType[]
  ingridientsRequest: boolean,
  ingridientsFailed: boolean,
  isLoading: boolean,
  hasError: boolean,
  error:string
}

const ingridientsInitialState:IIngredientInitialState = {
  ingridients: [],
  ingridientsRequest: false,
  ingridientsFailed: false,
  isLoading: false,
  hasError: false,
  error:''
};

export const ingridientsReducer = (state = ingridientsInitialState, action:TIngridient):IIngredientInitialState => {
  switch (action.type) {
    case GET_INGRIDIENTS:
      return {
        ...state,
        ingridientsRequest: true,
        ingridientsFailed: false,
        hasError: false,
        isLoading: true,
        error: "",
      };
    case GET_INGRIDIENTS_FAILED:
      return {
        ...state,
        ingridientsRequest: false,
        ingridientsFailed: true,
        hasError: true,
        isLoading: false,
        error: action.error,
      };
    case GET_INGRIDIENTS_SUCCESS:
      return {
        ...state,
        ingridients: action.ingredients,
        ingridientsRequest: false,
        ingridientsFailed: false,
        hasError: false,
        isLoading: false,
        error: "",
      };
    default: {
      return state;
    }
  }
};
