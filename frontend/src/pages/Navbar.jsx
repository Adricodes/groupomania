import { useState } from 'react'
import styles from '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/icon-left-font-monochrome-black.svg';

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
            <Link to='/logout' className={`${styles.navLink}`}>Logout</Link>
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
