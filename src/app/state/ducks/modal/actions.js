import * as types from './types'

export function showModal(modalType, modalProps) {
  return {
    type: types.SHOW_MODAL,
    modalType: modalType,
    modalProps: modalProps
  };
}

export function showVenueReviewModal(modalProps) {
  return {
    type: types.SHOW_MODAL,
    modalType: "ADD_VENUE_REVIEW",
    modalProps: modalProps
  };
}
export function hideModal(){
  return {
    type: types.HIDE_MODAL
  };
}
