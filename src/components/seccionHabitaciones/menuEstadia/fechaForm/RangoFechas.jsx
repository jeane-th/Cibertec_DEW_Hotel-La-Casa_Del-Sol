import React, { useState } from 'react'
import close from '../../../../assets/images/imgHabitaciones/imagenesEstadia/cerrar.png'


export const RangoFechas = ({ visible1, cerrarVentana, modificarFechas }) => {
if (visible1 === false) return null; 



const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");

const aplicarFechas = () => {
    modificarFechas(checkIn, checkOut); 
    cerrarVentana(); 
};  

return (

    <>
    <div className='filtroBlurr' >

        <div className='contenedor-fechas'>

            <div className='cerrar'>
                <img onClick={cerrarVentana}  src={close} alt="Cerrar" />
            </div>

            <section className='fechas-header'>
                Seleccionar fechas
            </section>
            <div className='contenedor-calendario'>
                
                <div className='calendario-fechas'>
                    <input nuevaFecha={(e) => setCheckIn(e.target.value)} type="date" />
                    <input nuevaFecha={(e) => setCheckOut(e.target.value)} type="date" />
                </div>
                
            </div>
            
            <div className='botonesFecha'>
                
                <input className='btnhover' onClick={aplicarFechas} type="submit" value='Listo' />
                <input className='btnhover' onClick={cerrarVentana} type="button" value="Cancelar" />
            </div>

        </div>

    </div>


    </>
)
}

