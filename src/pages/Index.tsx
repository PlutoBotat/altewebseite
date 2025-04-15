
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
          <h1 className="text-7xl md:text-8xl font-bold mb-8">
            Mache deinen<br />Server smarter!
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto">
            PlutoBot ist eine App für Discord, die dir hilft, deinen Discord-Server und deine Community zu optimieren, indem sie tolle Funktionen für die Organisation des Nutzer-Supports, dein Server-Team und vieles mehr bietet.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-[#6D5AE6] hover:bg-[#5845D1] text-white font-semibold px-8 py-7 text-lg rounded-full"
            >
              Hol dir den Bot jetzt
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white font-semibold text-lg"
            >
              Entdecke die Funktionen <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </motion.div>
        
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Index;
