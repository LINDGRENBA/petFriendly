import React from 'react';
// import Trip from './Trip';
import TripList from './TripList';
import NewTripForm from './NewTripForm';
import TripDetails from './TripDetails';
import EditTripForm from './EditTripForm';
import {connect} from 'react-redux';
// import Trip from './Trip';
import PropTypes from 'prop-types';
import * as a from './../actions';
import {withFirestore} from 'react-redux-firebase';

class TripControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedTrip: null,
      editing: false
    };
  }

  handleClick = () => {  //using arrow function allows inner function to access props
    if(this.state.selectedTrip != null){
      this.setState({
        selectedTrip: null,
        editing: false
      });
    } else {
      const {dispatch} = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    console.log("Edit Achieved!");
    this.setState({editing: true});
  }

  handleAddingNewTripToList = () => {
    const {dispatch} = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleSelectingTrip = (id) => {
    this.props.firestore.get({collection: 'trips', doc: id}).then((trip) => {
      const firestoreTrip = {
        destination: trip.get("destination"),
        departureDate: trip.get("departureDate"),
        returnDate: trip.get("returnDate"),
        petName: trip.get("petName"),
        notes: trip.get("notes"),
        id: trip.id
      }
      this.setState({selectedTrip: firestoreTrip});
    });
  }

  // handleEditingTrip = (id) => {
  //   this.props.firestore.get({collection: 'trips', doc: id}).then((trip) => {
  //     const firestoreTrip = {
  //       destination: trip.get("destination"),
  //       departureDate: trip.get("departureDate"),
  //       returnDate: trip.get("returnDate"),
  //       petName: trip.get("petName"),
  //       notes: trip.get("notes"),
  //       id: trip.id
  //     }
  //   this.setState({
  //     editing: false,
  //     selectedTrip: null
  //   });
  // }  IDEA FOR ADDING TRIP INFO AS PLACEHOLDER WHEN EDITING.... If editing is true, set placeholder to...

  handleEditingTrip = () => {
    this.setState({
      editing: false,
      selectedTrip: null
    });
  }

  handleDeletingTrip = (id) => {
    this.props.firestore.delete({collection: 'trips', doc: id});
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
  formVisible: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisible: state.formVisible
  }
}

TripControl = connect(mapStateToProps)(TripControl);

export default withFirestore(TripControl);  // withFirestore is a HOC, like connect(), that gives our component ability to use Firestore