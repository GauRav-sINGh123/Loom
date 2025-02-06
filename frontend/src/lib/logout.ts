import axios from "axios";
import { toast } from "sonner";
 

export const logout = async () => {
    try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/logout`,
          {},
          { withCredentials: true } // ✅ Ensures cookies are included in the request
        );
        
        toast.success("Logged out successfully");
       
      } catch (error: any) {
        toast.error("Failed to logout");
      }

}