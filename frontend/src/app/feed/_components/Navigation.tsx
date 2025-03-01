import { Button } from "@/components/ui/button";
import { Home, User, LogOut, Combine } from "lucide-react";
import Link from "next/link";
import LogoutMain from "./LogoutMain";

export function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between h-12 px-3">
          <Link href="/" className="text-lg font-semibold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Loom
          </Link>
          <div className="md:hidden flex items-center space-x-2">
            <Link href={"/"}>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-white hover:bg-white/10">
              <Home className="h-4 w-4" />
            </Button>
            </Link>
            <Link href={"/profile"}>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-white hover:bg-white/10">
              <User className="h-4 w-4" />
            </Button>
            </Link>
            <Link href="/connect">
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-white hover:bg-white/10">
              < Combine className="h-4 w-4" />
            </Button>
            </Link>
            <LogoutMain/>
          </div>
        </div>
      </div>
    </div>
  );
}