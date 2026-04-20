import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Movie from './pages/movie/movie.jsx';
import Home from './pages/home/Home.jsx';
import Moviedetails from './pages/movie-details/Moviedetails.jsx';
import Navbar from './components/nav/Nav.jsx';
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/movie/:platform" element={<Movie/>}/>
      <Route path="/movie-details/:id" element={<Moviedetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
