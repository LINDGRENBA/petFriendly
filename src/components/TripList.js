import React from 'react';
import Trip from './Trip';
//needs access to trip list so it can show the list

const mainTripsList = [
  {
    destination: "Naples",
    petName: "Gemma"
  },
  {
    destination: "California",
    petName: "Cronos"
  },
  {
    destination: "Tibet",
    petName: "Potato"
  }
];

function TripList(){
  return(
    <React.Fragment>
      {mainTripsList.map((trip, index) => 
        <Trip
        destination={trip.destination}
        petName={trip.petName}
        key={index} />
      )}
    </React.Fragment>
  );
}

export default TripList;