import React from 'react';
import Trip from './Trip';
import PropTypes from 'prop-types';
//needs access to trip list so it can show the list

// const mainTripsList = [
//   {
//     destination: "Naples",
//     petName: "Gemma"
//   },
//   {
//     destination: "California",
//     petName: "Cronos"
//   },
//   {
//     destination: "Tibet",
//     petName: "Potato"
//   }
// ];

function TripList(props){
  return(
    <React.Fragment>
      {props.tripList.map((trip, index) => 
        <Trip
        destination={trip.destination}
        petName={trip.petName}
        key={index} />
      )}
    </React.Fragment>
  );
}

TripList.propTypes = {
  tripList: PropTypes.array
};

export default TripList;