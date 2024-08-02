import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Navigation Bar
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >

          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/news" className="nav__link" onClick={closeMenuOnMobile}>
                News
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about-us"
                className="nav__link"
                onClick={closeMenuOnMobile}>
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/favorite"
                className="nav__link"
                onClick={closeMenuOnMobile}>
                Favorite
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/location"
                className="nav__link"
                onClick={closeMenuOnMobile}>
                Location
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/get-started" className="nav__link nav__cta">
                Get Started
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

// import { useMediaQuery } from "react-responsive";
// import "./NavbarMobile.css";
// const NavbarHook = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isMobile = useMediaQuery({ maxWidth: "1150px" });
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const closeMobileMenu = () => {
//     if (isMobile) {
//       setIsMenuOpen(false);
//     }
//   };
//   const renderNavLinks = () => {
//     const listClassName = isMobile ? "nav__list" : "nav__list__web";
//     const linkClassName = "nav__link";
//     const buttonClassName = "nav__cta";
//     return (
//       <ul className={listClassName}>
//         <li>
//           <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/news"
//             className={linkClassName}
//             onClick={closeMobileMenu}>
//             News
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/about-us"
//             className={linkClassName}
//             onClick={closeMobileMenu}>
//             About Us
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/favorite"
//             className={linkClassName}
//             onClick={closeMobileMenu}
//           >
//             Favorite
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/location"
//             className={linkClassName}
//             onClick={closeMobileMenu}>
//             Location
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/get-started"
//             className={`${linkClassName} ${buttonClassName}`}
//             onClick={closeMobileMenu} >
//             Get Started
//           </NavLink>
//         </li>
//       </ul>
//     );
//   };
//   return (
//     <header className="header">
//       <nav className="nav container">
//         <NavLink to="/" className="nav__logo">
//           Navigation Bar
//         </NavLink>
//         {isMobile && (
//           <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
//             <IoMenu />
//           </div>
//         )}
//         {isMobile ? (
//           <div
//             className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
//             id="nav-menu"></div>
//           {renderNavLinks()}
//         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
//           <IoClose />
//         </div>
//       </div>
//       ) : (
//       renderNavLinks()
//         )}
//     </nav>
//     </header >

//   );
// };


export default Navbar;