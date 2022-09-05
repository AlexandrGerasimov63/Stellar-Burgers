import {OPEN_INGRIDIENT_MODAL,CLOSE_INGIRIDIENT_MODAL} from '../actions/details'


const detailsInitialState = {
  openModal : null
}

export const detailsReducer = (state=detailsInitialState, action) => {
  switch(action.type) {
    case OPEN_INGRIDIENT_MODAL:
      return {
        ...state,
        openModal: action.ingridient
      }
    case CLOSE_INGIRIDIENT_MODAL:
      return {
        ...state,
        openModal: null,
      }
    default: {
      return state
    }
  }
}
