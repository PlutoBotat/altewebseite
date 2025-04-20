
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-gradient">Datenschutzerklärung (EU)</h1>
          <div className="space-y-8 max-w-4xl">
            <section className="bg-[#151823] p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-pluto-light">Geltungsbereich</h2>
              <p className="text-gray-300">
                Diese Datenschutzerklärung gilt für alle Nutzer aus der Europäischen Union (EU) 
                und entspricht der Europäischen Datenschutz-Grundverordnung (DSGVO).
              </p>
            </section>
            <section className="bg-[#151823] p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-pluto-light">Datenverarbeitung</h2>
              <ul className="text-gray-300 space-y-2 list-disc pl-4">
                <li>Wir erheben nur Daten, die zur Bereitstellung unserer Dienste erforderlich sind.</li>
                <li>Deine Daten werden niemals ohne Zustimmung an Dritte verkauft.</li>
                <li>Du kannst jederzeit Auskunft, Berichtigung oder Löschung deiner Daten verlangen.</li>
              </ul>
            </section>
            <section className="bg-[#151823] p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-pluto-light">Kontakt & Anfragen</h2>
              <div className="text-gray-300 space-y-2">
                <p>Verantwortlich: PlutoBot</p>
                <p>Email: info@plutobot.de</p>
                <p>Du hast das Recht, dich bei einer Aufsichtsbehörde zu beschweren.</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
