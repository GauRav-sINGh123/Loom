import { Button } from "@/components/ui/button";
import { Home, User, LogOut } from "lucide-react";

export function Sidebar() {
  return (
    <div className="hidden md:block col-span-2">
      <div className="sticky top-16 space-y-6">
        <nav className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-white/10">
            <Home className="mr-2 h-4 w-4 text-gray-400" />
            Home
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-white/10">
            <User className="mr-2 h-4 w-4 text-gray-400" />
            Profile
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-white/10">
            <LogOut className="mr-2 h-4 w-4 text-gray-400" />
            Logout
          </Button>
        </nav>
      </div>
    </div>
  );
}