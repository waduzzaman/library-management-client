import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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

  return (
    <LoadScript googleMapsApiKey={`${import.meta.env.VITE_MAP_API}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        tilt={45} // Set tilt to 45 for a 3D effect
        mapTypeId="satellite" // Set map type to satellite for aerial view
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;