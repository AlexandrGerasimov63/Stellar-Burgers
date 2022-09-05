import {
  GET_INGRIDIENTS,
  GET_INGRIDIENTS_FAILED,
  GET_INGRIDIENTS_SUCCESS,
} from "../actions/ingridients";

const ingridientsInitialState = {
  ingridients: [],
  ingridientsRequest: false,
  ingridientsFailed: false,
  isLoading: false,
  hasError: false,
  error:''
};

export const ingridientsReducer = (state = ingridientsInitialState, action) => {
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
