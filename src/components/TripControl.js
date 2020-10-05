import React from 'react';
// import Trip from './Trip';
import TripList from './TripList';
import NewTripForm from './NewTripForm';
import TripDetails from './TripDetails';
import EditTripForm from './EditTripForm';

class TripControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTripList: [],
      selectedTrip: null,
      editing: false
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

  handleEditClick = () => {
    console.log("Edit Achieved!");
    this.setState({editing: true});
  }

  handleAddingNewTripToList = (newTrip) => {  //takes newtrip object from submitted form, adds to maintriplist array
    const newMainTripList = this.state.mainTripList.concat(newTrip);
    this.setState({mainTripList: newMainTripList, formVisible: false});
  }

  handleSelectingTrip = (id) => {
    const selectedTrip = this.state.mainTripList.filter(trip => trip.id === id)[0];
    this.setState({selectedTrip: selectedTrip});
  }

  handleEditingTrip = (tripToEdit) => {
    const editedTripList = this.state.mainTripList
      .filter(trip => trip.id !== this.state.selectedTrip.id)
      .concat(tripToEdit);
    this.setState({
      mainTripList: editedTripList,
      editing: false,
      selectedTrip: null
    });
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

    if(this.state.editing){
      visibleState = <EditTripForm trip={this.state.selectedTrip} onEditTrip={this.handleEditingTrip} />
      btnText="Cancel"
    } else if(this.state.selectedTrip != null){
      visibleState = <TripDetails trip={this.state.selectedTrip} onClickingTripDelete={this.handleDeletingTrip} onClickingTripEdit={this.handleEditClick} />
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