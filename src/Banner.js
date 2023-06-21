import React from 'react';
import './Banner.css';

const Banner = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__content">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncate(
            'This is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie descriptionThis is a movie description',
            150
          )}
        </h2>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
