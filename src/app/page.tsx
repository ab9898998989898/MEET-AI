"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client"; 
import { Loader } from "lucide-react";

export default function page() {

  const {data: session} = authClient.useSession() 

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ()=>{
    await authClient.signUp.email({
      email,
      password,
      name,
    },{
  onError:(ctx)=>{
    window.alert("Something went wrong"),
    setIsLoading(false)
  },
  onSuccess:(ctx)=>{
    window.alert("User created successfully"),
    setIsLoading(false)
  },
  onRequest:(ctx)=>{
    setIsLoading(true)
  },
})
  }
  const onLogin = async ()=>{
    await authClient.signIn.email({
      email,
      password,
    },{
  onError:(ctx)=>{
    window.alert("Something went wrong"),
    setIsLoading(false)
  },
  onSuccess:(ctx)=>{
    window.alert("User logged in successfully"),
    setIsLoading(false)
  },
  onRequest:(ctx)=>{
    setIsLoading(true)
  },
})
  }

  if(session){
    return <div className="flex flex-col gap-y-4 p-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Welcome {session.user.name}</h1>
      <Button onClick={()=>authClient.signOut()}>Sign Out</Button>
    </div>
  }

  return (
    <div className="flex flex-col gap-y-4 p-4 items-center justify-center">
    <div className="flex flex-col gap-y-4 p-4 items-center justify-center">
      <Input 
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <Input 
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <Input 
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      />
      <Button type="submit" onClick={onSubmit}>{isLoading ? <Loader className="animate-spin" /> : "Sign Up"}</Button>
    </div>
    <div className="flex flex-col gap-y-4 p-4 items-center justify-center">
      <Input 
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <Input 
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      />
      <Button type="submit" onClick={onLogin}>{isLoading ? <Loader className="animate-spin" /> : "Login"}</Button>
    </div>
    </div>
  )
}

