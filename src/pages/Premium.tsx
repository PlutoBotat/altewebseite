
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-8 text-gradient">PlutoBot Premium</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Basic Plan */}
            <div className="bg-[#1E2130] rounded-xl p-8 border border-white/10 hover:border-galaxy-blue/40 transition-all">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-3xl font-bold mb-6">€0<span className="text-sm font-normal">/month</span></p>
              <ul className="space-y-4 mb-8 text-left">
                <PremiumFeature text="Moderation Basic" />
                <PremiumFeature text="Welcome Messages" />
                <PremiumFeature text="Level System" />
              </ul>
              <Button 
                variant="outline"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-[#1E2130] rounded-xl p-8 border border-galaxy-blue transform scale-105 hover:border-galaxy-blue/40 transition-all">
              <div className="bg-galaxy-blue/20 text-galaxy-blue text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-3xl font-bold mb-6">€4.99<span className="text-sm font-normal">/month</span></p>
              <ul className="space-y-4 mb-8 text-left">
                <PremiumFeature text="All Basic Features" />
                <PremiumFeature text="Advanced Moderation" />
                <PremiumFeature text="Custom Commands" />
                <PremiumFeature text="Auto Roles" />
                <PremiumFeature text="Priority Support" />
              </ul>
              <Button 
                variant="custom"
                className="w-full bg-galaxy-blue hover:bg-galaxy-blue/90"
              >
                Upgrade Now
              </Button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-[#1E2130] rounded-xl p-8 border border-white/10 hover:border-galaxy-blue/40 transition-all">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-6">€9.99<span className="text-sm font-normal">/month</span></p>
              <ul className="space-y-4 mb-8 text-left">
                <PremiumFeature text="All Premium Features" />
                <PremiumFeature text="Custom Bot Development" />
                <PremiumFeature text="24/7 Support" />
                <PremiumFeature text="Dedicated Manager" />
              </ul>
              <Button 
                variant="outline"
                className="w-full"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

const PremiumFeature = ({ text }: { text: string }) => (
  <li className="flex items-center gap-2">
    <Check className="h-5 w-5 text-galaxy-blue flex-shrink-0" />
    <span>{text}</span>
  </li>
);

export default Premium;
