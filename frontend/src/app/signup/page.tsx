import SignupLeft from "@/components/signup/SignupLeft";
import SignupRight from "@/components/signup/SignupRight";
 
export default function SignUpPage() {
 
  return (
    <div className="flex min-h-screen bg-black">
      {/* Image Section */}
      <SignupLeft/>
      {/* Form Section */}
      <SignupRight/>
    </div>
  )
}

