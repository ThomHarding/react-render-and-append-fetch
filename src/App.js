import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import { getAllMovies } from './services/fetch-utils';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const movieResponse = await getAllMovies();
    setMovies(movieResponse);
  }, []);

  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
