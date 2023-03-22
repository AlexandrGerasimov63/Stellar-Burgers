import { CLOSE_FEED_MODAL, OPEN_FEED_MODAL, TFeedModal } from '../actions/feed'

interface IFeedInitialState {
  openModal: boolean
}

const feedInitialState = {
  openModal : false
}

export const feedReducer = (state=feedInitialState, action:TFeedModal):IFeedInitialState => {
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
