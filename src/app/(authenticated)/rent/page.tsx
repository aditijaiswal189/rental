"use client";
import React, { useState, useEffect } from 'react';
import { FilterType, PropertyType } from '../types';
import Header from '../components/header';
import MapView from '../components/map-view';
import { properties } from '../data/properties';
import PropertiesList from '../components/properties-list';
import PropertyFilters from '../components/property-filters';


export default function Rent() {
  const [selectedProperty, setSelectedProperty] = useState<PropertyType | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([43.651070, -79.347015]);
  const [zoom, setZoom] = useState(13);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterType>({
    minPrice: null,
    maxPrice: null,
    bedrooms: null,
    propertyType: null
  });
  
  useEffect(() => {
    if (selectedProperty) {
      setMapCenter([selectedProperty.latitude, selectedProperty.longitude]);
      setZoom(15);
    }
  }, [selectedProperty]);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Filters Panel */}
        <div className="w-full bg-white border-b px-4 py-3">
          <div className="container mx-auto">
            <PropertiesList 
              properties={properties}
              selectedProperty={selectedProperty}
              setSelectedProperty={setSelectedProperty}
              filters={filters}
              setFilters={setFilters}
              showFiltersOnly={true}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Map View - Left Panel (Fixed) */}
          <div className="w-full md:w-7/12 lg:w-8/12 h-[300px] md:h-full relative p-4">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
              <MapView 
                properties={properties} 
                selectedProperty={selectedProperty}
                setSelectedProperty={setSelectedProperty}
                mapCenter={mapCenter}
                zoom={zoom}
              />
            </div>
          </div>
          
          {/* Properties List - Right Panel (Scrollable) */}
          <div className="w-full md:w-5/12 lg:w-4/12 flex-shrink-0 overflow-hidden flex flex-col pt-4 md:pr-4">
            <PropertiesList 
              properties={properties}
              selectedProperty={selectedProperty}
              setSelectedProperty={setSelectedProperty}
              filters={filters}
              setFilters={setFilters}
              showFiltersOnly={false}
            />
          </div>
        </div>
      </div>
      
      {/* Filters Modal */}
      <PropertyFilters 
        filters={filters}
        setFilters={setFilters}
        isOpen={showFilters}
        setIsOpen={setShowFilters}
      />
    </div>
  );
}
