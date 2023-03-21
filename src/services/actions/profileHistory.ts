export const OPEN_HISTORY_MODAL: "OPEN_HISTORY_MODAL" = "OPEN_HISTORY_MODAL";
export const CLOSE_HISTORY_MODAL: "CLOSE_HISTORY_MODAL" = "CLOSE_HISTORY_MODAL";

export interface IOpenHistoryModal {
  readonly type: typeof OPEN_HISTORY_MODAL;
}
export interface ICloseHistoreModal {
  readonly type: typeof CLOSE_HISTORY_MODAL;
}

export type THistoryModal = IOpenHistoryModal | ICloseHistoreModal;

export const openHistoryModal = ():IOpenHistoryModal => {
  return {
    type: OPEN_HISTORY_MODAL,
  };
};

export const closeHistoryModal = ():ICloseHistoreModal => {
  return {
    type: CLOSE_HISTORY_MODAL,
  };
};
