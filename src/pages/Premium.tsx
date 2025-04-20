
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Premium = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-galaxy-dark to-galaxy-darker text-white">
      <AnnouncementBanner />
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-8 text-gradient">PlutoBot Premium</h1>
          <div className="bg-[#1E2130] rounded-xl p-8 border border-galaxy-blue/40 shadow-galaxy-glow">
            <p className="text-xl">
              Das Premium-Angebot ist <span className="font-bold text-galaxy-blue">noch nicht verfügbar</span>.
            </p>
            <p className="text-md text-gray-400 mt-2">
              Schau bald wieder vorbei oder registriere dich für unseren Newsletter, um keine Updates zu verpassen!
            </p>
            <div className="flex items-center justify-center mt-8">
              <button
                className="bg-galaxy-blue hover:bg-galaxy-blue/90 transition px-7 py-3 rounded-full font-semibold shadow-galaxy-glow text-white cursor-not-allowed opacity-60"
                disabled
              >
                Bald verfügbar
              </button>
            </div>
          </div>
          {/* Optional alternative content instead of "Server Management" removed as user requested */}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Premium;
