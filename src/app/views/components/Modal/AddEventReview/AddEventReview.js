import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Spinner } from '../../../components'

import { actions as modalActions } from '../../../../state/ducks/modal'
import { actions as venueActions } from '../../../../state/ducks/venue'
import AddEventReviewForm from './AddEventReviewForm'

const customStyles = {
  content : {
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)',
  }
};

class AddEventReview extends Component {

  componentDidMount() {
    this.props.getVenueList();
  }

  render() {
    if (this.props.isLoading ) return (<Spinner />);
    return (
      <div>
        <Modal
          isOpen={true}
          contentLabel="Add Event Review"
          onRequestClose={this.props.hideModal}
          styles={customStyles}
        >

          <AddEventReview
            subject={this.props.subject}
            venues={this.props.venues}
            author={this.props.author}
            hideModal={this.props.hideModal}
            onSubmit={(values) => console.log('Values', values)}
          />

        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    	author: state.auth.user,
      isAuth: state.auth.isAuth,
      subject: state.venue.venue,
      venues: state.venue.venueList,
      isLoading: state.venue.loading,
    };
}

function mapDispatchToProps(dispatch) {
  const { hideModal } = modalActions;
  return bindActionCreators({ hideModal, ...venueActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEventReview);
