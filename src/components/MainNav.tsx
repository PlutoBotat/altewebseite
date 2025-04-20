
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/features", label: "Funktionen" },
  { path: "/community", label: "Community" },
  { path: "/premium", label: "Premium" }
];

export const MainNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full bg-galaxy-dark/95 backdrop-blur sticky top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-galaxy-blue text-3xl">🌌</span>
          <span className="text-2xl font-bold text-white">PlutoBot</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded-full px-4 py-2 font-medium transition-all ${
                location.pathname === item.path
                  ? "bg-galaxy-blue text-white shadow-galaxy-glow"
                  : "text-gray-200 hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://dash.plutobot.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              rounded="full"
              className="bg-galaxy-blue hover:bg-galaxy-blue/90 shadow-galaxy-glow transition-all"
            >
              Dashboard
            </Button>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E2130] border-b border-white/10 px-4 py-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-full px-4 py-3 font-medium transition-all text-left ${
                  location.pathname === item.path
                    ? "bg-galaxy-blue text-white shadow-galaxy-glow"
                    : "text-gray-100 hover:bg-white/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://dash.plutobot.de"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button
                variant="default"
                rounded="full"
                className="w-full bg-galaxy-blue hover:bg-galaxy-blue/90 mt-2 shadow-galaxy-glow"
              >
                Dashboard
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
