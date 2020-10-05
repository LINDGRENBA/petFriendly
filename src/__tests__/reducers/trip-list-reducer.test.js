import tripListReducer from '../../reducers/trip-list-reducer';

describe('tripListReducer', () => {

  test('should return default state if no action is passed to reducer', () => {
    expect(tripListReducer({}, {type: null})).toEqual({});
  });

});