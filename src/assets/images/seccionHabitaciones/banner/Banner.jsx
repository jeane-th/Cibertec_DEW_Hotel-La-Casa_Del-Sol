import React, { useEffect, useState } from 'react'
import '../../../css/cssHabitaciones/banner.css'
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


export const Banner = () => {

  const [posicionNueva, setPosicion]= useState(0);
  

  const moverDerecha = () => {
    setPosicion((prev) => {
      if (prev > -91.63) {
        return prev - 8.34; 
      } else {
        return 0; 
      }

    });
    
    
  };

  useEffect(() => {
    const intervalo = setInterval(moverDerecha, 6000);

    return () => clearInterval(intervalo); 
  }, []);
  

    const imagenesBanner = [
        {Nombre: 'Habitacion1' , src:hab1},
        {Nombre: 'Habitacion2' , src:hab2},
        {Nombre: 'Habitacion3' , src:hab3},
        {Nombre: 'Habitacion4' , src:hab4},
        {Nombre: 'Habitacion5' , src:hab5},
        {Nombre: 'Habitacion6' , src:hab6},
        {Nombre: 'Habitacion7' , src:hab7},
        {Nombre: 'Habitacion8' , src:hab8},
        {Nombre: 'Habitacion9' , src:hab9},
        {Nombre: 'Habitacion10' , src:hab10},
        {Nombre: 'Habitacion11' , src:hab11},
        {Nombre: 'Habitacion12' , src:hab12}
    ]



  return (
    <>
      <div className='contenedor'>
         <div  className="banner" style={{
            
            transform: `translateX(${posicionNueva}%)`,
            
            }}>
        {

        imagenesBanner.map((item, index) => (
              <img className='imgbanner' key={index} src={item.src} alt={"Imagen no Disponible" + index} />
            ))
          }
          </div>
            <h1 className='tituloBanner'>Habitaciones y suites</h1>
      </div>
    </>
  )
}
