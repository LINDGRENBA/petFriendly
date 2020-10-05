import * as actions from './../../actions';

describe('MyTrip actions', () => {
  it('deleteTrip should create DELETE_TRIP action', () => {
    expect(actions.deleteTrip(1)).toEqual({
      type: 'DELETE_TRIP',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addTrip should create ADD_TRIP action', () => {
    expect(actions.addTrip({destination: "Turkey", departureDate: "2020-10-06", returnDate: "2020-10-07", petName: "Gemma", notes: "Remember to bring Mr. Bear", id: 1})).toEqual({
      type: 'ADD_TRIP',
      destination: "Turkey",
      departureDate: "2020-10-06",
      returnDate: "2020-10-07",
      petName: "Gemma",
      notes: "Remember to bring Mr. Bear",
      id: 1
    });
  });

});