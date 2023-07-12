import './App.css';
import Auth from './components/Form/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth" exact element={<Auth />} />
          {/* <Route path="/signup" exact element={<Signup />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
