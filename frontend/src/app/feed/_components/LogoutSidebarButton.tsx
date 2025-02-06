"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

function LogoutSidebarButton() {
  const router=useRouter();
  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/logout`,
        {},
        { withCredentials: true } // ✅ Ensures cookies are included in the request
      );
      
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error: any) {
      toast.error("Failed to logout");
    }
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
