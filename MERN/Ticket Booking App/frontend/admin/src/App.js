import './App.css';
import Signup from './components/Form/Sigup';
import Login from './components/Form/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          {/* <Route path="/signup" exact element={<Signup />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
