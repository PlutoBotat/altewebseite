
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Servers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-galaxy-dark to-galaxy-darker text-white">
      <AnnouncementBanner />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-gradient">Deine Server</h1>
          
          <div className="bg-[#1E2130] rounded-xl p-8 border border-white/10">
            <p className="text-xl mb-6">
              Du hast noch keine Server mit PlutoBot verbunden.
            </p>
            
            <a 
              href="https://dash.plutobot.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="custom"
                className="bg-galaxy-blue hover:bg-galaxy-blue/90 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Server hinzufügen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Servers;
