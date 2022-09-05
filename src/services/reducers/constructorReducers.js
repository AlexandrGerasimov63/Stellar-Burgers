import {
  ADD_INGRIDIENT,
  ADD_INGRIDIENT_BUN,
  DELETE_INGRIDIENT,
} from "../actions/constructor";

const InitialState = {
  items: [],
  bun: false,
}

export const constructorReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_INGRIDIENT:
      return {
        ...state,
        items: [...state.items, action.data],
      };
    case ADD_INGRIDIENT_BUN:{
      return{
        ...state,
        bun: action.data
      }

    }
    case DELETE_INGRIDIENT:
      return {
        ...state,
        items: [...state.items].filter((item) => item.id !== action.id),
      };
      default: {
        return state
      }
  }
};
