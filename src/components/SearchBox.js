import React from 'react';
import usePlacesAutoComplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxOption} from '@reach/combobox';
import {useLoadScript} from '@react-google-maps/api';
// import {v4} from 'uuid';
import PropTypes from 'prop-types';

const libraries = ["places"];
// const resultsArray = [
//   {name: "Paws For A Beer", address: "501 Harris Ave, Bellingham, WA 98225", type: "Brewery" , lat: 48.7184, lng: -122.5070, description: "Bellingham's first and only dog-friendly tavern", url: "https://www.pawsforabeer.com/", id: 1},
//   {name: "Hotel Leo", type: "Lodging", lat: 48.7519, lng: -122.4787, description: "Pet Friendly hotel in the heart of downtown Bellingham", url: "https://www.thehotelleo.com/", id: 2},
//   // {name: , type: , lat: , lng: , description: , url: },
// ];

function SearchBox(props) {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //need to enable additional libraries
    libraries
  });


  const {
    ready, 
    value, 
    suggestions: {status, data}, 
    setValue, 
    clearSuggestions
  } = usePlacesAutoComplete({
    requestOptions: {
      location: {lat: () => 45.4465,
        lng: () => -122.6323}, // will cause search to prefer locations NEAR WHERE USER IS SEARCHING, location wants functions, so we give it an arrow function that returns the lat and lng values
        radius: 200 * 1000, // 2,000 km - wants in meters which is why we multiply, sets search area radius
    },
  });

//   // FOR COMBOBOX
//   // comboboxInput value={value} gets value from usePlacesAutoComplete hook above
//   // comboboxInput onChange listens for event which is user typing something in the search box
//   // onChange setValue takes value of the event
//   // style me does not yet have any styling
//   // ComboboxOption inside of ComboboxPopover is what we're actually rendering out
//   // make onSelect async because we're going to be using promises, wrap inner code in a try/catch in case of error
//   // getGeocode, getLatLng
//   // getGeocode takes an object, which is the address, and returns many results - use await because it's a promise
//   // getLatLng extracts the longitude and latitude - also use await because also a promise
//   // setValue inside of onSelect updates state --> address - sets value in the searchbox / combobox to the value that the user selected, false - sets argument of shouldFetchData to false to indicate that we do not need to fetch data from the google maps api (cause we already know what the user selected)
//   // clearSuggestions clears the comboboxOption suggestions so that after user selects one we are no longer showing all the other options
  return (
    <div className="styleMe"> 
      <Combobox 
        onSelect={ async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({address});
            const {lat, lng} = await getLatLng(results[0]);
            props.panTo({lat, lng});
            // DELETE CONSOLE LOGS BEFORE PRESENTING / SUBMITTING
            console.log(lat, lng);
            console.log(results[0]);
          } catch(error) {
            console.log("error: " + error);
          }
        }}
      > 
        <ComboboxInput 
          value={value} 
          onChange={(event) => {
            setValue(event.target.value);
          }}
          disabled={!ready}
          placeholder="Enter your destination"
        /> 
        <ComboboxPopover>
          {status === "OK" && 
            data.map(({place_id, description}) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox> 
    </div>
  )
}

SearchBox.propTypes = {
  panTo: PropTypes.func
}

export default SearchBox;