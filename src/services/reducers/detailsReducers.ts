import {OPEN_INGRIDIENT_MODAL,CLOSE_INGIRIDIENT_MODAL, TIngridientModal} from '../actions/details'

export interface IDetailsInitialState {
  openModal: boolean
}

const detailsInitialState:IDetailsInitialState = {
  openModal : false
}

export const detailsReducer = (state=detailsInitialState, action:TIngridientModal):IDetailsInitialState => {
  switch(action.type) {
    case OPEN_INGRIDIENT_MODAL:
      return {
        ...state,
        openModal: true,
      }
    case CLOSE_INGIRIDIENT_MODAL:

      return {
        ...state,
        openModal: false,

      }
    default: {
      return state
    }
  }
}
