import React, { Component } from 'react';
import Modal from 'react-modal';

import { Spinner } from '../../../components'

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

          <AddEventReviewForm
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

export default AddEventReview
