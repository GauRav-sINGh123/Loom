"use client";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/logout";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; 

function LogoutSidebarButton() {
  const router=useRouter();
  const handleLogout = async() => {
    const data= await logout()
    if(!data) {
     toast.error("Failed to logout");
    }
    router.replace("/signin");
  };
  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      size="sm"
      className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
    >
      <LogOut className="mr-2 h-4 w-4 text-gray-400" />
      Logout
    </Button>
  );
}

export default LogoutSidebarButton;
