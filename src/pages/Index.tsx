
import { ArrowRight, Bot, Command, Server, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-galaxy-dark to-galaxy-darker text-white overflow-x-hidden">
      <AnnouncementBanner />
      <MainNav />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-galaxy-purple/20 border border-galaxy-purple/30">
            <span className="text-gray-300 font-medium">Version 1.0 jetzt verfügbar!</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 text-gradient leading-tight">
            Mache deinen <br/>Server smarter!
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto">
            PlutoBot ist eine App für Discord, die dir hilft, deinen Discord-Server und deine Community zu optimieren, indem sie tolle Funktionen bietet.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="xl" 
              variant="custom"
              rounded="full"
              className="font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-galaxy-glow w-full sm:w-auto bg-galaxy-blue hover:bg-galaxy-blue/90"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard öffnen
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              rounded="full"
              className="font-semibold hover:bg-white/10 flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto border-white/20"
            >
              Entdecke die Funktionen <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </motion.div>
        
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-galaxy-blue/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-galaxy-purple/20 rounded-full filter blur-3xl"></div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Leistungsstarke Funktionen</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            GalaxyBot bietet alles, was du für einen perfekt organisierten Discord Server brauchst
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Bot className="w-10 h-10 text-galaxy-blue" />}
            title="Automatische Moderation"
            description="Halte deinen Server sauber mit KI-gestützter Moderation, die Spam und unangemessene Inhalte erkennt."
          />
          
          <FeatureCard 
            icon={<Command className="w-10 h-10 text-galaxy-blue" />}
            title="Benutzerdefinierte Befehle"
            description="Erstelle benutzerdefinierte Befehle, die perfekt zu deinem Server und deiner Community passen."
          />
          
          <FeatureCard 
            icon={<Server className="w-10 h-10 text-galaxy-blue" />}
            title="Server Statistiken"
            description="Behalte den Überblick über die Aktivität und das Wachstum deines Servers mit detaillierten Analysen."
          />
          
          <FeatureCard 
            icon={<Sparkles className="w-10 h-10 text-galaxy-blue" />}
            title="Willkommensnachrichten"
            description="Begrüße neue Mitglieder mit personalisierten Nachrichten und Rollen, um sie willkommen zu heißen."
          />
          
          <FeatureCard 
            icon={<Command className="w-10 h-10 text-galaxy-blue" />}
            title="Ticketing System"
            description="Vereinfache den Support mit einem Ticketing-System, das Anfragen organisiert und verwaltet."
          />
          
          <FeatureCard 
            icon={<Bot className="w-10 h-10 text-galaxy-blue" />}
            title="Level System"
            description="Motiviere deine Community mit einem Level-System, das aktive Mitglieder belohnt."
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-[#1E2130] rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-galaxy-blue/30 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-galaxy-purple/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Bereit, deinen Server zu verbessern?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Füge PlutoBot jetzt zu deinem Discord Server hinzu und entdecke alle Funktionen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="xl" 
                variant="custom"
                rounded="full"
                className="font-semibold transition-all duration-300 w-full sm:w-auto bg-galaxy-blue hover:bg-galaxy-blue/90"
              >
                Zum Discord hinzufügen
              </Button>
              <Button 
                variant="secondary" 
                size="xl"
                rounded="full"
                className="font-semibold w-full sm:w-auto"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard öffnen
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card className="bg-[#1E2130] border-white/10 hover:border-galaxy-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-galaxy-blue/10 h-full">
    <CardContent className="p-8">
      <div className="mb-6 p-4 bg-galaxy-blue/10 rounded-xl inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </CardContent>
  </Card>
);

export default Index;
