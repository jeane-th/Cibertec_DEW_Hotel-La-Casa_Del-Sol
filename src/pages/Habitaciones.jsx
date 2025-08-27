import { Banner } from "../components/seccionHabitaciones/banner/Banner.jsx"

import { GrillaHabitaciones } from "../components/seccionHabitaciones/grillaHabitaciones/GrillaHabitaciones"

import { Estadia } from "../components/seccionHabitaciones/menuEstadia/Estadia"

function Habitaciones({sethabitacionesReservadas, setcantidadHuespedes}) {
  return (
    <>
      <Banner />
      <Estadia sethabitacionesReservadas={sethabitacionesReservadas} setcantidadHuespedes={setcantidadHuespedes} />
      <GrillaHabitaciones />
    </>
  )
}

export default Habitaciones
