import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__content">
        <img
          onClick={() => {
            navigate('/');
          }}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />

        <img
          onClick={() => {
            navigate('/profile');
          }}
          className="nav__avatar"
          src="https://loodibee.com/wp-content/uploads/Netflix-avatar-3.png"
          alt="netflix avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
