import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';

const nav_links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Bookings' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="Header" ref={headerRef}>
      <Container className="dabba">
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="company logo" />
            </div>

            {/* Desktop Navigation */}
            <div className="navigation d-none d-lg-block">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link' : ''}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Buttons */}
            <div className="nav__right d-flex align-items-center gap-4 d-none d-lg-flex">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to='/login'>Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to='/register'>Register</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="mobile__menu d-lg-none" onClick={toggleMenu}>
              <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
            </div>
          </div>
        </Row>
      </Container>

      {/* Mobile Menu Overlay */}
      <div className={`mobile__menu__overlay ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <div className="mobile__menu__content">
          <ul className="mobile__nav__links">
            {nav_links.map((item, index) => (
              <li className="nav__item" key={index} onClick={closeMenu}>
                <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link' : ''}>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <div className="mobile__nav__btns">
            <Button className="btn secondary__btn w-100" onClick={closeMenu}>
              <Link to='/login'>Login</Link>
            </Button>
            <Button className="btn primary__btn w-100 mt-3" onClick={closeMenu}>
              <Link to='/register'>Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;