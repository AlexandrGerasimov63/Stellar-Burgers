import { IIngredientType } from "../../utils/types";

export const ADD_INGRIDIENT:'ADD_INGRIDIENT' = 'ADD_INGRIDIENT';
export const ADD_INGRIDIENT_BUN:'ADD_INGRIDIENT_BUN' = 'ADD_INGRIDIENT_BUN';
export const MOVE_INGRIDIENT:'MOVE_INGRIDIENT' = 'MOVE_INGRIDIENT';
export const DELETE_INGRIDIENT:'DELETE_INGRIDIENT' = 'DELETE_INGRIDIENT';

interface IDrop {
  dragIndex: number,
  hoverIndex: number
}

export type TConstructor =
| IAddIngridient
| IAddIngridientBun
| IMoveIngridient
| IDeleteIngridient

export interface IAddIngridient {
  readonly type: typeof ADD_INGRIDIENT
  data: IIngredientType
}

export interface IAddIngridientBun {
  readonly type: typeof ADD_INGRIDIENT_BUN
  data: IIngredientType
}

export interface IMoveIngridient {
  readonly type: typeof MOVE_INGRIDIENT
  data: IDrop
}

export interface IDeleteIngridient {
  readonly type: typeof DELETE_INGRIDIENT
  data: IIngredientType
  id: string
}
