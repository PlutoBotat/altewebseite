
import { useState } from "react";
import { MainNav } from "@/components/MainNav";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Users, 
  MessageCircle,
  Settings,
  BarChart2,
  Server,
  Terminal,
  Bell,
  Shield,
  PieChart,
  Activity,
  Calendar,
  Command
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { ServerManagement } from "@/components/ServerManagement";
import { CommandAnalytics } from "@/components/CommandAnalytics";
import { ActivityTracker } from "@/components/ActivityTracker";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <AnnouncementBanner />
      <MainNav />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Discord Bot Dashboard</h1>
            <p className="text-gray-400">Verwalte deinen Bot und überwache die Aktivitäten</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Input 
              className="bg-[#1E2130] border-white/10 text-white placeholder:text-gray-500" 
              placeholder="Suche nach Servern, Befehlen..."
            />
            <Menubar className="bg-[#1E2130] border-white/10">
              <MenubarMenu>
                <MenubarTrigger className="text-white hover:bg-pluto-purple/10">
                  <span className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Aktionen
                  </span>
                </MenubarTrigger>
                <MenubarContent className="bg-[#1E2130] border-white/10">
                  <MenubarItem className="text-white hover:bg-pluto-purple/10">Bot neu starten</MenubarItem>
                  <MenubarItem className="text-white hover:bg-pluto-purple/10">Update prüfen</MenubarItem>
                  <MenubarItem className="text-white hover:bg-pluto-purple/10">Einstellungen</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-[#1E2130] border border-white/10 p-1">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-pluto-purple/20 data-[state=active]:text-white text-gray-400 hover:text-white"
            >
              Übersicht
            </TabsTrigger>
            <TabsTrigger 
              value="servers" 
              className="data-[state=active]:bg-pluto-purple/20 data-[state=active]:text-white text-gray-400 hover:text-white"
            >
              Server
            </TabsTrigger>
            <TabsTrigger 
              value="commands" 
              className="data-[state=active]:bg-pluto-purple/20 data-[state=active]:text-white text-gray-400 hover:text-white"
            >
              Befehle
            </TabsTrigger>
            <TabsTrigger 
              value="activity" 
              className="data-[state=active]:bg-pluto-purple/20 data-[state=active]:text-white text-gray-400 hover:text-white"
            >
              Aktivität
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard 
                icon={<Users className="w-6 h-6 text-pluto-purple" />}
                title="Server Members"
                value="1,234"
                trend="+12% im letzten Monat"
                trendUp={true}
              />
              
              <StatsCard 
                icon={<MessageCircle className="w-6 h-6 text-pluto-purple" />}
                title="Total Messages"
                value="45.2K"
                trend="+8% diese Woche"
                trendUp={true}
              />
              
              <StatsCard 
                icon={<Command className="w-6 h-6 text-pluto-purple" />}
                title="Commands Used"
                value="8,901"
                trend="+5% seit gestern"
                trendUp={true}
              />
              
              <StatsCard 
                icon={<Server className="w-6 h-6 text-pluto-purple" />}
                title="Active Servers"
                value="42"
                trend="+3 neue diese Woche"
                trendUp={true}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-[#1E2130] border-white/10 col-span-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl font-medium">Aktivitätsübersicht</CardTitle>
                  <BarChart2 className="w-5 h-5 text-gray-400" />
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    Aktivitätstrend wird hier angezeigt
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1E2130] border-white/10">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl font-medium">Top Befehle</CardTitle>
                  <PieChart className="w-5 h-5 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <CommandUsageItem name="/help" usage="1,245" />
                    <CommandUsageItem name="/play" usage="982" />
                    <CommandUsageItem name="/ban" usage="567" />
                    <CommandUsageItem name="/kick" usage="421" />
                    <CommandUsageItem name="/mute" usage="389" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-[#1E2130] border-white/10">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl font-medium">Neueste Events</CardTitle>
                  <Bell className="w-5 h-5 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <EventItem 
                      title="Neuer Server hinzugefügt" 
                      description="Gaming Community Discord wurde hinzugefügt" 
                      time="Vor 2 Stunden"
                      icon={<Server className="w-4 h-4" />}
                    />
                    <EventItem 
                      title="Bot Update" 
                      description="Version 2.1.0 wurde installiert" 
                      time="Heute, 10:45"
                      icon={<Terminal className="w-4 h-4" />}
                    />
                    <EventItem 
                      title="Neue Berechtigungen" 
                      description="Admin-Rolle wurde aktualisiert" 
                      time="Gestern, 18:30"
                      icon={<Shield className="w-4 h-4" />}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1E2130] border-white/10">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl font-medium">Kommende Events</CardTitle>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <EventItem 
                      title="Server Wartung" 
                      description="Geplante Downtime für Updates" 
                      time="Morgen, 03:00"
                      icon={<Settings className="w-4 h-4" />}
                    />
                    <EventItem 
                      title="Neues Feature Release" 
                      description="Music-Player und Playlist Management" 
                      time="In 3 Tagen"
                      icon={<Activity className="w-4 h-4" />}
                    />
                    <EventItem 
                      title="Community Event" 
                      description="Gaming Turnier auf Server 'Gamers United'" 
                      time="Sa, 15:00"
                      icon={<Users className="w-4 h-4" />}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="servers">
            <ServerManagement />
          </TabsContent>
          
          <TabsContent value="commands">
            <CommandAnalytics />
          </TabsContent>
          
          <TabsContent value="activity">
            <ActivityTracker />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

const StatsCard = ({ icon, title, value, trend, trendUp }) => {
  return (
    <Card className="p-6 bg-[#1E2130] border-white/10">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-pluto-purple/20 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className={`text-xs mt-1 ${trendUp ? 'text-green-400' : 'text-red-400'} flex items-center gap-1`}>
            {trendUp ? '↑' : '↓'} {trend}
          </p>
        </div>
      </div>
    </Card>
  );
};

const CommandUsageItem = ({ name, usage }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="p-1.5 bg-pluto-purple/20 rounded-md">
          <Terminal className="w-3.5 h-3.5 text-pluto-purple" />
        </div>
        <span className="text-sm font-medium">{name}</span>
      </div>
      <span className="text-sm text-gray-400">{usage}</span>
    </div>
  );
};

const EventItem = ({ title, description, time, icon }) => {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 p-2 bg-pluto-purple/20 rounded-md">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-gray-400">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};

export default Dashboard;
