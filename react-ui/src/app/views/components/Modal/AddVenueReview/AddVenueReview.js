import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

import { actions as modalActions } from '../../../../state/ducks/modal'
import AddReview from '../../AddReview'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const AddVenueReviewModal = (props) => {
  return (
    <div>
      <Modal
        isOpen={true}
        contentLabel="Add Venue Review"
        onRequestClose={props.hideModal}
        style={customStyles}
      >
        <AddReview
          subject={props.subject}
          author={props.author}
          hideModal={props.hideModal}
          reviewType="venue"
        />
      </Modal>
    </div>
  );
}

function mapStateToProps(state, {match}) {
  return {
    	author: state.auth.user,
      isAuth: state.auth.isAuth,
      subject: getVenue(state, match.params.id),
    };
}

function mapDispatchToProps(dispatch) {
  const { hideModal } = modalActions;
  return bindActionCreators({ hideModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVenueReviewModal);
