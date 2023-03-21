export const OPEN_INGRIDIENT_MODAL:'OPEN_INGRIDIENT_MODAL' = 'OPEN_INGRIDIENT_MODAL';
export const CLOSE_INGIRIDIENT_MODAL:'CLOSE_INGIRIDIENT_MODAL' = 'CLOSE_INGIRIDIENT_MODAL';

export interface IOpenIngridientModal {
  readonly type: typeof OPEN_INGRIDIENT_MODAL
}

export interface ICloseIngridientModal {
  readonly type: typeof CLOSE_INGIRIDIENT_MODAL
}

export const openIngridientModal = ():IOpenIngridientModal => {
  return {
    type: OPEN_INGRIDIENT_MODAL,

  }
}

export const closeIngridientModal = ():ICloseIngridientModal => {
  return {
    type: CLOSE_INGIRIDIENT_MODAL
  }
}

export type TIngridientModal =
|IOpenIngridientModal
|ICloseIngridientModal
