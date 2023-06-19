import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import SwiperGallery from './components/Swiper/Swiper';
import MovieList from './components/Movie/MovieList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SwiperGallery />
      <MovieList />
      <Router>
        <Routes>{/* <Route path="/" Component={NavBar} /> */}</Routes>
      </Router>
    </div>
  );
}

export default App;
