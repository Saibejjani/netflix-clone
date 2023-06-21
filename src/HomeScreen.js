import React from 'react';
import './HomeScreen.css';

import Nav from './Nav';
import Banner from './Banner';
const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />
    </div>
  );
};

export default HomeScreen;
