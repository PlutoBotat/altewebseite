
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export const MainNav = () => {
  return (
    <header className="w-full bg-[#0B0E14]/95 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Globe className="w-8 h-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">PlutoBot</span>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={`${navigationMenuTriggerStyle()} text-white hover:bg-pluto-purple/10 transition-colors`}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={`${navigationMenuTriggerStyle()} text-white hover:bg-pluto-purple/10 transition-colors flex items-center`}
              >
                Funktionen <ChevronDown className="ml-1 h-4 w-4 text-pluto-light" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={`${navigationMenuTriggerStyle()} text-white hover:bg-pluto-purple/10 transition-colors flex items-center`}
              >
                Über uns <ChevronDown className="ml-1 h-4 w-4 text-pluto-light" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={`${navigationMenuTriggerStyle()} text-white hover:bg-pluto-purple/10 transition-colors`}
              >
                Support
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button 
            className="bg-pluto-purple hover:bg-pluto-purple/90 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-pluto-purple/50"
          >
            Dashboard
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 rounded-full flex items-center transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            DE <ChevronDown className="ml-1 h-4 w-4 text-pluto-light" />
          </Button>
        </div>
      </nav>
    </header>
  );
};
