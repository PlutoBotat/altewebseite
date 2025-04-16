
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const AnnouncementBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#B8860B] to-[#C71585] py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-white gap-3 sm:gap-0">
        <div className="text-lg font-medium text-center sm:text-left">
          PlutoBot Plus · Ab jetzt verfügbar. Personalisiere PlutoBot nach deinen Wünschen!
        </div>
        <Button
          variant="default"
          className="bg-black/20 hover:bg-black/30 text-white rounded-full"
        >
          Mehr zu PlutoBot Plus <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
