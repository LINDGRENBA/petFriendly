//need access to list of trips so it can add new trips to the list
import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function NewTicketForm(props){

  function handleNewTripFormSubmission(event){
    event.preventDefault();
    props.onNewTripCreation({destination: event.target.destination.value,  departureDate: event.target.departureDate.value,  returnDate: event.target.returnDate.value,  petName: event.target.petName.value,  notes: event.target.notes.value, id: v4()});
  }

  return(
    <React.Fragment>
      <h3>This is a form to add trips</h3>
      <form onSubmit={handleNewTripFormSubmission}>
        {/* Q1 */}
        <label>Where are you going?</label>
        <input 
          type='text'
          name='destination'
          placeholder='Canada'
          required
        />
        {/* Q2 */}
        <label>Departure date:</label>
        <input 
          type='date'
          name='departureDate'
        />
        {/* Q3 */}
        <label>Return date:</label>
        <input 
          type='date'
          name='returnDate'
        />
        {/* Q4 */}
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
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTripCreation: PropTypes.func
};

export default NewTicketForm;