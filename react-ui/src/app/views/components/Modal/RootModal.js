import React, { Component } from 'react'
import { connect, bindActionCreators } from 'react-redux'
import { withRouter } from 'react-router'
import Modal from 'react-modal';

import { getAuthId } from '../../../state/ducks/auth/reducer.js'
import { addUserReview } from '../../../state/ducks/user/actions'
import { addVenueReview } from '../../../state/ducks/venue/actions'
import { addGroupReview } from '../../../state/ducks/group/actions'
import { hideModal } from '../../../state/ducks/modal/actions'
import UserReviewForm from './UserReviewModal/UserReviewForm'
import GroupReviewForm from './GroupReviewModal/GroupReviewForm'
import VenueReviewForm from './VenueReviewForm'
import TestForm from './TestFormModal/TestForm'

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    backgroundColor   : 'transparent',
    right             : 0,
    bottom            : 0,
    zIndex            : 100,
    display           : 'flex',
    justifyContent    : 'center',
  },
  content : {
    width: '40vw',
    left: 'auto',
    right: 'auto'
  }
};

const FORM_COMPONENTS = {
  'ADD_VENUE_REVIEW' : TestForm,
  'ADD_GROUP_REVIEW' : GroupReviewForm,
  'ADD_USER_REVIEW'  : UserReviewForm,
}

class ModalRoot extends Component {
  modalSelect = {
    'ADD_VENUE_REVIEW' : {
      submit: this.props.addVenueReview,
      component: TestForm,
      label: "Venue Review"
    },
    'ADD_GROUP_REVIEW' : {
      submit: this.props.addGroupReview,
      component: GroupReviewForm,
      label: "Group Review"
    },
    'ADD_USER_REVIEW' : {
      submit: this.props.addUserReview,
      component: UserReviewForm,
      label: "User Review"
    },
  }

  render() {
    const { modalType, author, subject, hideModal } = this.props;
    if (!modalType) {
      return null; // <span /> // after React v15 you can return null here
    }
    const selected = this.modalSelect[modalType];

    return (
      <Modal
        isOpen={true}
        contentLabel={selected.label}
        onRequestClose={hideModal}
        style={customStyles}
      >
        <selected.Form
          onSubmit={(values)=>{
            selected.submit({...values, author, subject});
            hideModal();
          }}
        />
      </Modal>
    )
  }
}

function mapStateToProps(state, { match }) {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    author: getAuthId(state),
    subject: match.params.id,
  };
}


export default withRouter(connect(
  mapStateToProps,
  { hideModal, addUserReview, addVenueReview, addGroupReview }
)(ModalRoot));
