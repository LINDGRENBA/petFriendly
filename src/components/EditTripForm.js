import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import {useFirestore} from 'react-redux-firebase';

function EditTripForm(props){
  const firestore = useFirestore();
  const { trip } = props;

  function handleEditTripFormSubmission(event){
    event.preventDefault();
    props.onEditTrip();
    const propertiesToUpdate = {
      destination: event.target.destination.value,  
      departureDate: event.target.departureDate.value,  
      returnDate: event.target.returnDate.value,  
      petName: event.target.petName.value,  
      notes: event.target.notes.value
    }
    return firestore.update({collection: 'trips', doc: trip.id}, propertiesToUpdate);
  }
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTripFormSubmission}
        btnText="Save Changes" />
    </React.Fragment>
  );
}

EditTripForm.propTypes = {
  onEditTrip: PropTypes.func
}

export default EditTripForm;