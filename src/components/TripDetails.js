import React from 'react';
import PropTypes from 'prop-types';

function TripDetails(props){
  const { trip, onClickingDelete } = props;
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
      <button onClick={() => onClickingDelete(trip.id)} >Delete Trip</button>
    </React.Fragment>
  );
}

TripDetails.propTypes = {
  trip: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default TripDetails;