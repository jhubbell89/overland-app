// import React, { useState, useEffect } from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Destinations() {
  
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiamFtZXNodWJiZWxsODkiLCJhIjoiY2xkemZnbGNvMHdlMTN3bG91b25wdzdicyJ9.NwetzF3J8UJModTMpDfQwQ'
  });

  return (
  
    <Map 
    style= "mapbox://styles/mapbox/streets-v12"
    containerStyle={{height: '80vh', width: '95vw'}}>
      <Layer 
      type="symbol" 
      id="marker" 
      layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[47, -120]} />
      </Layer>
    </Map>
      );
}
