import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomepPage } from './Pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomepPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
