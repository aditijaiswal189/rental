"use client";
import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PropertyType } from '../types';

// Fix for the Leaflet default icon path issue
const icon = require('leaflet/dist/images/marker-icon.png');
const iconShadow = require('leaflet/dist/images/marker-shadow.png');

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom marker for selected property
// Default icon using Tailwind color variables
const createDefaultIcon = () =>
    L.divIcon({
      className: '',
      html: `
        <div style="
          width: 12px;
          height: 12px;
          background-color: var(--primary);
          border-radius: 50%;
          border: 3px solid var(--background);
          box-shadow: 0 0 0 2px var(--ring);
        "></div>
      `,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    });
  
  // Selected icon with a highlight ring
  const createSelectedIcon = () =>
    L.divIcon({
      className: '',
      html: `
        <div style="
          width: 14px;
          height: 14px;
          background-color: var(--primary);
          border-radius: 50%;
          border: 3px solid var(--background);
          box-shadow: 0 0 0 3px var(--ring);
        "></div>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  
// const createSelectedIcon = () => {
//   return L.divIcon({
//     className: 'custom-div-icon',
//     html: `<div style="background-color: #2563eb; width: 10px; height: 10px; border-radius: 50%; border: 4px solid white; box-shadow: 0 0 0 2px #2563eb;"></div>`,
//     iconSize: [18, 18],
//     iconAnchor: [9, 9]
//   });
// };

interface MapViewProps {
  properties: PropertyType[];
  selectedProperty: PropertyType | null;
  setSelectedProperty: (property: PropertyType) => void;
  mapCenter: [number, number];
  zoom: number;
}

// Component to handle map center changes
const MapUpdater: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  
  return null;
};

const MapView: React.FC<MapViewProps> = ({ 
  properties, 
  selectedProperty, 
  setSelectedProperty,
  mapCenter,
  zoom
}) => {
  const mapRef = useRef<L.Map | null>(null);
  
  return (
    <div className="h-full w-full  z-0 relative">
      <MapContainer 
        center={mapCenter} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        whenReady={(map) => { mapRef.current = map; }}
      >
        <TileLayer
        //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; CartoDB'
  url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
        />
        
        <MapUpdater center={mapCenter} zoom={zoom} />
        
        {properties.map((property) => (
          <Marker 
            key={property.id}
            position={[property.latitude, property.longitude]}
            icon={selectedProperty?.id === property.id ? createSelectedIcon() : createDefaultIcon()}
            eventHandlers={{
              click: () => {
                setSelectedProperty(property);
              }
            }}
          >
            {/* <Popup>
  <div className="rounded-lg bg-background/90 backdrop-blur p-4 shadow-md text-foreground">
    <h3 className="text-lg font-semibold text-primary">{property.title}</h3>
    <p className="text-sm text-muted-foreground">{property.address}</p>
    <p className="mt-1 text-sm font-medium text-blue-600">${property.price}/mo</p>
    <div className="text-xs mt-1 text-muted-foreground flex space-x-2">
      <span>{property.bedrooms} Bed</span>
      <span>•</span>
      <span>{property.bathrooms} Bath</span>
    </div>
  </div>
</Popup> */}
<Popup>
  <div className="flex items-start space-x-4 rounded-lg bg-background/90 backdrop-blur px-2 pr-4  text-foreground">
    {/* Image */}
    <img 
      src={property.image} 
      alt={property.title}
      className="w-24 h-42 object-cover rounded-md border border-border" 
    />

    {/* Details */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-primary">{property.title}</h3>
      <p className="text-xs text-muted-foreground">{property.address}</p>
      <p className=" text-xs font-medium text-blue-600">${property.price}/mo</p>
      <div className="text-xs  text-muted-foreground flex space-x-2">
        <span>{property.bedrooms} Bed</span>
        <span>•</span>
        <span>{property.bathrooms} Bath</span>
      </div>
    </div>
  </div>
</Popup>

          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;