import { Footer } from './assets/components/Footer'
import { Header } from './assets/components/Header'
import { BarraNavegacion } from './assets/components/BarraNavegacion'
import { SobreNosotros } from './assets/components/SobreNosotros'
import { Servicios } from './assets/components/Servicios'
import { Galeria } from './assets/components/Galeria'
import { Testimonios } from './assets/components/Testimonios'
import { SectionHabitaciones } from './assets/components/SectionHabitaciones'


function App() {

  return (
    <>
      <BarraNavegacion />
      <main>
        <Header />
        <SobreNosotros />
        <SectionHabitaciones />
        <Servicios />
        <Galeria />
        <Testimonios />
      </main>
      <Footer />

    </>
  )
}

export default App
