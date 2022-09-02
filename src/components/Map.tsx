import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "479px",
};

const center = {
  lat: 53.5433385,
  lng: -113.5376438,
};

// const position = {
//   lat: 37.772,
//   lng: -122.214
// }

const onLoad = marker => {
  console.log('marker: ', marker)
}

export default function Map() {
  return (
    <LoadScript 
      googleMapsApiKey="AIzaSyCouv1xaUfUFQRvJNnzDSydS__PysjwaeA">
      <GoogleMap 
        mapContainerStyle={containerStyle} 
        center={center} 
        zoom={16}>
        <Marker 
          onLoad={onLoad}
          position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
