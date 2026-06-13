import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TargetCursor from './components/crosshair.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      {/* Global crosshair cursor — spins freely, snaps to .cursor-target on hover */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      <Navbar />

      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
