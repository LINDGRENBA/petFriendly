import React from 'react';
import Trip from './Trip';
import PropTypes from 'prop-types';
//needs access to trip list so it can show the list
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';


function TripList(props){

  useFirestoreConnect([
    {collection: 'trips'}
  ]);

  const trips = useSelector(state => state.firestore.ordered.trips);

  if(isLoaded(trips)){
    return(
      <React.Fragment>
        {trips.map((trip) => {
          return <Trip
          whenDetailsButtonClicked = {props.onTripSelection}
          destination={trip.destination}
          petName={trip.petName}
          departureDate={trip.departureDate}
          returnDate={trip.returnDate}
          notes={trip.notes}
          id={trip.id}
          key={trip.id} />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

TripList.propTypes = {
  onTripSelection: PropTypes.func
};

export default TripList;