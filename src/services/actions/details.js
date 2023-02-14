export const OPEN_INGRIDIENT_MODAL = 'OPEN_INGRIDIENT_MODAL';
export const CLOSE_INGIRIDIENT_MODAL = 'CLOSE_INGIRIDIENT_MODAL';

export const openIngridientModal = () => {
  return {
    type: OPEN_INGRIDIENT_MODAL,

  }
}

export const closeIngridientModal = () => {
  return {
    type: CLOSE_INGIRIDIENT_MODAL
  }
}
