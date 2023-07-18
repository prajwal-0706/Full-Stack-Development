import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import SwiperGallery from './components/Swiper/Swiper';
import MovieList from './components/Movie/MovieList';
import Booking from './components/Booking/Booking';
import { SeatNumberProvider } from './Context api/Seat';

function App() {
  return (
    <SeatNumberProvider>
      <NavBar />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </Router>
      </div>
    </SeatNumberProvider>
  );
}

const Home = () => {
  return (
    <>
      <SwiperGallery />
      <MovieList />
    </>
  );
};

export default App;
