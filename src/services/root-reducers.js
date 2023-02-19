import { combineReducers } from "redux";
import { ingridientsReducer } from "./reducers/ingridientsReducers";
import { detailsReducer } from "./reducers/detailsReducers";
import { orderReducer } from "./reducers/orderReducers";
import { constructorReducer } from "./reducers/constructorReducers";
import { authReducer } from "./reducers/userReducers";
import { wsReducer } from "./reducers/wsReducer";
import { wsUserReducer } from "./reducers/wsUserReducers";


export const rootReducer = combineReducers({
  burgerIngridient: ingridientsReducer,
  details: detailsReducer,
  order: orderReducer,
  burgerConstructor : constructorReducer,
  auth : authReducer,
  wsReducer: wsReducer,
  wsUserReducer: wsUserReducer
})
