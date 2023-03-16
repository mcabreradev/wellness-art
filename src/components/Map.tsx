import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';

const containerStyle = {
    width: "100%",
    height: "479px",
  };

const center = {
  lat: 53.5433385,
  lng: -113.5376438,
};

const Map = () => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => (center),
    []
  );


  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div style={containerStyle}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={mapOptions}
        zoom={16}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        onLoad={() => console.log('Map Component Loaded...')}
      >
        <MarkerF 
          position={mapCenter} 
          onLoad={() => console.log('Marker Loaded')} 
          />
      </GoogleMap>
    </div>
  );
};

export default Map;
