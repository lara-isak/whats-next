import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <h1>What's Next</h1>
        <Link href='/'>Dashboard</Link>
        <Link href='/shows'>Shows</Link>
    </nav>
  )
}
