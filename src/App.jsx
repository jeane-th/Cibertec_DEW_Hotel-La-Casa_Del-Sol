import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BarraNavegacion } from './components/BarraNavegacion'
import { Footer } from './components/Footer'

import Home from './pages/Home'
import Habitaciones from './pages/Habitaciones'
import Reservar from './pages/Reservar'
import Contacto from './pages/Contacto'
import Galeria from './pages/Galeria'

function App() {



  return (

    <BrowserRouter basename="/Cibertec_DEW_Hotel-La-Casa_Del-Sol">
      <BarraNavegacion/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Habitaciones' element={<Habitaciones />} />
        <Route path='/Galeria' element={<Galeria />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
