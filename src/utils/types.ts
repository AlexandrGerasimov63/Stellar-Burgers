import PropTypes from "prop-types";
import { TIngridientModal } from "../services/actions/details";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { store } from "../index";
import { TFeedModal } from "../services/actions/feed";
import { TOrder } from "../services/actions/order";
import { THistoryModal } from "../services/actions/profileHistory";
import { TIngridient } from "../services/actions/ingridients";
import { TWsActions } from "../services/actions/wsAction";
import { TWsUserAction } from "../services/actions/wsActionUsers";

type TApplicationActions =
  | TIngridientModal
  | TFeedModal
  | TOrder
  | THistoryModal
  | TIngridient
  | TWsActions
  | TWsUserAction;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = Promise<any> | void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch & AppThunk>();

export interface IIngredientType {
  type: "bun" | "main" | "sauce";
  __v: number;
  _id: string;
  id?: string;
  count?: number;
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  length: number;
}

export interface IWsOrder {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

export interface IWsOrders {
  orders: Array<IWsOrder>;
  success: boolean;
  total: number;
  totalToday: number;
}

const ingredientType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string,
});

const DetailsType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  _id: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
});

export { ingredientType, DetailsType };
