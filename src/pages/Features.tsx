
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Bot, Shield, MessageSquare, Users, Zap, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-galaxy-dark to-galaxy-darker text-white">
      <AnnouncementBanner />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Funktionen</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-galaxy-blue" />}
              title="Moderation"
              description="Schütze deinen Server mit fortschrittlichen Moderationstools und Auto-Moderation."
            />
            
            <FeatureCard 
              icon={<MessageSquare className="w-10 h-10 text-galaxy-blue" />}
              title="Custom Commands"
              description="Erstelle benutzerdefinierte Befehle für deinen Server."
            />
            
            <FeatureCard 
              icon={<Users className="w-10 h-10 text-galaxy-blue" />}
              title="Level System"
              description="Belohne aktive Mitglieder mit einem fortschrittlichen Level-System."
            />
            
            <FeatureCard 
              icon={<Bot className="w-10 h-10 text-galaxy-blue" />}
              title="Auto Responder"
              description="Automatische Antworten auf häufig gestellte Fragen."
            />
            
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-galaxy-blue" />}
              title="Reaction Roles"
              description="Vergebe Rollen durch Reaktionen auf Nachrichten."
            />
            
            <FeatureCard 
              icon={<Settings className="w-10 h-10 text-galaxy-blue" />}
              title="Dashboard"
              description="Verwalte alle Einstellungen über ein übersichtliches Dashboard."
            />
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="bg-[#1E2130] border-white/10 hover:border-galaxy-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-galaxy-blue/10">
    <CardContent className="p-8">
      <div className="mb-6 p-4 bg-galaxy-blue/10 rounded-xl inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </CardContent>
  </Card>
);

export default Features;
