import React from 'react';
import { FilterType, PropertyType } from '../types';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import PropertyCard from './property-card';

interface PropertiesListProps {
  properties: PropertyType[];
  selectedProperty: PropertyType | null;
  setSelectedProperty: (property: PropertyType) => void;
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
  showFiltersOnly?: boolean;
}

const priceRanges = [
  { min: null, max: null, label: 'Any Price' },
  { min: 1000, max: 1500, label: '$1,000 - $1,500' },
  { min: 1500, max: 2000, label: '$1,500 - $2,000' },
  { min: 2000, max: 2500, label: '$2,000 - $2,500' },
  { min: 2500, max: 3000, label: '$2,500 - $3,000' },
  { min: 3000, max: 3500, label: '$3,000 - $3,500' },
  { min: 3500, max: 4000, label: '$3,500 - $4,000' },
  { min: 4000, max: null, label: '$4,000+' }
];

const bedroomOptions = [
  { value: null, label: 'Any Beds' },
  { value: 1, label: '1+ Bed' },
  { value: 2, label: '2+ Beds' },
  { value: 3, label: '3+ Beds' },
  { value: 4, label: '4+ Beds' }
];

const propertyTypes = [
  { value: null, label: 'Any Type' },
  { value: 'Apartment', label: 'Apartment' },
  { value: 'Condo', label: 'Condo' },
  { value: 'Townhouse', label: 'Townhouse' },
  { value: 'House', label: 'House' },
  { value: 'Loft', label: 'Loft' },
  { value: 'Studio', label: 'Studio' }
];

const PropertiesList: React.FC<PropertiesListProps> = ({ 
  properties, 
  selectedProperty, 
  setSelectedProperty,
  filters,
  setFilters,
  showFiltersOnly = false
}) => {
  const clearFilters = () => {
    setFilters({
      minPrice: null,
      maxPrice: null,
      bedrooms: null,
      propertyType: null
    });
  };

  const filteredProperties = properties.filter(property => {
    if (filters.minPrice !== null && property.price < filters.minPrice) return false;
    if (filters.maxPrice !== null && property.price > filters.maxPrice) return false;
    if (filters.bedrooms !== null && property.bedrooms < filters.bedrooms) return false;
    if (filters.propertyType !== null && property.type !== filters.propertyType) return false;
    return true;
  });

  const getCurrentPriceLabel = () => {
    if (!filters.minPrice && !filters.maxPrice) return 'Price';
    const range = priceRanges.find(r => r.min === filters.minPrice && r.max === filters.maxPrice);
    return range ? range.label.replace('$', '') : 'Price';
  };

  if (showFiltersOnly) {
    return (
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-2 flex-1">
          <Button 
            variant="outline"
            size="sm"
            className="flex items-center space-x-1 min-w-[120px]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>All Filters</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="min-w-[140px] justify-between">
                {getCurrentPriceLabel()}
                <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Price Range</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {priceRanges.map((range, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setFilters(prev => ({
                    ...prev,
                    minPrice: range.min,
                    maxPrice: range.max
                  }))}
                  className="cursor-pointer"
                >
                  {range.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="min-w-[120px] justify-between">
                {filters.bedrooms ? `${filters.bedrooms}+ Beds` : 'Beds'}
                <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-40">
              <DropdownMenuLabel>Bedrooms</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {bedroomOptions.map((option, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setFilters(prev => ({
                    ...prev,
                    bedrooms: option.value
                  }))}
                  className="cursor-pointer"
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="min-w-[140px] justify-between">
                {filters.propertyType || 'Property Type'}
                <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-44">
              <DropdownMenuLabel>Property Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {propertyTypes.map((type, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setFilters(prev => ({
                    ...prev,
                    propertyType: type.value
                  }))}
                  className="cursor-pointer"
                >
                  {type.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
          </span>
          
          {Object.values(filters).some(value => value !== null) && (
            <Button 
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-primary hover:text-primary"
            >
              Clear all
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-background">
      <div className="flex-1 overflow-y-auto">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={setSelectedProperty}
              isSelected={selectedProperty?.id === property.id}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No properties match your current filters.</p>
            <Button 
              variant="link"
              onClick={clearFilters}
              className="mt-2 text-primary hover:text-primary-foreground font-medium"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesList;
