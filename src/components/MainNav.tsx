
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
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
  
  return (
    <header className="w-full bg-galaxy-dark/95 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="/" className="flex items-center gap-2">
          <div className="text-galaxy-blue text-3xl">🌌</div>
          <span className="text-2xl font-bold text-white">PlutoBot</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <a href="/">
                  <Button 
                    variant="ghost"
                    className="text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Home
                  </Button>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/features">
                  <Button 
                    variant="ghost"
                    className="text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Funktionen
                  </Button>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/premium">
                  <Button 
                    variant="ghost"
                    className="text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Premium
                  </Button>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/servers">
                  <Button 
                    variant="ghost"
                    className="text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Server
                  </Button>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://dash.plutobot.de" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="custom"
              className="bg-galaxy-blue hover:bg-galaxy-blue/90 text-white shadow-md hover:shadow-galaxy-glow transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Dashboard
            </Button>
          </a>
          <Button 
            variant="outline" 
            className="bg-transparent border border-white/20 hover:bg-white/10 text-white flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            DE <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E2130] border-b border-white/10 px-4 py-4">
          <div className="flex flex-col space-y-3">
            <a 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                variant="ghost"
                className="w-full text-white hover:bg-white/10 justify-start"
              >
                Home
              </Button>
            </a>
            <a 
              href="/features" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                variant="ghost"
                className="w-full text-white hover:bg-white/10 justify-start"
              >
                Funktionen
              </Button>
            </a>
            <a 
              href="/premium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                variant="ghost"
                className="w-full text-white hover:bg-white/10 justify-start"
              >
                Premium
              </Button>
            </a>
            <a 
              href="/servers" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                variant="ghost"
                className="w-full text-white hover:bg-white/10 justify-start"
              >
                Server
              </Button>
            </a>
            
            <div className="pt-4 flex flex-col gap-3">
              <a 
                href="https://dash.plutobot.de"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button 
                  variant="custom"
                  className="w-full bg-galaxy-blue hover:bg-galaxy-blue/90 text-white shadow-md hover:shadow-galaxy-glow transition-all duration-300"
                >
                  Dashboard
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:bg-white/10 text-white"
              >
                DE <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
