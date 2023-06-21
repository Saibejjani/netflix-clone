import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const img_base_url = 'https://image.tmdb.org/t/p/original';
  const [isLargeRow, setIsLargeRow] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      {movies.map((movie) => (
        <img
          key={movie.id}
          className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
          src={`${img_base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      ))}
    </div>
  );
};

export default Row;
