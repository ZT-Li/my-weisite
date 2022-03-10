import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect, Link } from 'react-router-dom';
import { HomepPage } from './Pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<HomepPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
