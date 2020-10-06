import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import tripListReducer from '../../reducers/trip-list-reducer';
import * as c from './../../actions/ActionTypes';


let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      mainTripList: {},
      formVisible: false
    });
  });

  test('check that initial state of tripListReducer matches root reducer', () => {
    expect(store.getState().mainTripList).toEqual(tripListReducer(undefined, {type:null}));
  });

  test('check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, {type:null}));
  });

  test('check that initial state of tripListReducer matches root reducer', () => {
    const action = {
      type: c.ADD_TRIP,
      destination: "Turkey",
      departureDate: "2020-10-06",
      returnDate: "2020-10-07",
      petName: "Gemma",
      notes: "Remember to bring Mr. Bear",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainTripList).toEqual(tripListReducer(undefined, action));
  });

  test('check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action));
  });

});