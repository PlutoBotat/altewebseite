
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  Users, 
  MessageCircle,
  Settings 
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <AnnouncementBanner />
      <MainNav />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Discord Bot Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-[#1E2130] border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pluto-purple/20 rounded-lg">
                <Users className="w-6 h-6 text-pluto-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Server Members</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-[#1E2130] border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pluto-purple/20 rounded-lg">
                <MessageCircle className="w-6 h-6 text-pluto-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Messages</p>
                <p className="text-2xl font-bold">45.2K</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-[#1E2130] border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pluto-purple/20 rounded-lg">
                <BarChart className="w-6 h-6 text-pluto-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Commands Used</p>
                <p className="text-2xl font-bold">8,901</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-[#1E2130] border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pluto-purple/20 rounded-lg">
                <Settings className="w-6 h-6 text-pluto-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Active Servers</p>
                <p className="text-2xl font-bold">42</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
