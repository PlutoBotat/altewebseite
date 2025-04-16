
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <AnnouncementBanner />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        <div className="space-y-8 max-w-4xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2 text-gray-300">
              <p>PlutoBot GmbH</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <div className="space-y-2 text-gray-300">
              <p>Telefon: +49 (0) 123 456789</p>
              <p>E-Mail: info@plutobot.de</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Handelsregister</h2>
            <div className="space-y-2 text-gray-300">
              <p>Registergericht: Amtsgericht Musterstadt</p>
              <p>Registernummer: HRB 12345</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
