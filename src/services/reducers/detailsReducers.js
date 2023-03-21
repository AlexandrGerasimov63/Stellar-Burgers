import {OPEN_INGRIDIENT_MODAL,CLOSE_INGIRIDIENT_MODAL} from '../actions/details.ts'


const detailsInitialState = {
  openModal : false
}

export const detailsReducer = (state=detailsInitialState, action) => {
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
