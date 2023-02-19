export const OPEN_FEED_MODAL = "OPEN_FEED_MODAL";
export const CLOSE_FEED_MODAL = "CLOSE_FEED_MODAL";

export const openFeedModal = () => {
  return {
    type: OPEN_FEED_MODAL
  }
}

export const closeFeedModal = () => {
  return{
    type: CLOSE_FEED_MODAL
  }
}
