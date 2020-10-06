import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('MyTrip actions', () => {
  it('deleteTrip should create DELETE_TRIP action', () => {
    expect(actions.deleteTrip(1)).toEqual({
      type: c.DELETE_TRIP,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addTrip should create ADD_TRIP action', () => {
    expect(actions.addTrip({destination: "Turkey", departureDate: "2020-10-06", returnDate: "2020-10-07", petName: "Gemma", notes: "Remember to bring Mr. Bear", id: 1})).toEqual({
      type: c.ADD_TRIP,
      destination: "Turkey",
      departureDate: "2020-10-06",
      returnDate: "2020-10-07",
      petName: "Gemma",
      notes: "Remember to bring Mr. Bear",
      id: 1
    });
  });

});