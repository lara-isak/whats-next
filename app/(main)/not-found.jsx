import Link from 'next/link'
import React from 'react'

export default function N() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There was a problem!</h2>
        <p>We couldn&apos;t find the page you&apos;re looking for.</p>
        <p>Go back to <Link href="/">Dashboard</Link></p>
    </main>
  )
}