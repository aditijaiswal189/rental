"use client";
import React from 'react';
import { Logo } from './logo';
import { NavLinks } from './nav-links';
import { SearchBar } from './search-bar';
import { AuthButtons } from './auth-buttons';
import { MobileMenuButton } from './mobile-menu-buttton';

const Header: React.FC = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Logo />
          <NavLinks />
        </div>

        <div className="flex items-center space-x-4">
          <SearchBar />
          <AuthButtons />
          <MobileMenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
