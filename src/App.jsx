import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from './components/footer';
import Matrix from './components/Matrix';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Labs from './pages/Labs';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CTFs from './pages/Ctfs';


function App() {
  return (
    <>
      <div className="fixed inset-0 bg-black/60 pointer-events-none"></div>
      <Matrix />

      <Navbar />

      <div className="relative z-10 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/ctfs" element={<CTFs />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;