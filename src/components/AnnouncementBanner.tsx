
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const AnnouncementBanner = () => {
  return (
    <div className="w-full galaxy-gradient py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-white gap-3 sm:gap-0">
        <div className="text-lg font-medium text-center sm:text-left">
          PlutoBot Plus · Personalisiere PlutoBot nach deinen Wünschen! Ab jetzt verfügbar.
        </div>
        <Button
          variant="custom"
          className="bg-black/20 hover:bg-black/30 text-white rounded-full border-transparent transform hover:scale-105 transition-all duration-300"
        >
          Mehr zu PlutoBot Plus <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
