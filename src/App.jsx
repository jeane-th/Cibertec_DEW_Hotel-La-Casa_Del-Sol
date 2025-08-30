import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BarraNavegacion } from './components/BarraNavegacion'
import { Footer } from './components/Footer'

import Home from './pages/Home'
import Habitaciones from './pages/Habitaciones'
import Contacto from './pages/Contacto'
import Galeria from './pages/Galeria'
import { useState } from 'react'
import { HabitacionDetail } from './pages/HabitacionDetail'


function App() {

  const [habitacionesReservadas, sethabitacionesReservadas] = useState("");
  const [cantidadHuespedes, setcantidadHuespedes] = useState("");

  return (

    <BrowserRouter basename="/Cibertec_DEW_Hotel-La-Casa_Del-Sol">
      <BarraNavegacion />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Habitaciones' element={<Habitaciones sethabitacionesReservadas={sethabitacionesReservadas} setcantidadHuespedes={setcantidadHuespedes} />} />
        <Route path='/Habitaciones/:nombre' element={<HabitacionDetail />} />
        <Route path='/Galeria' element={<Galeria />} />
        <Route path='/Contacto' element={<Contacto habitacionesReservadas={habitacionesReservadas} cantidadHuespedes={cantidadHuespedes} />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
