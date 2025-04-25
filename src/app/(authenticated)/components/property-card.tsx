import React from 'react';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { PropertyType } from '../types';

interface PropertyCardProps {
  property: PropertyType;
  onSelect: (property: PropertyType) => void;
  isSelected: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect, isSelected }) => {
  return (
    <div
      className={`
        bg-card text-card-foreground rounded-lg shadow-md overflow-hidden mb-4 transition-all duration-300 ease-in-out
        hover:shadow-lg cursor-pointer transform hover:-translate-y-1
        ${isSelected ? 'ring-2 ring-ring' : ''}
      `}
      onClick={() => onSelect(property)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2 bg-muted p-1.5 rounded-full shadow-md hover:bg-muted-foreground/10">
          <Heart size={18} className="text-muted-foreground hover:text-destructive transition-colors" />
        </button>
        <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
          {property.type}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
          <p className="text-lg font-bold text-primary">${property.price.toLocaleString()}/mo</p>
        </div>

        <div className="flex items-center text-muted-foreground mb-3 text-sm">
          <MapPin size={14} className="mr-1" />
          <p className="truncate">{property.address}</p>
        </div>

        <div className="flex justify-between mb-3">
          <div className="flex items-center text-foreground">
            <Bed size={16} className="mr-1" />
            <span className="text-sm">{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center text-foreground">
            <Bath size={16} className="mr-1" />
            <span className="text-sm">{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center text-foreground">
            <Square size={16} className="mr-1" />
            <span className="text-sm">{property.sqft} sqft</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{property.description}</p>

        <div className="flex flex-wrap gap-1">
          {property.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
              {feature}
            </span>
          ))}
          {property.features.length > 2 && (
            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
              +{property.features.length - 2} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
