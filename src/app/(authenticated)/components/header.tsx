"use client"
import React from 'react';
import { Home, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header: React.FC = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <Home className="w-6 h-6 text-primary" />
            <span className="ml-2 text-xl font-semibold">PropertyFinder</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 ml-8">
            <Button variant="ghost" className="font-medium">Buy</Button>
            <Button variant="ghost" className="font-medium">Rent</Button>
            <Button variant="ghost" className="font-medium">Sell</Button>
            <Button variant="ghost" className="font-medium">Agents</Button>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-[300px]">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search properties..." 
              className="pl-10"
            />
          </div>
          
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          
          <Button className="hidden md:inline-flex">
            List Property
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;