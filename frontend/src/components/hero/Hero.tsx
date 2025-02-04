import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Camera, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 via-zinc-900/30 to-stone-900/30 animate-gradient" />

        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10">
          <div className="mx-auto px-6">
            <div className="flex items-center justify-between h-24">
              <div className="flex items-center space-x-3">
                 <p className="text-2xl font-bold">Loom</p>
              </div>
               
              <div className="flex items-center space-x-4">
                <Link href={"/signin"}>
                  <Button
                    variant="ghost"
                    className="text-zinc-400 hover:text-white font-semibold hover:bg-zinc-900"
                  >
                    Login
                  </Button>
                </Link>

                <Link href={"/signup"}>
                  <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative px-6 pt-6 pb-40">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center space-x-2 bg-zinc-900/80 rounded-full px-4 py-2">
                  <Star className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm text-zinc-400">
                    Redefining Social Connection
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                    Create. Connect.
                  </span>
                  <br />
                  <span className="text-white">Make an Impact.</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-xl">
                  Join a new generation of creators shaping the future of
                  digital storytelling and social connection.
                </p>
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link href={"/signup"}>
                    <Button
                      size="lg"
                      className="py-4 px-6 bg-gradient-to-r from-cyan-500 to-teal-500 font-semibold hover:from-cyan-600 hover:to-teal-600 w-auto"
                    >
                      Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="py-3 border-zinc-800 text-zinc-600 font-semibold hover:bg-zinc-900 hover:text-white w-auto"
                  >
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-teal-500/20 to-emerald-500/20 rounded-3xl transform rotate-6" />
                <Image
                  src={"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" }
                  alt={"Creative Collaboration"}
                  height={800}
                  width={1200}
                  className="relative rounded-3xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
