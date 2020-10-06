import formVisibleReducer from './form-visible-reducer';
import tripListReducer from './trip-list-reducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';


const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  mainTripList: tripListReducer,
  firestore: firestoreReducer
});

//key is state slice : value is reducer (for above)

export default rootReducer;