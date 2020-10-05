import React from 'react';
import PropTypes from 'prop-types';

function Trip(props){
  return(
    <React.Fragment>
      <h3>My Trip to {props.destination}</h3>
      <p>I'll be traveling with {props.petName}</p>
      <div className="dates">
        <p>Leaving:{props.departureDate}</p>
        <p>Leaving:{props.returnDate}</p>
      </div>
      <div className="notes">
        <p>Notes:</p>
        <p>{props.notes}</p>
      </div>
    </React.Fragment>
  )
}

Trip.propTypes = {
  destination: PropTypes.string.isRequired,
  petName: PropTypes.string,
  departureDate: PropTypes.instanceOf(Date),
  returnDate: PropTypes.instanceOf(Date),
  notes: PropTypes.string
};

export default Trip;