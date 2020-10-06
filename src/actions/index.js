import * as c from './ActionTypes';

export const deleteTrip = id => ({
  type: c.DELETE_TRIP,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

// export const toggleForm = () => ({
//   type: c.TOGGLE_FORM
// });

// export const addTrip = (trip) => {
//   const {destination, departureDate, returnDate, petName, notes, id} = trip;
//   return {
//     type: c.ADD_TRIP,
//       destination: destination,
//       departureDate: departureDate,
//       returnDate: returnDate,
//       petName: petName,
//       notes: notes,
//       id: id
//   }
// }