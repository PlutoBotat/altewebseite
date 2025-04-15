
import { ChevronDown, Planet } from "lucide-react";
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
          <Planet className="w-8 h-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">PlutoBot</span>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Funktionen <ChevronDown className="ml-1 h-4 w-4" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Über uns <ChevronDown className="ml-1 h-4 w-4" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Support
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button className="bg-[#6D5AE6] hover:bg-[#5845D1] text-white">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-white">
            DE <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </nav>
    </header>
  );
};
