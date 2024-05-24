import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 43.757689376573545,
    lng: -79.22394164488144
  };

  const markerPosition = {
    lat: 43.757689376573545,
    lng: -79.22394164488144
  };

  return (
    <div className="flex justify-center items-center my-8">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_API}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
