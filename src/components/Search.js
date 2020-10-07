import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import "@reach/combobox/styles.css";
import { render } from '@testing-library/react';
import { v4 } from 'uuid';
// should above be just - import "@reach/combobox"  ?

const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "50vh"
};

const center = {
  lat: 45.4465,
  lng: -122.6323
};

const options = {
  disableDefaultUI: true,
  zoomControl: true
};



function Search(){
  // google map
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //enable additional libraries
    libraries
  });

  const [markers, setMarkers] = React.useState([]); // HOOK FOR SETTING MARKERS
  

  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current, 
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        id: v4(),
      },
    ]);
  }, []);

  // this will save the instance of the current map when it renders in the 'map' so that we can then use it without re-rendering
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if(loadError) {
    return "Error loading maps";
  } 
  if(!isLoaded) {
    return "Loading maps...";
  } 


  return (
    <div>
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={8} 
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}>
          {markers.map((marker) => (
            <Marker 
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon= {{ 
                      icon: "", // NEED TO SET ICON
                      scaledSize: new window.google.maps.Size(30, 30),
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(15, 15) 
                    }}  />
          ))}
      </GoogleMap>
    </div>
  );
  
}


export default Search;