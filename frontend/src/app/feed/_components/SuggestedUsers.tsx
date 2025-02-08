 
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";
import Image from "next/image";

const suggestedUsers = [
  {
    id: 1,
    name: "Emma Wilson",
    username: "@emmaw",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Digital Artist | Creative Director",
  },
  {
    id: 2,
    name: "Marcus Chen",
    username: "@marcusc",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Photographer | Travel Enthusiast",
  },
  {
    id: 3,
    name: "Sophie Taylor",
    username: "@sophiet",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "UX Designer | Tech Blogger",
  },
];

export function SuggestedUsers() {
  return (
    <div className="hidden lg:block col-span-3">
      <div className="sticky top-16 space-y-4">
        <Card className="bg-white/5 border-white/5 p-3 backdrop-blur-sm">
          <h2 className="text-sm font-medium text-white mb-4">Suggested Users</h2>
          <div className="space-y-4">
            {suggestedUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative h-10 w-10">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      fill
                      className="rounded-full object-cover ring-1 ring-white/20"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">{user.name}</h3>
                    <p className="text-xs text-gray-500">{user.username}</p>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{user.bio}</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}