import React, { useState } from 'react'
import '../../../css/cssHabitaciones/grilla.css'

import hab1 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab1.jpg'
import hab2 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab2.jpg'
import hab3 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab3.jpg'
import hab4 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab4.jpg'
import hab5 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab5.jpg'
import hab6 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab6.jpg'
import hab7 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab7.jpg'
import hab8 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab8.jpg'
import hab9 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab9.jpg'
import hab10 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab10.jpg'
import hab11 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab11.jpg'
import hab12 from '../../../assets/images/imgHabitaciones/imagenesBanner/Hab12.jpg'


export const GrillaHabitaciones = () => {
    
    
const [filtro, setFiltro] = useState('Todos')

    

    const habitaciones = [
        {Nombre: 'Bungalow', Precio:'180', img: hab1, clase: 'Suite'},
        {Nombre: 'Habitación Superior', Precio:'190', img: hab2, clase: 'Habitacion'},
        {Nombre: 'Loft con Terraza', Precio:'200', img: hab3, clase: 'Ejecutiva'},
        {Nombre: 'Suite Junior', Precio:'210', img: hab4, clase: 'Suite'},
        {Nombre: 'Habitación Doble (Twin/Double)', Precio:'220', img: hab5, clase: 'Habitacion'},
        {Nombre: 'Suite Presidencia', Precio:'230', img: hab6, clase: 'Suite'},
        {Nombre: 'Habitación Familiar', Precio:'240', img: hab7, clase: 'Suite'},
        {Nombre: 'Suite Ejecutiva', Precio:'250', img: hab8,clase: 'Ejecutiva'},
        {Nombre: 'Habitación Triple', Precio:'260', img: hab9, clase: 'Habitacion'},
        {Nombre: 'Habitación Deluxe', Precio:'270', img: hab10, clase: 'Habitacion'},
        {Nombre: 'Habitación Premium', Precio:'290', img: hab11, clase: 'Habitacion'},
        {Nombre: 'Suite Nupcial', Precio:'300', img: hab12, clase: 'Suite'},
    ]

    let filtrados;
   

    if (filtro === 'Todos'){
        filtrados = habitaciones
    } else {
        filtrados = habitaciones.filter(function(item) {
  return item.clase === filtro;
}) 

    }
console.log(filtrados)

return (

    <>

        <div className="barraFiltro">
        
            <div onClick={() => setFiltro("Todos")} className={`btnFiltro ${filtro === "Todos" ? "activo" : "btnFiltro"}`}>

            <h2 >Todo</h2>
            </div>
            <div onClick={() => setFiltro("Habitacion")} className={`btnFiltro ${filtro === "Habitacion" ? "activo" : "btnFiltro"}`}>
                
            <h2 >Habitaciones</h2>
            </div>
            <div onClick={() => setFiltro("Suite")} className={`btnFiltro ${filtro === "Suite" ? "activo" : "btnFiltro"}`}>
            <h2 >Suites</h2>
                
            </div>
            <div onClick={() => setFiltro("Ejecutiva")} className={`btnFiltro ${filtro === "Ejecutiva" ? "activo" : "btnFiltro"}`}>
            <h2 >Ejecutiva</h2>
                
            </div>
        </div>

        <div className='grilla'>
            {



             filtrados.map((item, index) => (
              
            <div key={index} className="card">
                <div className='contCardimage'>
                    <img className='cardImage' src={item.img} alt="" />
                </div>
                <div className='cardDescription'>
                    <h3>{item.Nombre}</h3>
                    <p><a href="">Ver detalles de la habitacion</a></p>
                    <button className='btnreservarCard'>Reservar desde S/.{item.Precio}</button>
                </div>
            </div>
            ))
            }
        
        
        </div>
    
    </>
  )
}
