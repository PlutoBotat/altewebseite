
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  Filter, 
  Plus, 
  BarChart2, 
  Clock,
  Zap,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { Input } from "@/components/ui/input";

export const CommandAnalytics = () => {
  const commands = [
    { 
      id: 1, 
      name: "/help", 
      uses: 1245, 
      success: 98.2, 
      avgTime: "120ms",
      category: "Info"
    },
    { 
      id: 2, 
      name: "/play", 
      uses: 982, 
      success: 95.7, 
      avgTime: "350ms",
      category: "Music"
    },
    { 
      id: 3, 
      name: "/ban", 
      uses: 567, 
      success: 99.1, 
      avgTime: "150ms",
      category: "Moderation"
    },
    { 
      id: 4, 
      name: "/kick", 
      uses: 421, 
      success: 99.5, 
      avgTime: "140ms",
      category: "Moderation"
    },
    { 
      id: 5, 
      name: "/mute", 
      uses: 389, 
      success: 97.3, 
      avgTime: "160ms",
      category: "Moderation"
    },
    { 
      id: 6, 
      name: "/playlist", 
      uses: 372, 
      success: 94.2, 
      avgTime: "320ms",
      category: "Music"
    },
    { 
      id: 7, 
      name: "/poll", 
      uses: 287, 
      success: 96.8, 
      avgTime: "200ms",
      category: "Utility"
    },
    { 
      id: 8, 
      name: "/rank", 
      uses: 265, 
      success: 98.4, 
      avgTime: "180ms",
      category: "Levels"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnalyticsCard 
          icon={<Terminal className="w-6 h-6 text-pluto-purple" />}
          title="Gesamt-Befehle"
          value="4,528"
          subtitle="Diese Woche"
        />
        
        <AnalyticsCard 
          icon={<CheckCircle className="w-6 h-6 text-green-400" />}
          title="Erfolgsrate"
          value="97.2%"
          subtitle="Durchschnitt"
        />
        
        <AnalyticsCard 
          icon={<Clock className="w-6 h-6 text-yellow-400" />}
          title="Durchschn. Antwortzeit"
          value="215ms"
          subtitle="Letzte 24h"
        />
        
        <AnalyticsCard 
          icon={<AlertTriangle className="w-6 h-6 text-red-400" />}
          title="Fehlgeschlagene Befehle"
          value="127"
          subtitle="Diese Woche"
        />
      </div>
      
      <Card className="bg-[#1E2130] border-white/10">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-medium">Befehlsübersicht</CardTitle>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-pluto-purple/10">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-pluto-purple/10">
              <Plus className="h-4 w-4 mr-2" />
              Neuer Befehl
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input 
              className="bg-[#15171E] border-white/10 text-white placeholder:text-gray-500" 
              placeholder="Befehl suchen..."
            />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Befehl</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Kategorie</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Nutzungen</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Erfolgsrate</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Antwortzeit</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {commands.map(command => (
                  <tr key={command.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-pluto-purple/20 rounded-md">
                          <Terminal className="w-3.5 h-3.5 text-pluto-purple" />
                        </div>
                        <span className="font-medium">{command.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-400">{command.category}</td>
                    <td className="py-3 px-4">{command.uses}</td>
                    <td className="py-3 px-4">
                      <div className={`${
                        command.success >= 98 ? 'text-green-400' : 
                        command.success >= 95 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {command.success}%
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-400">{command.avgTime}</td>
                    <td className="py-3 px-4">
                      <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs inline-block">
                        Aktiv
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1E2130] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Häufigste Befehle</CardTitle>
            <BarChart2 className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center">
            <div className="text-gray-500">
              Chart für häufigste Befehle
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1E2130] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Fehlerhafte Befehle</CardTitle>
            <AlertTriangle className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ErrorItem 
                command="/play"
                error="Discord API Limit überschritten"
                count={23}
                time="Heute, 14:25"
              />
              <ErrorItem 
                command="/playlist"
                error="Fehlender Parameter: playlist_name"
                count={15}
                time="Heute, 12:37"
              />
              <ErrorItem 
                command="/ban"
                error="Fehlende Berechtigung"
                count={12}
                time="Gestern, 19:42"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const AnalyticsCard = ({ icon, title, value, subtitle }) => {
  return (
    <Card className="p-6 bg-[#1E2130] border-white/10">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-pluto-purple/20 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        </div>
      </div>
    </Card>
  );
};

const ErrorItem = ({ command, error, count, time }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 p-2 bg-red-500/20 rounded-md">
        <AlertTriangle className="w-4 h-4 text-red-400" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">{command}</h4>
          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">{count}x</span>
        </div>
        <p className="text-xs text-gray-400">{error}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};
