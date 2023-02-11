import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function Destinations() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      const initializeMap = ({ setMap, mapContainer }) => {
        mapboxgl.accessToken =
          "pk.eyJ1IjoiamFtZXNodWJiZWxsODkiLCJhIjoiY2xkemZnbGNvMHdlMTN3bG91b25wdzdicyJ9.NwetzF3J8UJModTMpDfQwQ";
        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v12",
          center: [-122, 48],
          zoom: 5,
        });
        setMap(map);
      };
      initializeMap({ setMap, mapContainer: "map" });
    } else {
      map.remove();
      setMap(null);
    }
  }, [map]);

  return (
    <div className="h-64 w-full">
      <div id="map" className="h-full" />
    </div>
  );
}
