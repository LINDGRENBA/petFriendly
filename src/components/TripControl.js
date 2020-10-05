import React from 'react';
// import Trip from './Trip';
import TripList from './TripList';
import NewTripForm from './NewTripForm';
import TripDetails from './TripDetails';
import EditTripForm from './EditTripForm';
import {connect} from 'react-redux';
// import Trip from './Trip';
import PropTypes from 'prop-types';

class TripControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisible: false,
      // mainTripList: [],
      selectedTrip: null,
      editing: false
    };
  }

  handleClick = () => {  //using arrow function allows inner function to access props
    if(this.state.selectedTrip != null){
      this.setState({
        formVisible: false,
        selectedTrip: null,
        editing: false
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

  // handleAddingNewTripToList = (newTrip) => {  //takes newtrip object from submitted form, adds to maintriplist array
  //   const newMainTripList = this.state.mainTripList.concat(newTrip);
  //   this.setState({mainTripList: newMainTripList, formVisible: false});
  // }

  handleAddingNewTripToList = (newTrip) => {
    const {dispatch} = this.props;
    const {id, destination, departureDate, returnDate, petName, notes} = newTrip;
    const action = {
      type: 'ADD_TRIP',
      destination: destination,
      departureDate: departureDate,
      returnDate: returnDate,
      petName: petName,
      notes: notes,
      id: id
    }
    dispatch(action);
    this.setState({formVisible: false});
  }

  handleSelectingTrip = (id) => {
    const selectedTrip = this.props.mainTripList[id];
    this.setState({selectedTrip: selectedTrip});
  }

  // handleEditingTrip = (tripToEdit) => {
  //   const editedTripList = this.state.mainTripList
  //     .filter(trip => trip.id !== this.state.selectedTrip.id)
  //     .concat(tripToEdit);
  //   this.setState({
  //     mainTripList: editedTripList,
  //     editing: false,
  //     selectedTrip: null
  //   });
  // }

  handleEditingTrip = (tripToEdit) => {
    const {dispatch} = this.props;
    const {id, destination, departureDate, returnDate, petName, notes} = tripToEdit;
    const action = {
      type: 'ADD_TRIP',
      destination: destination,
      departureDate: departureDate,
      returnDate: returnDate,
      petName: petName,
      notes: notes,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTrip: null
    });
  }

  // handleDeletingTrip = (id) => {
  //   const newMainTripList = this.state.mainTripList.filter(trip => trip.id !== id);
  //   this.setState({
  //     mainTripList: newMainTripList,
  //     selectedTrip: null
  //   });
  // }

  handleDeletingTrip = (id) => {
    const {dispatch} = this.props;
    const action = {
      type: 'DELETE_TRIP',
      id: id
    }
    dispatch(action);
    this.setState({
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
    } else if(this.props.formVisible){
      visibleState = <NewTripForm onNewTripCreation={this.handleAddingNewTripToList} />
      btnText = "Cancel";
    } else {
      visibleState = <TripList tripList={this.props.mainTripList} onTripSelection={this.handleSelectingTrip} />
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

TripControl.propTypes = {
  mainTripList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainTripList: state
  }
}

TripControl = connect(mapStateToProps)(TripControl);

export default TripControl;