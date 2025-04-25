import React from 'react';
import { FilterType } from '../types';
import { Sliders, X } from 'lucide-react';

interface PropertyFiltersProps {
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const propertyTypes = ["Apartment", "Condo", "Townhouse", "House", "Loft", "Studio"];

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ 
  filters, 
  setFilters, 
  isOpen, 
  setIsOpen 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-foreground/50 z-[999] flex items-center justify-center p-4">
      <div className="bg-card text-card-foreground rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto border border-border">
        <div className="flex justify-between items-center border-b border-border p-4">
          <div className="flex items-center">
            <Sliders size={18} className="mr-2" />
            <h3 className="font-semibold text-lg">Filters</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          {/* Price Range */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm text-muted-foreground mb-1">Min Price</label>
                <select 
                  className="w-full p-2 border border-input bg-background text-foreground rounded-md"
                  value={filters.minPrice || ''}
                  onChange={(e) => setFilters({
                    ...filters,
                    minPrice: e.target.value ? Number(e.target.value) : null
                  })}
                >
                  <option value="">No min</option>
                  <option value="1000">$1,000</option>
                  <option value="1500">$1,500</option>
                  <option value="2000">$2,000</option>
                  <option value="2500">$2,500</option>
                  <option value="3000">$3,000</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-muted-foreground mb-1">Max Price</label>
                <select 
                  className="w-full p-2 border border-input bg-background text-foreground rounded-md"
                  value={filters.maxPrice || ''}
                  onChange={(e) => setFilters({
                    ...filters,
                    maxPrice: e.target.value ? Number(e.target.value) : null
                  })}
                >
                  <option value="">No max</option>
                  <option value="2000">$2,000</option>
                  <option value="2500">$2,500</option>
                  <option value="3000">$3,000</option>
                  <option value="3500">$3,500</option>
                  <option value="4000">$4,000</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Bedrooms</h4>
            <div className="flex space-x-2">
              {[null, 1, 2, 3, 4].map((num, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded-md flex-1 transition-colors
                    ${filters.bedrooms === num
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:bg-muted'
                    }`}
                  onClick={() => setFilters({ ...filters, bedrooms: num })}
                >
                  {num === null ? 'Any' : num === 4 ? '4+' : num}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Property Type</h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                className={`px-4 py-2 border rounded-md transition-colors
                  ${filters.propertyType === null
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-foreground border-border hover:bg-muted'
                  }`}
                onClick={() => setFilters({ ...filters, propertyType: null })}
              >
                Any
              </button>
              {propertyTypes.map((type, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded-md transition-colors
                    ${filters.propertyType === type
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:bg-muted'
                    }`}
                  onClick={() => setFilters({ ...filters, propertyType: type })}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 pt-2">
            <button
              onClick={() => setFilters({
                minPrice: null,
                maxPrice: null,
                bedrooms: null,
                propertyType: null
              })}
              className="flex-1 py-2 border border-border rounded-md text-foreground hover:bg-muted"
            >
              Clear All
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 py-2 bg-primary text-primary-foreground rounded-md hover:brightness-110"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
