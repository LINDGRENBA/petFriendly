import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <h3>This is a form to add trips</h3>
      {/* <form onSubmit={handleNewTripFormSubmission}> */}
      <form onSubmit={props.formSubmissionHandler}>
        {/* Q1 */}
        <label>Where are you going?</label>
        <input 
          type='text'
          name='destination'
          placeholder='destination'  //will this work?
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
        <button type="submit">{props.btnText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  btnText: PropTypes.string
};

export default ReusableForm;