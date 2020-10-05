import tripListReducer from '../../reducers/trip-list-reducer';

describe('tripListReducer', () => {

  let action;
  const tripData = {
    destination: "Turkey",
    departureDate: "2020-10-06",
    returnDate: "2020-10-07",
    petName: "Gemma",
    notes: "Remember to bring Mr. Bear",
    id: 1
  }

  test('should return default state if no action is passed to reducer', () => {
    expect(tripListReducer({}, {type: null})).toEqual({});
  });

  test('should add a new trip to the mainTripList', () => {
    const {destination, departureDate, returnDate, petName, notes, id} = tripData;
    action = {
      type: 'ADD_TICKET',
      destination: destination,
      departureDate: departureDate,
      returnDate: returnDate,
      petName: petName,
      notes: notes,
      id: id
    };
    expect(tripListReducer({}, action)).toEqual({
      [id] : {
        destination: destination,
        departureDate: departureDate,
        returnDate: returnDate,
        petName: petName,
        notes: notes,
        id: id
      }
    });
  });

});