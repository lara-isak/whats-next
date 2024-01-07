import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">Houston, we have a problem!</h2>
        <p>We couldn't find the show you're looking for.</p>
        <p>Go back to all <Link href="/shows">shows</Link></p>
    </main>
  )
}
