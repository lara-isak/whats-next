import React, { Suspense } from 'react'
import ShowsList from './ShowsList'
import Loading from '../loading'

export default function Shows() {
  return (
    <main>
      <nav>
        <div>
          <h2>Shows</h2>
        </div>
      </nav>

      <Suspense fallback={<Loading />}> 
        <ShowsList />
      </Suspense>
    </main>
  )
}
