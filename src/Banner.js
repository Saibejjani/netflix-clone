import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/netflix-movie-series-download-template-design-3a7d8e00db6fffde55bb1c0e8a65eb79_screen.jpg")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__content">
        <h1 className="banner_title">movie name</h1>
      </div>
    </header>
  );
};

export default Banner;
