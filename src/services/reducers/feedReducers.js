import { CLOSE_FEED_MODAL, OPEN_FEED_MODAL } from '../actions/feed'


const feedInitialState = {
  openModal : false
}

export const feedReducer = (state=feedInitialState, action) => {
  switch(action.type) {
    case OPEN_FEED_MODAL:
      return {
        ...state,
        openModal: true,
      }
    case CLOSE_FEED_MODAL:

      return {
        ...state,
        openModal: false,

      }
    default: {
      return state
    }
  }
}
