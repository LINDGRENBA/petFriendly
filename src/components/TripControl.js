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
    const selectedTrip = this.props.mainTripList[id];
    this.setState({selectedTrip: selectedTrip});
  }

  // handleEditingTrip = (tripToEdit) => {
  //   const {dispatch} = this.props;
  //   const action = a.addTrip(tripToEdit);
  //   dispatch(action);
  //   this.setState({
  //     editing: false,
  //     selectedTrip: null
  //   });
  // }

  handleDeletingTrip = (id) => {
    const {dispatch} = this.props;
    const action = a.deleteTrip(id);
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
  mainTripList: PropTypes.object,
  formVisible: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainTripList: state.mainTripList,
    formVisible: state.formVisible
  }
}

TripControl = connect(mapStateToProps)(TripControl);

export default TripControl;