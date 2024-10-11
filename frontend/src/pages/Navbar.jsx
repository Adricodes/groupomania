import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/icon-above-font.svg';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active className
  const removeActive = () => {
    setIsActive(false)
  }

  // const LogoutButton = () => {

  const navigate = useNavigate();
  let auth = localStorage.getItem('token');
  const handleLogout = () => {
    // Clear user session, token, or authentication data

    localStorage.removeItem('token'); // or sessionStorage.clear() for session storage
    localStorage.removeItem('userId');

    // Another option is calling the API to log out from the server
    // await fetch('/api/logout', { method: 'POST' });

    // Redirect to login or homepage
    navigate('/login'); // or navigate('/') for homepage
  };

  // const home = localStorage.getItem(home);
  // const handleHome = () => {
  //   localStorage.removeItem(home);
  // }
const styles={}// FIXME remove styles and classnames below and use real classnames from navbar.css
  return (
    <header className="app-header">
      <nav className="navlink">
        <Link to="/">
          <img className="groupomania-logo" src={logo} alt="Logo" />
        </Link>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          {/* TODO conditionally show home when user is not logged in */}
          <li onClick={removeActive}>
            <Link to='/' className={`${styles.navLink}`}>Home</Link>
          </li>

          {/* TODO conditionally show signup link depending if the user is logged in */}
          {!auth &&
          <li onClick={removeActive}>
            <Link to='/signup' className={`${styles.navLink}`} >Sign Up</Link>
          </li>
          }
          {/* TODO conditionally show login link depending if the user is logged in */}
          {!auth &&
          <li onClick={removeActive}>
            <Link to='/login' className={`${styles.navLink}`}>Login</Link>
          </li>
}
          {/* TODO conditionally show profile if user is not logged in */}
          {auth &&
            <li onClick={removeActive}>
              <Link to='/profile' className={`${styles.navLink}`}>Profile</Link>
            </li>
          }
          {/* TODO conditionally show logout if the user is not logged in */}
          {auth &&
            <li onClick={removeActive}>
              <Link to='/login' className={`${styles.navLink}`} onClick={handleLogout}>Logout</Link>
            </li>
          }
        </ul>
        <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;