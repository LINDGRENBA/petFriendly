import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import tripListReducer from '../../reducers/trip-list-reducer';

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

});