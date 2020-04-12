import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
      <h1>
          <Link to='/'>
          <i class="fas fa-file-code"></i> Websel
          </Link>
      </h1>
      <ul>
        <li>
          <a href="profiles.html"><i class="fas fa-code"></i> Developers</a>
        </li>
        <li>
          <Link to='/register'><i class="fas fa-user-plus"></i> Register</Link>
        </li>
        <li>
          <Link to='/login'><i class="fas fa-sign-in-alt"></i> Login</Link>
        </li>
      </ul>
    </nav>
    )
}
export default Navbar; 