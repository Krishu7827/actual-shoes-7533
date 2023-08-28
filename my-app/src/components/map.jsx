import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "../Css/doctors.css";

const MapboxMap = ({ pincode }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoibWF6aGFyaXFiYWxzaWRkaXF1ZWUiLCJhIjoiY2xscGMzajEyMDU5ODRtcG9rYzBobmVheSJ9.3Exo7c1Vv3wPYgnftAU8sA";

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 14,
    });

    // Create a new instance of the Geocoder class
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    // Add the geocoder control to the map
    map.addControl(geocoder);

    // Perform a geocoding lookup for the provided pincode
    geocoder.query(pincode, (result) => {
      const coordinates = result.result.geometry.coordinates;

      // Set the map center to the coordinates
      map.setCenter(coordinates);

      // Create a circular marker by adding a div element with a circle style
      const circleMarker = document.createElement("div");
      circleMarker.className = "circle-marker";

      // Add the circular marker to the map at the specified coordinates
      new mapboxgl.Marker(circleMarker)
        .setLngLat(coordinates)
        .addTo(map);
    });

    return () => map.remove();
  }, [pincode]);

  return <div className="map-container" ref={mapContainerRef}></div>;
};

export default MapboxMap;








