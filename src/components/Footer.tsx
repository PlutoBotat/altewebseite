
import { ChevronRight, Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-galaxy-darker border-t border-white/10">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              {/* PlutoBot Logo statt Emoji */}
              <img src="/lovable-uploads/786677f2-3e22-4512-941e-b239d50114a8.png" alt="PlutoBot Logo" className="w-10 h-10 rounded-full object-contain bg-[#0B0E14]"/>
              <span className="text-2xl font-bold text-white">PlutoBot</span>
            </Link>
            <p className="text-gray-400 mb-4">
              PlutoBot ist eine Discord App, die dir hilft, deinen Server zu optimieren.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Produkt</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Funktionen" />
              <FooterLink href="/" label="Premium" />
              <FooterLink href="/" label="Preise" />
              <FooterLink href="/" label="Sicherheit" />
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Ressourcen</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Dokumentation" />
              <FooterLink href="/" label="Tutorial" />
              <FooterLink href="/about" label="Über uns" />
              <FooterLink href="/" label="Blog" />
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              {/* Impressum & Datenschutz werden entfernt */}
              {/* <FooterLink href="/impressum" label="Impressum" /> */}
              {/* <FooterLink href="/" label="Datenschutz" /> */}
              <FooterLink href="/" label="AGB" />
              <FooterLink href="/" label="Cookie-Einstellungen" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PlutoBot. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Kontakt
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Deutsch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link 
      to={href} 
      className="text-gray-400 hover:text-white transition-colors flex items-center"
    >
      <ChevronRight className="h-4 w-4 mr-1 text-gray-500" />
      {label}
    </Link>
  </li>
);

