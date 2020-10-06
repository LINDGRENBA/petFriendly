import formVisibleReducer from './form-visible-reducer';
import tripListReducer from './trip-list-reducer';
import {combineReducers} from 'redux';
import * as c from './../actions/ActionTypes';

const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  mainTripList: tripListReducer
});

//key is state slice : value is reducer (for above)

export default rootReducer;