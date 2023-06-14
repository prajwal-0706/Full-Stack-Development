import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Forms from './components/Forms/Forms';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={NavBar} />
          <Route path="/admin" Component={Forms} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
