"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

function SignupRight() {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Handle sign-up logic here
      console.log('Sign up with:', { username, name, email, password })
    }
  
  return (
   <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
       <div className="w-full max-w-md p-8 rounded-xl backdrop-blur-md shadow-xl ">
       <div className="flex flex-col space-y-2 text-center">
             <h1 className="text-2xl font-semibold tracking-tight text-white">  Create your account and start <span className='bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent'>sharing the joy</span> </h1>
             <p className="text-sm text-white">
             Join the celebration
             </p>
           </div>
         <form onSubmit={handleSubmit} className="space-y-6 mt-2">
         <div>
             <Label htmlFor="name" className='text-white'>Name</Label>
             <Input
               id="username"
               type="text"
               placeholder="Enter your name"
               value={name}
              //  onChange={(e) => setPassword(e.target.value)}
              className='text-white border border-white rounded-xl mt-1'
               required
             />
           </div>
           <div>
             <Label htmlFor="username" className='text-white'>Username</Label>
             <Input
               id="username"
               type="text"
               placeholder="Enter your username"
               value={username}
              //  onChange={(e) => setPassword(e.target.value)}
              className='text-white border border-white rounded-xl mt-1'
              required
             />
           </div>
           <div>
             <Label htmlFor="email" className='text-white'>Email</Label>
             <Input
               id="email"
               type="email"
               placeholder="you@example.com"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className='text-white border border-white rounded-xl mt-1'
               required
             />
           </div>
           <div>
             <Label htmlFor="password" className='text-white'>Password</Label>
             <Input
               id="password"
               type="password"
               placeholder="••••••••"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
              className='text-white border border-white rounded-xl mt-1'
               required
             />
           </div>
           <Button type="submit" className="w-full bg-white text-black" variant={"default"}>Sign Up</Button>
         </form>

      <p className="mt-8 text-center text-sm text-gray-300">
        Already have an account?{' '}
        <Link href="/signin" className="font-semibold text-gray-200 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  </div>
  )
}

export default SignupRight