import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <nav className='header'>
        <Link to="/">Home</Link>
        <Link to="/flex">Flex</Link>
        <Link to="/inline-flex">Inline-Flex</Link>
        <Link to="/grid">Grid</Link>
        <Link to="/block">Block</Link>
    </nav>
  )
}
