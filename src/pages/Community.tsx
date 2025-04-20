
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Community = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-gradient">Community</h1>
          <p className="text-xl mb-6">
            Trete unserer Community bei, diskutiere über neue Features & hilf anderen Usern weiter!
          </p>
          <p className="text-lg">
            Schau auf unserem Discord-Server oder auf Social Media vorbei.
          </p>
          <div className="mt-8 flex flex-col gap-3 items-center">
            <a
              href="https://discord.gg/YOUR-COMMUNITY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-galaxy-blue hover:bg-galaxy-blue/90 px-8 py-3 rounded-full font-semibold text-white shadow-galaxy-glow transition"
            >
              Discord Community
            </a>
            <a
              href="https://twitter.com/plutobot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1A1F2C] hover:bg-galaxy-blue/40 px-8 py-3 rounded-full font-semibold text-white transition"
            >
              Twitter/X ansehen
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
