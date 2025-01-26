import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../EdgeDBHandler";

function DBTest() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies()
      .then((data) => setMovies(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DBTest;
