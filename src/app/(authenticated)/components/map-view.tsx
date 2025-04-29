"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { PropertyType } from "../types";

interface MapViewProps {
  properties: PropertyType[];
  selectedProperty: PropertyType | null;
  setSelectedProperty: (property: PropertyType) => void;
  mapCenter: [number, number];
  zoom: number;
}

export default function MapView({
  properties,
  selectedProperty,
  setSelectedProperty,
  mapCenter,
  zoom
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current!,
  

      style: "mapbox://styles/mapbox/streets-v12",
      center: mapCenter,
      zoom: zoom || 12,
      attributionControl: true,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    setTimeout(() => mapRef.current?.resize(), 300);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    mapRef.current.setCenter(mapCenter);
    mapRef.current.setZoom(zoom);
  }, [mapCenter, zoom]);

  useEffect(() => {
    if (!mapRef.current) return;

    const existingMarkers = document.querySelectorAll('.marker');
    existingMarkers.forEach(marker => marker.remove());

    properties.forEach(property => {
      const el = document.createElement('div');
      el.className = selectedProperty?.id === property.id ? "marker selected-marker" : "marker default-marker";

      const marker = new mapboxgl.Marker(el)
        .setLngLat([property.longitude, property.latitude])
        .addTo(mapRef.current!);

      marker.getElement().addEventListener('click', () => {
        setSelectedProperty(property);

        // Create popup DOM element
        const popupContent = document.createElement('div');
        popupContent.className = "popup-content";

        popupContent.innerHTML = `
          <div class="popup-inner">
            <img src="${property.image}" alt="${property.title}" class="popup-image" />
            <div class="popup-details">
              <h3 class="popup-title">${property.title}</h3>
              <p class="popup-address">${property.address}</p>
              <p class="popup-price">$${property.price}/mo</p>
              <div class="popup-meta">
                <span>${property.bedrooms} Bed</span> • <span>${property.bathrooms} Bath</span>
              </div>
            </div>
          </div>
        `;

        const popup = new mapboxgl.Popup({ offset: 15 })
          .setDOMContent(popupContent)
          .addTo(mapRef.current!);

        marker.setPopup(popup);
      });
    });
  }, [properties, selectedProperty]);

  return (
    <div className="h-full w-full relative z-0">
      <div ref={mapContainer} className="h-full w-full" />
    </div>
  );
}



// import { useEffect, useRef, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import DeckGL from "@deck.gl/react";
// import { MapView as DeckMapView } from "@deck.gl/core";
// import { GeoJsonLayer } from "@deck.gl/layers";
// import "mapbox-gl/dist/mapbox-gl.css";

// import { PropertyType } from "../types";

// interface DeckMapViewProps {
//   properties: PropertyType[];
//   mapCenter: [number, number];
//   zoom: number;
// }

// export default function MapView({
//   properties,
//   mapCenter,
//   zoom,
// }: DeckMapViewProps) {
//   const mapContainer = useRef<HTMLDivElement>(null);
//   const [map, setMap] = useState<mapboxgl.Map | null>(null);

//   // 1. Initialize Mapbox
//   useEffect(() => {
//     if (map) return;
//     mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;
//     const mb = new mapboxgl.Map({
//       container: mapContainer.current!,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: mapCenter,
//       zoom,
//     });
//     mb.addControl(new mapboxgl.NavigationControl(), "top-right");
//     mb.on("load", () => setMap(mb));
//     return () => mb.remove();
//   }, [map, mapCenter, zoom]);

//   if (!map) {
//     // show a loader or empty div until Mapbox is ready
//     return <div ref={mapContainer} className="h-full w-full" />;
//   }

//   // 2. Create a DeckGL layer — e.g. a GeoJsonLayer of your properties
//   const layers = [
//     new GeoJsonLayer({
//       id: "properties",
//       data: properties.map((p) => ({
//         type: "Feature",
//         geometry: {
//           type: "Point",
//           coordinates: [p.longitude, p.latitude],
//         },
//         properties: { ...p },
//       })),
//       pickable: true,
//       stroked: false,
//       filled: true,
//       radiusMinPixels: 6,
//       getPointRadius : 6,
//       getFillColor: [99, 102, 241],
//       onClick: ({ object }) => {
//         if (object) {
//           // you can drill into object.properties for your popup logic
//           console.log("Clicked:", object.properties);
//         }
//       },
//     }),
//   ];

//   // 3. Render DeckGL on top of the Mapbox canvas
//   return (
//     <div className="relative h-full w-full">
//       <div ref={mapContainer} className="absolute inset-0 z-0" />
//       <DeckGL
//         views={[new DeckMapView({ id: "base-map" })]}
//         controller={true}
//         layers={layers}
//         initialViewState={{
//           longitude: mapCenter[0],
//           latitude: mapCenter[1],
//           zoom,
//           pitch: 0,
//           bearing: 0,
//         }}
//         // tie DeckGL to your Mapbox canvas
//         context={{
//           gl: map.painter.context.gl,
//           useDevicePixels: true,
//         }}
//         style={{ position: "absolute", inset: 0, zIndex: 1 }}
//       />
//     </div>
//   );
// }
