import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as modalActions } from '../../../../state/ducks/modal'
import TestForm from './TestForm'

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

const TestFormModal = (props) => {
  return (
    <div>
      <Modal
        isOpen={true}
        contentLabel="Test Form"
        onRequestClose={props.hideModal}
        style={customStyles}
      >
        <TestForm
          subject={props.subject}
          author={props.author}
          hideModal={props.hideModal}
          onSubmit={(values) => console.log('Values', values)}
        />
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    	author: state.auth.user,
      isAuth: state.auth.isAuth,
      subject: state.venue.venue,
    };
}

function mapDispatchToProps(dispatch) {
  const { hideModal } = modalActions;
  return bindActionCreators({ hideModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TestFormModal);
