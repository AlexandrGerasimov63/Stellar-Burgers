export const OPEN_FEED_MODAL: "OPEN_FEED_MODAL" = "OPEN_FEED_MODAL";
export const CLOSE_FEED_MODAL: "CLOSE_FEED_MODAL" = "CLOSE_FEED_MODAL";

export interface IOpenFeedModal {
  readonly type: typeof OPEN_FEED_MODAL;
}

export interface ICloseFeedModal {
  readonly type: typeof CLOSE_FEED_MODAL;
}

export const openFeedModal = (): IOpenFeedModal => {
  return {
    type: OPEN_FEED_MODAL,
  };
};

export const closeFeedModal = (): ICloseFeedModal => {
  return {
    type: CLOSE_FEED_MODAL,
  };
};

export type TFeedModal = IOpenFeedModal | ICloseFeedModal;
