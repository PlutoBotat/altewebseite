
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  Users, 
  Clock, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  MessageCircle,
  BarChart
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const ActivityTracker = () => {
  const activityData = [
    { 
      id: 1, 
      server: "Gaming Community", 
      members: 456, 
      messages: 1245, 
      commands: 287,
      growth: 8.2,
      icon: "🎮"
    },
    { 
      id: 2, 
      server: "Web Dev Hub", 
      members: 289, 
      messages: 876, 
      commands: 168,
      growth: 5.4,
      icon: "💻"
    },
    { 
      id: 3, 
      server: "Anime Fans", 
      members: 345, 
      messages: 1054, 
      commands: 213,
      growth: 12.7,
      icon: "🎭"
    },
    { 
      id: 4, 
      server: "Music Lounge", 
      members: 128, 
      messages: 432, 
      commands: 95,
      growth: -2.3,
      icon: "🎵"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ActivityCard 
          icon={<Users className="w-6 h-6 text-pluto-purple" />}
          title="Aktive Nutzer"
          value="834"
          change="+32"
          increasing={true}
        />
        
        <ActivityCard 
          icon={<MessageCircle className="w-6 h-6 text-pluto-purple" />}
          title="Nachrichten heute"
          value="3,607"
          change="+485"
          increasing={true}
        />
        
        <ActivityCard 
          icon={<Clock className="w-6 h-6 text-pluto-purple" />}
          title="Durchschn. Aktivität"
          value="4.2h"
          change="+0.5h"
          increasing={true}
        />
        
        <ActivityCard 
          icon={<Activity className="w-6 h-6 text-pluto-purple" />}
          title="Wachstumsrate"
          value="8.7%"
          change="+2.1%"
          increasing={true}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1E2130] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Aktivitätsverlauf</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-pluto-purple/10">Täglich</Button>
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-pluto-purple/10">Wöchentlich</Button>
              <Button variant="outline" size="sm" className="border-white/10 bg-pluto-purple/20">Monatlich</Button>
            </div>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <div className="text-gray-500">
              Aktivitätsverlauf-Chart wird hier angezeigt
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1E2130] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Aktivitätszeiten</CardTitle>
            <Calendar className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <div className="text-gray-500">
              Heatmap für Aktivitätszeiten
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-[#1E2130] border-white/10">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-medium">Server-Aktivität</CardTitle>
          <BarChart className="w-5 h-5 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Server</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Mitglieder</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Nachrichten (24h)</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Befehle (24h)</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Wachstum</th>
                </tr>
              </thead>
              <tbody>
                {activityData.map(server => (
                  <tr key={server.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="text-xl">{server.icon}</div>
                        <span className="font-medium">{server.server}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{server.members}</td>
                    <td className="py-3 px-4">{server.messages}</td>
                    <td className="py-3 px-4">{server.commands}</td>
                    <td className="py-3 px-4">
                      <div className={`flex items-center ${
                        server.growth > 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {server.growth > 0 ? 
                          <ArrowUpRight className="w-4 h-4 mr-1" /> : 
                          <ArrowDownRight className="w-4 h-4 mr-1" />
                        }
                        {Math.abs(server.growth)}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-[#1E2130] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Populäre Kanäle</CardTitle>
            <MessageCircle className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ChannelItem name="💬 allgemein" messages="567" server="Gaming Community" />
              <ChannelItem name="🎮 gaming" messages="423" server="Gaming Community" />
              <ChannelItem name="💻 development" messages="312" server="Web Dev Hub" />
              <ChannelItem name="🎵 music-chat" messages="298" server="Music Lounge" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1E2130] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Aktive Nutzer</CardTitle>
            <Users className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <UserItem name="Max Mustermann" messages="124" status="Online" />
              <UserItem name="Erika Musterfrau" messages="98" status="Online" />
              <UserItem name="John Doe" messages="86" status="Away" />
              <UserItem name="Jane Smith" messages="72" status="Online" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1E2130] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Integration-Status</CardTitle>
            <Activity className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <IntegrationItem name="YouTube" status="Verbunden" isConnected={true} />
              <IntegrationItem name="Twitch" status="Verbunden" isConnected={true} />
              <IntegrationItem name="Spotify" status="Verbunden" isConnected={true} />
              <IntegrationItem name="Reddit" status="Nicht verbunden" isConnected={false} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ActivityCard = ({ icon, title, value, change, increasing }) => {
  return (
    <Card className="p-6 bg-[#1E2130] border-white/10">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-pluto-purple/20 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className={`text-xs mt-1 ${increasing ? 'text-green-400' : 'text-red-400'} flex items-center gap-1`}>
            {increasing ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {change}
          </p>
        </div>
      </div>
    </Card>
  );
};

const ChannelItem = ({ name, messages, server }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-400">{server}</p>
      </div>
      <div className="flex items-center">
        <MessageCircle className="w-3 h-3 text-gray-400 mr-1" />
        <span className="text-sm text-gray-400">{messages}</span>
      </div>
    </div>
  );
};

const UserItem = ({ name, messages, status }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-pluto-purple/20 flex items-center justify-center">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-400">{messages} msgs</p>
        </div>
      </div>
      <div className={`px-2 py-1 rounded text-xs ${
        status === 'Online' ? 'bg-green-500/20 text-green-400' : 
        status === 'Away' ? 'bg-yellow-500/20 text-yellow-400' : 
        'bg-gray-500/20 text-gray-400'
      }`}>
        {status}
      </div>
    </div>
  );
};

const IntegrationItem = ({ name, status, isConnected }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="p-1.5 bg-pluto-purple/20 rounded-md">
          <Activity className="w-3.5 h-3.5 text-pluto-purple" />
        </div>
        <span className="text-sm font-medium">{name}</span>
      </div>
      <div className={`px-2 py-1 rounded text-xs ${
        isConnected ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
      }`}>
        {status}
      </div>
    </div>
  );
};
