import Image from "next/image"

function SignupLeft() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative">
    <Image
      src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop"
      alt="Social Connections"
      layout="fill"
      objectFit="cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary-foreground/50" />
    <div className="absolute bottom-10 left-10 text-white">
      <h1 className="text-4xl font-bold mb-2">Join our community</h1>
      <p className="text-xl">Start your journey, connect with others</p>
    </div>
  </div>
  )
}

export default SignupLeft