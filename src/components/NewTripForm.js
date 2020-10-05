//need access to list of trips so it can add new trips to the list
import React from 'react';
import {v4} from 'uuid';

function NewTicketForm(props){

  function handleNewTripFormSubmission(event){
    event.preventDefault();
    console.log(event.target.destination.value);
    console.log(event.target.departureDate.value);
    console.log(event.target.returnDate.value);
    console.log(event.target.petName.value);
    console.log(event.target.notes.value);
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
        <input 
          type='text'
          name='notes'
          placeholder='Remember meds for Gemma'
        />
        <button type="submit">Add Trip</button>
      </form>
    </React.Fragment>
  );
}

export default NewTicketForm;