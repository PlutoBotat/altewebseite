
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <AnnouncementBanner />
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gradient">Impressum</h1>
          <div className="space-y-8 max-w-4xl">
            <section className="bg-[#151823] p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-pluto-light">Angaben gemäß EU-Richtlinien</h2>
              <div className="space-y-2 text-gray-300">
                <p>PlutoBot </p>
                <p>Rainbach Im Innkreis 64, 4791 Rainbach Im Innkreis</p>
                <p>Österreich</p>
                <p>Email: info@plutobot.de</p>
                <p>EU-weit geltend</p>
              </div>
            </section>
            <section className="bg-[#151823] p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-pluto-light">Haftungsausschluss</h2>
              <p className="text-gray-300">
                Inhalte dieser Website wurden sorgfältig geprüft. Wir übernehmen keine Haftung für externe Links oder fremde Inhalte.
              </p>
            </section>
            <section className="bg-[#151823] p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-pluto-light">Online-Streitbeilegung</h2>
              <p className="text-gray-300">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: <a className="text-galaxy-blue underline" href="https://ec.europa.eu/consumers/odr/" rel="noopener noreferrer" target="_blank">ec.europa.eu/consumers/odr/</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
