'use client'; // Ensure this component is marked as a client component

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }) {
  const mapRef = useRef(null);
  const [geocoder, setGeocoder] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      // Ensure `google` is available before using it
      const googleGeocoder = new google.maps.Geocoder();
      setGeocoder(googleGeocoder);

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      if (address && googleGeocoder) {
        googleGeocoder.geocode({ address }, (results, status) => {
          if (status === "OK") {
            map.setCenter(results[0].geometry.location);
          } else {
            console.error("Geocode was not successful for the following reason: " + status);
          }
        });
      }
    });
  }, [address]);

  return (
    <div>
      <div ref={mapRef} style={{ width: "100%", height: "664.5px" }} />
    </div>
  );
}

export default Map;
