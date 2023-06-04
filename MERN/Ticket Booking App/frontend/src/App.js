import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Forms from './components/Forms/Forms';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" Component={Forms} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
