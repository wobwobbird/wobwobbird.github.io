import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Vite from './pages/Vite';
import Entry from './pages/Entry';
import GlassSurface from './components/GlassSurface';
import { ReactLenis } from 'lenis/react'
import lord_marshy_logo from './assets/lord_marshy_logo.png'

function App() {
  // const { pathname } = useLocation();

  return (
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          lerp: 0.1,           // Smoothness (0–1, lower = smoother)
          duration: 1.2,       // Scroll duration in seconds
          smoothWheel: true,   // Smooth mouse wheel (default: true)
          wheelMultiplier: 1, // Scroll speed      
        }}
      >
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
              <Link to="/">
                <img 
                  src={lord_marshy_logo}
                  alt="website logo"
                  className="h-10 rotate-4"
                />
              </Link>
              <div className="flex items-center gap-12">
                <NavLink to="/home" end>Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {/* <NavLink to="/vite">Vite</NavLink> */}
              </div>
              {/* {pathname !== "/" && (
                <>
                  <img src={lord_marshy_logo} alt="website logo" className="h-12 rotate-4"/>
                  <div className="flex items-center gap-12">
                    <NavLink to="/home" end>Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/vite">Vite</NavLink>
                  </div>
                </>

              )} */}
            </nav>
          </GlassSurface>
        </div>

        <Routes>
          <Route path="/" element={<Entry/>} />
          <Route path="/vite" element={<Vite/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ReactLenis>
    </BrowserRouter>
  )
}

export default App
