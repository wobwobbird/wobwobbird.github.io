import './App.css'
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Vite from './pages/Vite';
import Entry from './pages/Entry';
import GlassSurface from './components/GlassSurface';
import { ReactLenis } from 'lenis/react'
import lord_marshy_logo from './assets/lord_marshy_logo.png'
import { NavLink } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  return (
    <ReactLenis
        root
        options={{
          lerp: 0.1,           // Smoothness (0–1, lower = smoother)
          duration: 1.2,       // Scroll duration in seconds
          smoothWheel: true,   // Smooth mouse wheel (default: true)
          wheelMultiplier: 1, // Scroll speed
          allowNestedScroll: true, // Enables overflow scroll in pages like Home
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
              {pathname === "/" ? (
                <nav className="app-nav max-md:justify-center!">
                  <Link to="/">
                    <img 
                      src={lord_marshy_logo}
                      alt="website logo"
                      className="h-10 rotate-4"
                    />
                  </Link>
                </nav>
              ) : (
                <nav className="app-nav max-[600px]:justify-center!">
                  <Link to="/">
                    <img 
                      src={lord_marshy_logo}
                      alt="website logo"
                      className="h-10 rotate-4 max-[600px]:hidden "
                    />
                  </Link>
                  <div className="flex items-center gap-12">
                    <NavLink to="/home" end>Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </nav>
              )}
          </GlassSurface>
        </div>
            {/* <nav className="app-nav">
              <Link to="/">
                <img 
                  src={lord_marshy_logo}
                  alt="website logo"
                  className="h-10 rotate-4"
                />
              </Link>   
              {pathname !== "/" && (
                <div className="flex items-center gap-12">
                  <NavLink to="/home" end>Home</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              )} */}

        <Routes>
          <Route path="/" element={<Entry/>} />
          <Route path="/vite" element={<Vite/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ReactLenis>
  )
}

export default App
