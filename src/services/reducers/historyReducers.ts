import { CLOSE_HISTORY_MODAL, OPEN_HISTORY_MODAL, THistoryModal } from "../actions/profileHistory"

interface IHistoryInitialState{
  openModal: boolean
}

const historyInitialState = {
  openModal : false
}

export const historyReducer = (state=historyInitialState, action:THistoryModal):IHistoryInitialState => {
  switch(action.type) {
    case OPEN_HISTORY_MODAL:
      return {
        ...state,
        openModal: true,
      }
    case CLOSE_HISTORY_MODAL:

      return {
        ...state,
        openModal: false,

      }
    default: {
      return state
    }
  }
}
