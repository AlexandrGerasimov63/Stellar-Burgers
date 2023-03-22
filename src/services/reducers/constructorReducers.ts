import { IIngredientType } from "../../utils/types";
import {
  ADD_INGRIDIENT,
  ADD_INGRIDIENT_BUN,
  DELETE_INGRIDIENT,
  MOVE_INGRIDIENT,
  TConstructor,
} from "../actions/constructor";

export interface IInitialConstructorState{
  items: IIngredientType[],
  bun: IIngredientType | boolean
}

const InitialState:IInitialConstructorState = {
  items: [],
  bun: false,
};

export const constructorReducer = (state = InitialState, action:TConstructor):IInitialConstructorState => {
  switch (action.type) {
    case ADD_INGRIDIENT:
      return {
        ...state,
        items: [...state.items, action.data],

      };
    case ADD_INGRIDIENT_BUN: {
      return {
        ...state,
        bun: action.data,
        };
    }
    case DELETE_INGRIDIENT:
      return {
        ...state,

        items: [...state.items].filter((item) => item.id !== action.id),
      };
      case MOVE_INGRIDIENT: {

        const dataConstructor = state.items;
        const drug = action.data.dragIndex;
        const hover = action.data.hoverIndex;

        const temp = dataConstructor[drug]
        dataConstructor[drug]=dataConstructor[hover]
        dataConstructor[hover]=temp


        return {
          ...state,
          items: [...dataConstructor]
        };
      }
		default: {
      return state;
    }
  }
};

