// These are regular React components we will write soon
// import DeletePostModal from './DeletePostModal'
// import ConfirmLogoutModal from './ConfirmLogoutModal'
import React from 'react'
import { connect } from 'react-redux'
import TestFormModal from './TestFormModal'
import ValidationFormModal from './ValidationFormModal'
import MaterialFormModal from './MaterialFormModal'
import ScopedError from 'react-scoped-error-component'

import AddEvent from './AddEvent'
import AddEventReview from './AddEventReview'
import AddVenueReview from './AddVenueReview'


const MODAL_COMPONENTS = {
  'DELETE_POST': DeletePostModal,
  'CONFIRM_LOGOUT': ConfirmLogoutModal,
  'ADD_VENUE_REVIEW' : AddVenueReview,
  'TEST_FORM' : TestFormModal,
  'VALIDATION_FORM' : ValidationFormModal,
  'MATERIAL_FORM' : MaterialFormModal,
  'ADD_EVENT_REVIEW' : AddEventReview,
  'ADD_EVENT' : AddEvent,
    /* other modals */
}



const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null; // <span /> // after React v15 you can return null here
  }
  const SpecificModal = (MODAL_COMPONENTS[modalType])
  let result;
  MODAL_COMPONENTS[modalType] ? (
    result = <SpecificModal {...modalProps} />
  ) : (
    result = <ScopedError e={new Error("Error! Modal not found.  Check action dispatch function.")} />
  );
  return result;
}

export default connect(
  state => state.modal
)(ModalRoot)
