import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
       <nav className='nav-items'>
        <ul id="nav-menu">
            <li>
             <a><Link className='nlink' to="/">First</Link></a>
            </li>
            <li>
              <Link className='nlink' to="/second">second</Link>
            </li>
            <li>
              <Link className='nlink' to="/third">third</Link>
            </li>
            <li>
              <Link className='nlink' to="/forth">forth</Link>
            </li>

        </ul>
       

      </nav>
    </div>
  )
}

export default Nav
