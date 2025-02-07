import axios from "axios";
import { toast } from "sonner";
 

export const logout = async () => {
    try {
        const res=await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/logout`,
          {},
          { withCredentials: true } // ✅ Ensures cookies are included in the request
        );
        
       return res.data;
       
      } catch (error: any) {
        toast.error("Failed to logout");
      }

}