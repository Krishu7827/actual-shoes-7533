import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";


const MapboxMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoibWF6aGFyaXFiYWxzaWRkaXF1ZWUiLCJhIjoiY2xscGMzajEyMDU5ODRtcG9rYzBobmVheSJ9.3Exo7c1Vv3wPYgnftAU8sA";

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11", // You can choose other styles
      center: [-74.0060, 40.7128], // [lng, lat]
      zoom: 14,
    });

    // You can add markers, layers, and other map features here

    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef}></div>;
};

export default MapboxMap;
