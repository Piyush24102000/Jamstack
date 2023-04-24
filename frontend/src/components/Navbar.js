import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='navBar'>
      <div className='container'>
      <Link className='title' href='/'>
        BlogGram

      </Link>
      <ul>
        <li>
          <Link href='/Posts'>
            All Posts
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar