import React from 'react'
import { Header } from '../components/Header'
import { SobreNosotros } from '../components/SobreNosotros'
import { Servicios } from '../components/Servicios'
import { Galeria } from '../components/ResumenGaleria'
import { Testimonios } from '../components/Testimonios'
import { ResumenHabitaciones } from '../components/ResumenHabitaciones'


export const Home = () => {
  return (
    <>
    <Header />
    <SobreNosotros />
    <ResumenHabitaciones />
    <Servicios />
    <Galeria />
    <Testimonios />
    </>

  )
}

export default Home