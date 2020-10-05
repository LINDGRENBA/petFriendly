export default (state = {}, action) => {
  const {destination, departureDate, returnDate, petName, notes, id} = action;
  switch(action.type){
    case 'ADD_TRIP':
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
    default:  
      return state;
  }
};