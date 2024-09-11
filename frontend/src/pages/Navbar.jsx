import { useState } from 'react'
import styles from '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/icon.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  // const LogoutButton = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session, token, or authentication data
    
    localStorage.removeItem('token'); // or sessionStorage.clear() for session storage
    localStorage.removeItem('userId'); 
   
    // Optionally, call the API to log out from the server
    // await fetch('/api/logout', { method: 'POST' });

    // Redirect to login or homepage
    navigate('/login'); // or navigate('/') for homepage
  };

  return (
    <header className="app-header">
      <nav className={`${styles.navbar}`}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          <li onClick={removeActive}>
            <a href='#home' className={`${styles.navLink}`}>Home</a>
          </li>
          <li onClick={removeActive}>
            <Link to='/signUp' className={`${styles.navLink}`}>Sign Up</Link>
          </li>
          <li onClick={removeActive}>
            <Link to='/login' className={`${styles.navLink}`}>Login</Link>
          </li>
          <li onClick={removeActive}>
            <Link to='/profile' className={`${styles.navLink}`}>Profile</Link>
          </li>
          <li onClick={removeActive}>
            <Link to='/login' className={`${styles.navLink}`} onClick={handleLogout}>Logout</Link>
          </li>
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