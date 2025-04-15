
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Command, Shield, Users, Zap } from "lucide-react";

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            PlutoBot
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Der ultimative Discord Bot für deine Community.
            Ein moderner Bot mit vielen Funktionen.
          </p>
          <Button 
            size="lg" 
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-7 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Bot hinzufügen <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold text-center mb-20">Funktionen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Shield className="w-10 h-10 text-purple-400" />,
              title: "Moderation",
              description: "Halte deinen Server sicher mit fortschrittlichen Moderationstools",
            },
            {
              icon: <Bot className="w-10 h-10 text-purple-400" />,
              title: "Automatisierung",
              description: "Automatisiere Aufgaben und spare wertvolle Zeit",
            },
            {
              icon: <Command className="w-10 h-10 text-purple-400" />,
              title: "Befehle",
              description: "Intuitive und anpassbare Befehle für alle Bedürfnisse",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#151823] p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Users className="w-8 h-8" />, value: "100K+", label: "Nutzer" },
            { icon: <Zap className="w-8 h-8" />, value: "500+", label: "Server" },
            { icon: <Command className="w-8 h-8" />, value: "50+", label: "Befehle" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6 text-purple-400">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-8">Bereit für PlutoBot?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Verbessere deinen Discord Server noch heute mit PlutoBot
          </p>
          <Button 
            size="lg" 
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-7 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            PlutoBot einladen <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
