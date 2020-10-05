import React from 'react';
import PropTypes from 'prop-types';

function Trip(props){
  return(
    <React.Fragment>
      <h3>My Trip to {props.destination}</h3>
      <p>I'll be traveling with {props.petName}</p>
    </React.Fragment>
  )
}

Trip.propTypes = {
  destination: PropTypes.string.isRequired,
  petName: PropTypes.string
};

export default Trip;