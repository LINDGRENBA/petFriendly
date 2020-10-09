import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <h3>This is a form to add trips</h3>
      {/* <form onSubmit={handleNewTripFormSubmission}> */}
      <form onSubmit={props.formSubmissionHandler}>
        {/* Q1 */}
        <label htmlFor="destination"></label>
        <input 
          type='text'
          name='destination'
          placeholder='destination'  //will this work?
          required
        /> <br/>
        {/* Q2 */}
        <label htmlFor="departureDate"></label>
        <input 
          type='date'
          name='departureDate'
        /><br/>
        {/* Q3 */}
        <label htmlFor="returnDate"></label>
        <input 
          type='date'
          name='returnDate'
        /><br/>
        {/* Q4 */}
        <label htmlFor="petName"></label>
        <input 
          type='text'
          name='petName'
          placeholder='Gemma'
        /><br/>
        <label htmlFor="notes"></label>
        <textarea
          type='text'
          name='notes'
          placeholder='Remember meds for Gemma'
        /><br/>
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