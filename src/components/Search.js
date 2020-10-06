import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import "@reach/combobox/styles.css";
import { render } from '@testing-library/react';
// should above be just - import "@reach/combobox"  ?

const libraries = ["places"];

function Search(){
  // google map
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //enable additional libraries
    libraries
  });

  if(loadError) {
    return "Error loading maps";
  } 
  if(!isLoaded) {
    return "Loading maps...";
  } 


  return (
    <div>Map</div>
  );
  
}


export default Search;