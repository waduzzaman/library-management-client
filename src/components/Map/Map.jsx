import { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 43.75759366221604,
    lng: -79.22396057439575
  };

  const markerPosition = {
    lat: 43.75759366221604,
    lng: -79.22396057439575
  };

  useEffect(() => {
    if (!import.meta.env.VITE_MAP_API) {
      console.error("Google Maps API key is missing. Please check your environment variables.");
    }
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_MAP_API}
      onError={(error) => console.error("Error loading Google Maps API script:", error)}
      onLoad={() => console.log("Google Maps API script loaded successfully.")}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        tilt={45}
        mapTypeId="satellite"
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
