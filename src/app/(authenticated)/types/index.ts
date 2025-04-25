export interface PropertyType {
    id: number;
    title: string;
    price: number;
    address: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    type: string;
    image: string;
    description: string;
    latitude: number;
    longitude: number;
    features: string[];
  }
  
  export interface FilterType {
    minPrice: number | null;
    maxPrice: number | null;
    bedrooms: number | null;
    propertyType: string | null;
  }