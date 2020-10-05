import React from 'react';
// import Trip from './Trip';
import TripList from './TripList';
import NewTripForm from './NewTripForm';

class TripControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTripList: []
    };
  }

  handleClick = () => {  //using arrow function allows inner function to access props
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  handleAddingNewTripToList = (newTrip) => {  //takes newtrip object from submitted form, adds to maintriplist array
    const newMainTripList = this.state.mainTripList.concat(newTrip);
    this.setState({mainTripList: newMainTripList, formVisible: false});
  }

  render() {
    let visibleState = null;
    let btnText = null;
    if(this.state.formVisible){
      visibleState = <NewTripForm onNewTripCreation={this.handleAddingNewTripToList} />
      btnText = "Cancel";
    } else {
      visibleState = <TripList tripList={this.state.mainTripList} />
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