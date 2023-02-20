export const OPEN_HISTORY_MODAL = "OPEN_HISTORY_MODAL";
export const CLOSE_HISTORY_MODAL = "CLOSE_HISTORY_MODAL";

export const openHistoryModal = () => {
  return {
    type: OPEN_HISTORY_MODAL
  }
}

export const closeHistoryModal = () => {
  return{
    type: CLOSE_HISTORY_MODAL
  }
}
