
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export const MainNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <header className="w-full bg-galaxy-dark/95 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-galaxy-blue text-3xl">🌌</div>
          <span className="text-2xl font-bold text-white">PlutoBot</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink 
                    className={`${navigationMenuTriggerStyle()} text-white hover:bg-white/5 transition-colors ${isActive('/') ? 'bg-white/10' : ''}`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={`${navigationMenuTriggerStyle()} text-white hover:bg-white/5 transition-colors flex items-center`}
                >
                  Funktionen <ChevronDown className="ml-1 h-4 w-4" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink 
                    className={`${navigationMenuTriggerStyle()} text-white hover:bg-white/5 transition-colors ${isActive('/about') ? 'bg-white/10' : ''}`}
                  >
                    Über uns <ChevronDown className="ml-1 h-4 w-4" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={`${navigationMenuTriggerStyle()} text-white hover:bg-white/5 transition-colors`}
                >
                  Support
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/dashboard">
            <Button 
              variant="custom"
              className="bg-galaxy-blue hover:bg-galaxy-blue/90 text-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md"
            >
              Dashboard
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="bg-transparent border border-white/20 hover:bg-white/10 text-white flex items-center transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            DE <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E2130] border-b border-white/10 px-4 py-4">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg text-white ${isActive('/') ? 'bg-white/10' : 'hover:bg-white/5'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`px-4 py-2 rounded-lg text-white ${isActive('/dashboard') ? 'bg-white/10' : 'hover:bg-white/5'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="px-4 py-2 rounded-lg text-white hover:bg-white/5 flex justify-between items-center">
              Funktionen <ChevronDown className="h-4 w-4" />
            </div>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg text-white ${isActive('/about') ? 'bg-white/10' : 'hover:bg-white/5'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Über uns
            </Link>
            <div className="px-4 py-2 rounded-lg text-white hover:bg-white/5">
              Support
            </div>
            
            <div className="pt-4 flex flex-col gap-3">
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  variant="custom"
                  className="w-full bg-galaxy-blue hover:bg-galaxy-blue/90 text-white"
                >
                  Dashboard
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/10 text-white"
              >
                DE <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
