import { Button } from "@/components/ui/button";
import { Home, User, LogOut } from "lucide-react";
import LogoutSidebarButton from "./LogoutSidebarButton";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="hidden md:block col-span-2">
      <div className="sticky top-16 space-y-6">
        <nav className="space-y-1">
          <Link href={"/"}>
          <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-white/10 hover:text-white">
            <Home className="mr-2 h-4 w-4 text-gray-400" />
            Home
          </Button>
          </Link>
         <Link href={"/profile"}>
         <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-white/10 hover:text-white">
            <User className="mr-2 h-4 w-4 text-gray-400" />
            Profile
          </Button>
         </Link>
         <LogoutSidebarButton/>
        </nav>
      </div>
    </div>
  );
}