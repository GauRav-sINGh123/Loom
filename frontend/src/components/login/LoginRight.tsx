"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useRouter } from 'next/navigation'
import Link from "next/link"


function LoginRight() {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign-in logic here
    try{
      const res= await axios.post(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/signin`,{
        email,
        password     
       },
       { withCredentials: true } //Allows us to save and access the cookie
      )
       
       console.log(res)
       router.push("/feed")
    }catch(err){
      console.log(err)
    }
     
  }
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
    <div className="w-full max-w-md p-8 rounded-xl backdrop-blur-md shadow-xl ">
    <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-white">Welcome to the party!</h1>
          <p className="text-sm text-white">
            Sign in to join the fun
          </p>
        </div>
      <form onSubmit={handleSubmit} className="space-y-6 mt-2">
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
        <Button type="submit" className="w-full bg-white text-black" variant={"default"}>Sign In</Button>
      </form>

      <p className="mt-8 text-center text-sm text-white">
        Don't have an account?{' '}
        <Link href={"/signup"} className="font-semibold text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  </div>
  )
}

export default LoginRight