import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {destination, departureDate, returnDate, petName, notes, id} = action;
  switch(action.type){
    case c.ADD_TRIP:
      return Object.assign({}, state, {
        [id] : {
          destination: destination,
          departureDate: departureDate,
          returnDate: returnDate,
          petName: petName,
          notes: notes,
          id: id
        }
      });
      case c.DELETE_TRIP:
        const newState = { ...state };
        delete newState[id];
        return newState;
    default:  
      return state;
  }
};