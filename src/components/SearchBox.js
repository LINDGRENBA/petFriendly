import React from 'react';
import usePlacesAutoComplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from '@reach/combobox';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';

const libraries = ["places"];

function SearchBox() {

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
    clearSuggestion 
  } = usePlacesAutoComplete({
    requestOptions: {
      location: {lat: () => 45.4465,
        lng: () => -122.6323}, // will cause search to prefer locations NEAR WHERE USER IS SEARCHING, location wants functions, so we give it an arrow function that returns the lat and lng values
        radius: 200 * 1000, // 2,000 km - wants in meters which is why we multiply, sets search area radius

    },
  });

  // FOR COMBOBOX
  // comboboxInput value={value} gets value from usePlacesAutoComplete hook above
  // comboboxInput onChange listens for event which is user typing something in the search box
  // onChange setValue takes value of the event
  // style me does not yet have any styling
  // ComboboxOption inside of ComboboxPopover is what we're actually rendering out
  return (
    <div className="styleMe"> 
      <Combobox 
      onSelect={(address) => {

        
        console.log(address);
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
            data.map(({id, description}) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox> 
    </div>
  )
}

export default SearchBox;