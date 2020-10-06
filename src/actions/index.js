import * as c from './ActionTypes';

export const deleteTrip = id => ({
  type: c.DELETE_TRIP,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
