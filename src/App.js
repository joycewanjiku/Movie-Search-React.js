// import logo from './logo.svg';
import { Carousel } from 'react-responsive-carousel';
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesList from './components/MovieList';
import Navigationbar from './Navbar';
import Carousels from './Caurosel';
// import MovieDetails from './MovieDetail';

function App() {
  return (
    <div>
      <Navigationbar/>
      <Carousels/>
      <MoviesList/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/image-container/:movieId' element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
