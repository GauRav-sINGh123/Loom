import LoginLeft from "@/components/login/LoginLeft";
import LoginRight from "@/components/login/LoginRight";

 
export default function SignInPage() {
  
 
  return (
    <div className="flex min-h-screen bg-black">
      {/* Image Section */}
       <LoginLeft/>
      {/* Form Section */}
       <LoginRight/>
    </div>
  )
}

