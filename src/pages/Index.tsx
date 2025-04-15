
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Command, Shield, Users, Zap } from "lucide-react";

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pluto-dark to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pluto-purple to-pluto-light bg-clip-text text-transparent">
            PlutoBot
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Der ultimative Discord Bot für deine Community.
            Moderiere, verwalte und verbessere deinen Server mit PlutoBot.
          </p>
          <Button size="lg" className="bg-pluto-purple hover:bg-pluto-light text-white font-semibold px-8 py-6 text-lg rounded-full">
            Bot hinzufügen <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Funktionen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-8 h-8 text-pluto-purple" />,
              title: "Moderation",
              description: "Halte deinen Server sicher mit fortschrittlichen Moderationstools",
            },
            {
              icon: <Bot className="w-8 h-8 text-pluto-purple" />,
              title: "Automatisierung",
              description: "Automatisiere Aufgaben und spare wertvolle Zeit",
            },
            {
              icon: <Command className="w-8 h-8 text-pluto-purple" />,
              title: "Befehle",
              description: "Intuitive und anpassbare Befehle für alle Bedürfnisse",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-xl backdrop-blur-sm"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-pluto-dark/50 to-black/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <Users />, value: "100K+", label: "Nutzer" },
            { icon: <Zap />, value: "500+", label: "Server" },
            { icon: <Command />, value: "50+", label: "Befehle" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.2 }}
              className="p-6"
            >
              <div className="flex justify-center mb-4 text-pluto-purple">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Bereit für PlutoBot?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Verbessere deinen Discord Server noch heute mit PlutoBot
          </p>
          <Button size="lg" className="bg-pluto-purple hover:bg-pluto-light text-white font-semibold px-8 py-6 text-lg rounded-full">
            PlutoBot einladen <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
