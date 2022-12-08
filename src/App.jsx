import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Home from "../pages/Home.jsx";
import About from '../pages/About.jsx';
import Projects from '../pages/Projects.jsx';
import Contact from '../pages/Contact.jsx';

import './App.css';

function App() {

  return (
      <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/parcours" element={<About />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
      </>
  )
}

export default App