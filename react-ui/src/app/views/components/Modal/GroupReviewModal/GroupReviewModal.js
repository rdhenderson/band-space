import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as modalActions } from '../../../../state/ducks/modal'
import { actions as groupActions } from '../../../../state/ducks/group'

import GroupReviewForm from './GroupReviewForm'

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

const GroupReviewModal = (props) => {
  return (
    <div>
      <Modal
        isOpen={true}
        contentLabel="GroupReview Modal"
        onRequestClose={props.hideModal}
        style={customStyles}
      >
        <GroupReviewForm
          subject={props.subject}
          author={props.author}
          hideModal={props.hideModal}
          onSubmit={(values) => props.addGroupReview(values)}
        />
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    	author: state.auth.user,
      isAuth: state.auth.isAuth,
      subject: state.group.group,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  ...modalActions, ...groupActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupReviewModal);
