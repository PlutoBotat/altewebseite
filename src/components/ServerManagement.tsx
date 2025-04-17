
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, User, MessageCircle, Settings, Plus, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export const ServerManagement = () => {
  const [selectedServer, setSelectedServer] = useState(null);
  
  const servers = [
    { 
      id: 1, 
      name: "Gaming Community", 
      members: 456, 
      messages: "12.5K", 
      active: true,
      icon: "🎮" 
    },
    { 
      id: 2, 
      name: "Web Dev Hub", 
      members: 289, 
      messages: "8.7K", 
      active: true,
      icon: "💻" 
    },
    { 
      id: 3, 
      name: "Anime Fans", 
      members: 345, 
      messages: "15.2K", 
      active: true,
      icon: "🎭" 
    },
    { 
      id: 4, 
      name: "Music Lounge", 
      members: 128, 
      messages: "4.3K", 
      active: true,
      icon: "🎵" 
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="bg-[#1E2130] border-white/10 lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-medium">Server Liste</CardTitle>
          <Button variant="outline" size="sm" className="border-white/10 hover:bg-pluto-purple/10">
            <Plus className="h-4 w-4 mr-2" />
            Hinzufügen
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input 
              className="bg-[#15171E] border-white/10 text-white placeholder:text-gray-500" 
              placeholder="Server suchen..."
            />
          </div>
          
          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
            {servers.map(server => (
              <ServerListItem 
                key={server.id}
                server={server}
                isSelected={selectedServer?.id === server.id}
                onClick={() => setSelectedServer(server)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
      
      {selectedServer ? (
        <Card className="bg-[#1E2130] border-white/10 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <div className="text-2xl">{selectedServer.icon}</div>
              <CardTitle className="text-xl font-medium">{selectedServer.name}</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-pluto-purple/10">
                <Edit className="h-4 w-4 mr-2" />
                Bearbeiten
              </Button>
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-red-500/10 text-red-400">
                <Trash2 className="h-4 w-4 mr-2" />
                Entfernen
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#15171E] rounded-lg p-4 flex items-center gap-3">
                <div className="p-2 bg-pluto-purple/20 rounded-md">
                  <User className="w-5 h-5 text-pluto-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Mitglieder</p>
                  <p className="text-xl font-bold">{selectedServer.members}</p>
                </div>
              </div>
              
              <div className="bg-[#15171E] rounded-lg p-4 flex items-center gap-3">
                <div className="p-2 bg-pluto-purple/20 rounded-md">
                  <MessageCircle className="w-5 h-5 text-pluto-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Nachrichten</p>
                  <p className="text-xl font-bold">{selectedServer.messages}</p>
                </div>
              </div>
              
              <div className="bg-[#15171E] rounded-lg p-4 flex items-center gap-3">
                <div className="p-2 bg-pluto-purple/20 rounded-md">
                  <Settings className="w-5 h-5 text-pluto-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Status</p>
                  <p className="text-xl font-bold text-green-400">
                    {selectedServer.active ? 'Aktiv' : 'Inaktiv'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-md font-medium mb-3">Bot Berechtigungen</h3>
                <div className="bg-[#15171E] rounded-lg p-4 space-y-2">
                  <PermissionItem 
                    name="Nachrichten lesen" 
                    enabled={true}
                  />
                  <PermissionItem 
                    name="Nachrichten senden" 
                    enabled={true}
                  />
                  <PermissionItem 
                    name="Mitglieder verwalten" 
                    enabled={true}
                  />
                  <PermissionItem 
                    name="Rollen verwalten" 
                    enabled={false}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium mb-3">Aktive Module</h3>
                <div className="bg-[#15171E] rounded-lg p-4 space-y-2">
                  <ModuleItem 
                    name="Willkommensnachrichten" 
                    enabled={true}
                  />
                  <ModuleItem 
                    name="Automatische Moderation" 
                    enabled={true}
                  />
                  <ModuleItem 
                    name="Level System" 
                    enabled={true}
                  />
                  <ModuleItem 
                    name="Musik Player" 
                    enabled={false}
                  />
                  <ModuleItem 
                    name="Ticket System" 
                    enabled={false}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-[#1E2130] border-white/10 lg:col-span-2 flex items-center justify-center h-64">
          <div className="text-center">
            <Server className="w-10 h-10 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400">Wähle einen Server, um Details anzuzeigen</p>
          </div>
        </Card>
      )}
    </div>
  );
};

const ServerListItem = ({ server, isSelected, onClick }) => {
  return (
    <div 
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
        isSelected ? 'bg-pluto-purple/20 border border-pluto-purple/30' : 'bg-[#15171E] hover:bg-[#15171E]/80'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="text-xl">{server.icon}</div>
        <div>
          <p className="text-sm font-medium">{server.name}</p>
          <p className="text-xs text-gray-400">{server.members} Mitglieder</p>
        </div>
      </div>
      <MoreHorizontal className="w-4 h-4 text-gray-500" />
    </div>
  );
};

const PermissionItem = ({ name, enabled }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{name}</span>
      <div className={`px-2 py-1 rounded text-xs ${
        enabled ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
      }`}>
        {enabled ? 'Aktiviert' : 'Deaktiviert'}
      </div>
    </div>
  );
};

const ModuleItem = ({ name, enabled }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{name}</span>
      <div className={`px-2 py-1 rounded text-xs ${
        enabled ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
      }`}>
        {enabled ? 'Aktiviert' : 'Deaktiviert'}
      </div>
    </div>
  );
};
