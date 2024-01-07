import React, { Suspense } from 'react'
import ShowsList from './ShowsList'

export default function Shows() {
  return (
    <main>
      <nav>
        <div>
          <h2>Shows</h2>
        </div>
      </nav>

      <Suspense>
        <ShowsList />
      </Suspense>
    </main>
  )
}
