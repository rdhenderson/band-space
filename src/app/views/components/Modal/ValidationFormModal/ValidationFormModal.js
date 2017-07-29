import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as modalActions } from '../../../../state/ducks/modal'
import ValidationForm from './ValidationForm'

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

const ValidationFormModal = (props) => {
  return (
    <div>
      <Modal
        isOpen={true}
        contentLabel="Test Form"
        onRequestClose={props.hideModal}
        style={customStyles}
      >
        <ValidationForm
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

export default connect(mapStateToProps, mapDispatchToProps)(ValidationFormModal);
