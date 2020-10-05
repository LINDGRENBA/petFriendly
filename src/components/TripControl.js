import React from 'react';
// import Trip from './Trip';
import TripList from './TripList';
import NewTripForm from './NewTripForm';
import TripDetails from './TripDetails';

class TripControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTripList: [],
      selectedTrip: null
    };
  }

  handleClick = () => {  //using arrow function allows inner function to access props
    if(this.state.selectedTrip != null){
      this.setState({
        formVisible: false,
        selectedTrip: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddingNewTripToList = (newTrip) => {  //takes newtrip object from submitted form, adds to maintriplist array
    const newMainTripList = this.state.mainTripList.concat(newTrip);
    this.setState({mainTripList: newMainTripList, formVisible: false});
  }

  handleSelectingTrip = (id) => {
    const selectedTrip = this.state.mainTripList.filter(trip => trip.id === id)[0];
    this.setState({selectedTrip: selectedTrip});
  }

  handleDeletingTrip = (id) => {
    const newMainTripList = this.state.mainTripList.filter(trip => trip.id !== id);
    this.setState({
      mainTripList: newMainTripList,
      selectedTrip: null
    });
  }

  render() {
    let visibleState = null;
    let btnText = null;

    if(this.state.selectedTrip != null){
      visibleState = <TripDetails trip={this.state.selectedTrip} onClickingDelete={this.handleDeletingTrip} />
      btnText = "Back";
    } else if(this.state.formVisible){
      visibleState = <NewTripForm onNewTripCreation={this.handleAddingNewTripToList} />
      btnText = "Cancel";
    } else {
      visibleState = <TripList tripList={this.state.mainTripList} onTripSelection={this.handleSelectingTrip} />
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