import React from 'react';
import Trip from './Trip';
import PropTypes from 'prop-types';
//needs access to trip list so it can show the list


function TripList(props){
  return(
    <React.Fragment>
      {Object.values(props.tripList).map((trip) => 
        <Trip
        whenDetailsButtonClicked = {props.onTripSelection}
        destination={trip.destination}
        petName={trip.petName}
        departureDate={trip.departureDate}
        returnDate={trip.returnDate}
        notes={trip.notes}
        id={trip.id}
        key={trip.id} />
      )}
    </React.Fragment>
  );
}

TripList.propTypes = {
  tripList: PropTypes.object,
  onTripSelection: PropTypes.func
};

export default TripList;