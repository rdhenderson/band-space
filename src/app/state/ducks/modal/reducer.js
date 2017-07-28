import * as types from './types';

const INITIAL_STATE = {
  modalType: null,
  modalProps: {}
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { modalType: action.modalType, modalProps: action.modalProps }
    case types.HIDE_MODAL:
      return INITIAL_STATE
    default:
      return state
  }
}
