import React, { useState } from 'react'
import close from '../../../../assets/images/imgHabitaciones/imagenesEstadia/cerrar.png'


export const RangoFechas = ({ visible1, onClose, onChangeFechas }) => {
if (!visible1) return null; 



const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");

const aplicarFechas = () => {
    onChangeFechas(checkIn, checkOut); 
    onClose(); 
};  

return (

    <>
    <div className='filtroBlurr' >

        <div className='contenedor-fechas'>

            <div className='cerrar'>
                <img onClick={onClose}  src={close} alt="Cerrar" />
            </div>

            <section className='fechas-header'>
                Seleccionar fechas
            </section>
            <div className='contenedor-calendario'>
                
                <div className='calendario-fechas'>
                    <input onChange={(e) => setCheckIn(e.target.value)} type="date" />
                    <input onChange={(e) => setCheckOut(e.target.value)} type="date" />
                </div>
                
            </div>
            
            <div className='botonesFecha'>
                
                <input className='btnhover' onClick={aplicarFechas} type="submit" value='Listo' />
                <input className='btnhover' onClick={onClose} type="button" value="Cancelar" />
            </div>

        </div>

    </div>


    </>
)
}

