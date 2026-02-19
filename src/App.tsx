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
          width="100%"
          height={70}
          borderRadius={30}

          displace={0.5}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          brightness={50}
          opacity={0.93}
          borderWidth={0.2}

          backgroundOpacity={0.1}

          saturation={0.9}
          mixBlendMode="screen"
          className="app-nav-glass"
          
        
        >
          <nav className="app-nav">
            <NavLink to="" end>GHome</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
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
