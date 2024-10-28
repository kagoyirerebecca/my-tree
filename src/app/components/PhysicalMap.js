import { MapContainer, TileLayer, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

const PhysicalMap = () => {
  useEffect(() => {
    // Fix for Leaflet icons in Next.js
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
    });
  }, []);

  return (
    <div className="h-[600px] w-full relative">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        {/* Base Physical Map Layer */}
        <TileLayer
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
          maxZoom={17}
        />

        {/* Additional Physical Features Layer */}
        <TileLayer
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.jpg"
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>'
          opacity={0.5}
        />

        <LayerGroup>
          {/* Add additional map features here */}
        </LayerGroup>
      </MapContainer>
    </div>
  );
};

export default PhysicalMap;