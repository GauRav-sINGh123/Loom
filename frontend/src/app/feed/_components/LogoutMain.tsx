"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/logout";
 

function LogoutMain() {
  const router=useRouter();
  const handleLogout = () => {
     logout()
    router.push("/");
  };
  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      size="icon"
      className="w-8 h-8 text-gray-400 hover:text-white hover:bg-white/10"
    >
      <LogOut className="h-4 w-4" />
    </Button>
  );
}

export default LogoutMain;
