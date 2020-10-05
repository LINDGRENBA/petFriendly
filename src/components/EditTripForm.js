import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditTripForm(props){
  const { trip } = props;

  function handleEditTripFormSubmission(event){
    event.preventDefault();
    props.onEditTrip({destination: event.target.destination.value,  departureDate: event.target.departureDate.value,  returnDate: event.target.returnDate.value,  petName: event.target.petName.value,  notes: event.target.notes.value, id: trip.id})
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