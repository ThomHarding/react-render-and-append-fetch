import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import { getAllMovies } from './services/fetch-utils';
import CandyList from './CandyList';
import { getAllCandies } from './services/fetch-utils';
import ColourList from './ColourList';
import { getAllColours } from './services/fetch-utils';
import SongList from './SongList';
import { getAllSongs } from './services/fetch-utils';

function App() {
  const [movies, setMovies] = useState([]);
  const [candies, setCandies] = useState([]);
  const [colours, setColours] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(async () => {
    const movieResponse = await getAllMovies();
    setMovies(movieResponse);
    const candyResponse = await getAllCandies();
    setCandies(candyResponse);
    const colourResponse = await getAllColours();
    setColours(colourResponse);
    const songResponse = await getAllSongs();
    setSongs(songResponse);
  }, []);
  return (
    <div className="App">
      <MovieList movies={movies} />
      <CandyList candies={candies} />
      <ColourList colours={colours} />
      <SongList songs={songs} />
    </div>
  );
}

export default App;
