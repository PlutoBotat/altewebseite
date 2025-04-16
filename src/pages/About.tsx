
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <AnnouncementBanner />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Über uns</h1>
        <div className="grid gap-8 max-w-4xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Unsere Geschichte</h2>
            <p className="text-gray-300 leading-relaxed">
              PlutoBot wurde mit dem Ziel entwickelt, Discord-Server effizienter und benutzerfreundlicher zu gestalten. 
              Unser Team besteht aus leidenschaftlichen Entwicklern und Discord-Enthusiasten, die täglich daran arbeiten, 
              das beste Bot-Erlebnis zu schaffen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Unser Team</h2>
            <p className="text-gray-300 leading-relaxed">
              Hinter PlutoBot steht ein engagiertes Team von Experten aus den Bereichen Entwicklung, 
              Design und Community Management. Gemeinsam arbeiten wir daran, PlutoBot kontinuierlich zu verbessern 
              und neue innovative Funktionen zu entwickeln.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
