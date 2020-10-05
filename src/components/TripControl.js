import React from 'react';
import NewTicketForm from './NewTripForm';
import NewTripForm from './NewTripForm';
// import Trip from './Trip';
import TripList from './TripList';
import NewTripForm from './NewTripForm';

class TripControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  render() {
    let visibleState = null;
    if(this.state.formVisible){
      visibleState = <NewTripForm />
    } else {
      visibleState = <TripList />
    }
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

export default TripControl;