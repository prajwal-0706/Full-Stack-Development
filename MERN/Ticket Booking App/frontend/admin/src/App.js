import './App.css';
import Login from './components/Form/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;