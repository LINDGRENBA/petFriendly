import React from 'react';
import PropTypes from 'prop-types';

function TripDetails(props){
  const { trip } = props;
  return(
    <React.Fragment>
      <h3>Details for Trip to {trip.destination}</h3>
      <p>I'll be traveling with {trip.petName}</p>
      <div className="dates">
        <p>Leaving:{trip.departureDate}</p>
        <p>Leaving:{trip.returnDatetrip}</p>
      </div>
      <div className="notes">
        <p>Notes:</p>
        <p>{trip.notes}</p>
      </div>
    </React.Fragment>
  );
}

TripDetails.propTypes = {
  trip: PropTypes.object
}

export default TripDetails;