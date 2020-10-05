import React from 'react';
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

  handleClick = () => {  //using arrow function allows inner function to access props
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render() {
    let visibleState = null;
    let btnText = null;
    if(this.state.formVisible){
      visibleState = <NewTripForm />
      btnText = "Cancel";
    } else {
      visibleState = <TripList />
      btnText = "Add Trip";
    }
    return (
      <React.Fragment>
        {visibleState}
        <button onClick={this.handleClick}>{btnText}</button>
      </React.Fragment>
    );
  }
}

export default TripControl;