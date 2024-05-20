import Footer from '@components/Footer/Footer'
import Navbar from '@components/navbar/Navbar'
import About from 'pages/About/About'
import Contactus from 'pages/Contact/Contactus'
import Forex from 'pages/Forex/Forex'
import Home from 'pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/forex" element={<Forex />} />
          </Routes>
          <Footer />
        </BrowserRouter>

    </>
  )
}

export default App
