//need access to list of trips so it can add new trips to the list
import React from 'react';
// import {v4} from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import {useFirestore} from 'react-redux-firebase';

function NewTicketForm(props){

  const firestore = useFirestore();

  function addTicketToFirestore(event){
    event.preventDefault();
    props.onNewTripCreation();

    return firestore.collection('trips').add(
      {
        destination: event.target.destination.value,  
        departureDate: event.target.departureDate.value,  
        returnDate: event.target.returnDate.value,  
        petName: event.target.petName.value,  
        notes: event.target.notes.value
      }
    );
  }

  return(
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addTicketToFirestore}
        btnText="Add Trip"
      />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTripCreation: PropTypes.func
};

export default NewTicketForm;

{/* <h3>This is a form to add trips</h3>
      <form onSubmit={handleNewTripFormSubmission}>

        <label>Where are you going?</label>
        <input 
          type='text'
          name='destination'
          placeholder='Canada'
          required
        />

        <label>Departure date:</label>
        <input 
          type='date'
          name='departureDate'
        />

        <label>Return date:</label>
        <input 
          type='date'
          name='returnDate'
        />

        <label>Which pets are you taking?</label>
        <input 
          type='text'
          name='petName'
          placeholder='Gemma'
        />
        <label>Trip Notes:</label>
        <textarea
          type='text'
          name='notes'
          placeholder='Remember meds for Gemma'
        />
        <button type="submit">Add Trip</button>
      </form> */}