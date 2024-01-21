'use client'
import { useState } from 'react'
import React from 'react'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
      <label>
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button className='btn-primary' type="submit">Submit</button>
      </form>
  )
}
