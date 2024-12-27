"use client"

import { signIn } from 'next-auth/react'
import React from 'react'

const AuthButton = () => {
  return (
    <div className='p-3 rounded-full bg-purple-500'>
      <button onClick={()=> signIn("google")} className="text-white font-semibold">Login</button>
    </div>
  )
}

export default AuthButton