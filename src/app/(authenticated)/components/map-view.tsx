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
