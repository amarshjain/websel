import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth';

const Navbar = ({auth:{isAuthenticated, loading}, logout}) => {
  const authLinks = (
    <ul>
        <li>
          <Link to='/dashboard'><i class="fas fa-user"></i> 
          <span className="hide-sm">Dashboard</span></Link>
        </li>
        <li>
          <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i> 
          <span className="hide-sm">Logout</span></a>
        </li>
      </ul>
  );

  const guestLinks = (
      <ul>
        <li>
          <a href="#!"><i class="fas fa-code"></i> Developers</a>
        </li>
        <li>
          <Link to='/register'><i class="fas fa-user-plus"></i> Register</Link>
        </li>
        <li>
          <Link to='/login'><i class="fas fa-sign-in-alt"></i> Login</Link>
        </li>
      </ul>
  );

    return (
        <nav className="navbar bg-dark">
      <h1>
          <Link to='/'>
          <i class="fas fa-file-code"></i> Websel
          </Link>
      </h1>
      {!loading && (<Fragment>
        {isAuthenticated ? authLinks : guestLinks}
      </Fragment>) }
    </nav>
    )
}

Navbar.propTypes = {
  auth: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar); 