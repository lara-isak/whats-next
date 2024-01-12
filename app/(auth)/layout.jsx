import Link from 'next/link'
import React from 'react'

export default function AuthLayout({ children}) {
  return (
    <>
    <nav>
        <h1>What's Next</h1>
        <Link href="/login">Log In</Link>
        <Link href="/signup">Sign Up</Link>
    </nav>
    {children}
    </>
  )
}
