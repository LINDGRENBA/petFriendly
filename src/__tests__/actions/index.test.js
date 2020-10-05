import * as actions from './../../actions';

describe('MyTrip actions', () => {
  it('deleteTrip should create DELETE_TRIP action', () => {
    expect(actions.deleteTrip(1)).toEqual({
      type: 'DELETE_TRIP',
      id: 1
    });
  });

  

});