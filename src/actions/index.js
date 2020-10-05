export const deleteTrip = id => ({
  type: 'DELETE_TRIP',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addTrip = (trip) => {
  const {destination, departureDate, returnDate, petName, notes, id} = trip;
  return {
    type: 'ADD_TRIP',
      destination: destination,
      departureDate: departureDate,
      returnDate: returnDate,
      petName: petName,
      notes: notes,
      id: id
  }
}