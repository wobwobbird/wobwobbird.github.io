import './App.css'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Vite from './pages/Vite';
import GlassSurface from './components/GlassSurface';

function App() {
  return (
    <BrowserRouter>
      <div className="app-nav-wrapper">
        <GlassSurface 
          width="90%"
          height={60}
          borderRadius={24}
          displace={0.5}
          distortionScale={-180}
          redOffset={0}
          greenOffset={-50}
          blueOffset={20}
          brightness={50}
          opacity={0.93}
          borderWidth={0}
          saturation={0.9}
          mixBlendMode="normal"
          className="app-nav-glass"
        >
          <nav className="app-nav">
            <NavLink to="" end>GHome</NavLink>
            <NavLink to="/contact" end>Contact</NavLink>
            <NavLink to="/vite">Vite</NavLink>
          </nav>
        </GlassSurface>
      </div>

      <Routes>
        <Route path="/vite" element={<Vite/>} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
