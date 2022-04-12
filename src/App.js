import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, JavaPage, JSPage } from './Pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/java" element={<JavaPage />}></Route>
        <Route exact path='/js' element={<JSPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
