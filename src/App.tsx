import './App.css'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Vite from './pages/Vite';

function App() {
  return (
    <BrowserRouter>
      <nav className='app-nav' >
        <NavLink to="" end>Home</NavLink>
        <NavLink to="/contact" end>Contact</NavLink>
        <NavLink to="/vite" >Vite</NavLink>
      </nav>
      <Routes>
        <Route path="/vite" element={<Vite/>} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
