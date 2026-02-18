import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Vite from './pages/Vite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vite" element={<Vite/>} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
