import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} /> */}
        <Route path="/project" element={<Project />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
