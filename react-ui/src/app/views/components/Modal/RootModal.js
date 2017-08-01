// These are regular React components we will write soon
// import DeletePostModal from './DeletePostModal'
// import ConfirmLogoutModal from './ConfirmLogoutModal'
import React from 'react'
import { connect } from 'react-redux'

import TestFormModal from './TestFormModal'
import GroupReviewModal from './GroupReviewModal'
import ValidationFormModal from './ValidationFormModal'
import MaterialFormModal from './MaterialFormModal'

import AddEvent from './AddEvent'
import AddEventReview from './AddEventReview'
// import AddVenueReview from './AddVenueReview'


const MODAL_COMPONENTS = {
  'ADD_VENUE_REVIEW' : TestFormModal,
  'ADD_GROUP_REVIEW' : GroupReviewModal,
  // 'VALIDATION_FORM' : ValidationFormModal,
  // 'MATERIAL_FORM' : MaterialFormModal,
  // 'ADD_VENUE_REVIEW': AddVenueReview,
  // 'ADD_EVENT_REVIEW' : AddEventReview,
  // 'ADD_EVENT' : AddEvent,
    /* other modals */
}



const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null; // <span /> // after React v15 you can return null here
  }
  const SpecificModal = (MODAL_COMPONENTS[modalType])
  return <SpecificModal {...modalProps} />
}

export default connect(
  state => state.modal
)(ModalRoot)
