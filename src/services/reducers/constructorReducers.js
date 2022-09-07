import {
  ADD_INGRIDIENT,
  ADD_INGRIDIENT_BUN,
  DELETE_INGRIDIENT,
  MOVE_INGRIDIENT,
} from "../actions/constructor";

const InitialState = {
  items: [],
  bun: false,

};

export const constructorReducer = (state = InitialState, action) => {
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
        // const temp = arr[a]; arr[a]= arr[b]; arr[b] = temp

        // const a =dataConstructor.filter((item,index)=>index ==drug);
        // const b =dataConstructor.filter((item,index)=>index ==hover);
        // console.log(dataDrug)
        // // console.log(dataConstructor)
        // console.log(drug)
        // console.log(`Это ховер ${hover}`);
        const dataConstructor = state.items;
        const drug = action.data.dragIndex;
        const hover = action.data.hoverIndex;
        // const dataDrug = dataConstructor.filter((item,index)=>index ===drug);
        // const datahover =dataConstructor.filter((item,index)=>index ===hover);
        const temp = dataConstructor[drug]
        dataConstructor[drug]=dataConstructor[hover]
        dataConstructor[hover]=temp

        // dataConstructor.splice(action.data.dragIndex,0,dataConstructor.splice(action.data.hoverIndex, 1)[0]);

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

