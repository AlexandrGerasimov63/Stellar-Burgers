import { combineReducers } from "redux";
import { ingridientsReducer } from "./reducers/ingridientsReducers";
import { detailsReducer } from "./reducers/detailsReducers";
import { orderReducer } from "./reducers/orderReducers";
import { constructorReducer } from "./reducers/constructorReducers"

export const rootReducer = combineReducers({
  burgerIngridient: ingridientsReducer,
  details: detailsReducer,
  order: orderReducer,
  burgerConstructor : constructorReducer,
})
