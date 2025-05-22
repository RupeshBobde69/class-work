import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <p>Home Component</p>
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "32px",
      }}>
        <Link to="/posts">Posts</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

