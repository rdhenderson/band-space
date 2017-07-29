// These are regular React components we will write soon
// import DeletePostModal from './DeletePostModal'
// import ConfirmLogoutModal from './ConfirmLogoutModal'
import React from 'react'
import { connect } from 'react-redux'
import AddVenueReviewModal from './AddVenueReviewModal'
import TestFormModal from './TestFormModal'
import ValidationFormModal from './ValidationFormModal'
import MaterialFormModal from './MaterialFormModal'

const MODAL_COMPONENTS = {
  // 'DELETE_POST': DeletePostModal,
  // 'CONFIRM_LOGOUT': ConfirmLogoutModal,
  'ADD_VENUE_REVIEW' : AddVenueReviewModal,
  'TEST_FORM' : TestFormModal,
  'VALIDATION_FORM' : ValidationFormModal,
  'MATERIAL_FORM' : MaterialFormModal,
    /* other modals */
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null; // <span /> // after React v15 you can return null here
  }
  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

export default connect(
  state => state.modal
)(ModalRoot)
