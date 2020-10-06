import tripListReducer from '../../reducers/trip-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('tripListReducer', () => {

  let action;

  const currentState = {
    1: {
      destination: "Turkey",
      departureDate: "2020-10-06",
      returnDate: "2020-10-07",
      petName: "Gemma",
      notes: "Remember to bring Mr. Bear",
      id: 1
    },
    2: {
      destination: "Naples",
      departureDate: "2020-12-10",
      returnDate: "2021-01-15",
      petName: "Cronos",
      notes: "Bring small dog bed",
      id: 2
    }
  }

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
      type: 'ADD_TRIP',
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

  test('should delete a trip', () => {
    action = {
      type: 'DELETE_TRIP',
      id: 1
    };
    expect(tripListReducer(currentState, action)).toEqual({
      2: {
        destination: "Naples",
        departureDate: "2020-12-10",
        returnDate: "2021-01-15",
        petName: "Cronos",
        notes: "Bring small dog bed",
        id: 2
      }
    });
  });

});