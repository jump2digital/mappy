import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';

function App() {
  const highlightedArea = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-0.09, 51.505],
          [-0.08, 51.505],
          [-0.08, 51.506],
          [-0.09, 51.506],
          [-0.09, 51.505],
        ],
      ],
    },
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={20} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          Les Corts
        </Popup>
      </Marker>
      <GeoJSON
        data={highlightedArea}
        style={() => ({
          fillColor: 'blue',
          color: 'red',
          weight: 2,
          opacity: 0.5,
        })}
      />
    </MapContainer>
  );
}

export default App;
