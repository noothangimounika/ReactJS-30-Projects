import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-Container'>
         <nav>
        {/* <a href='index.html'>Home</a>  like that "Link Tag" */}
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Courses'>Courses</Link>
        <Link to='/Contact'>Contact</Link>

        <NavLink to='/User' activeClassName="active">User</NavLink>
      </nav>
    </div>
  )
}

export default NavBar