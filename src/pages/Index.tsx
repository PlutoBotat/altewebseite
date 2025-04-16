
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { MainNav } from "@/components/MainNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <AnnouncementBanner />
      <MainNav />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 text-gradient">
            Mache deinen<br />Server smarter!
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto">
            PlutoBot ist eine App für Discord, die dir hilft, deinen Discord-Server und deine Community zu optimieren, indem sie tolle Funktionen für die Organisation des Nutzer-Supports, dein Server-Team und vieles mehr bietet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="xl" 
              variant="purple"
              rounded="full"
              className="font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-pluto-purple/50 w-full sm:w-auto"
            >
              Hol dir den Bot jetzt
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              rounded="full"
              className="font-semibold hover:bg-white/10 flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto border-white/20"
            >
              Entdecke die Funktionen <ArrowRight className="ml-2 h-6 w-6 text-pluto-light" />
            </Button>
          </div>
        </motion.div>
        
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pluto-purple/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pluto-light/20 rounded-full filter blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Index;
