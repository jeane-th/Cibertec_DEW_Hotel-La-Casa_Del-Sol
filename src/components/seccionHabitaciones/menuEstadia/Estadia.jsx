import React, { useEffect, useState } from 'react'
import '../../../css/cssHabitaciones/estadia.css'
import linea from '../../../assets/images/imgHabitaciones/imagenesEstadia/line-two-vertical.png'
import { RangoFechas } from './fechaForm/rangoFechas';
import '../../../css/cssHabitaciones/rangofehas.css'
import { Contador } from './contadorHuespedes/Contador';
import { Link } from 'react-router-dom';

export const Estadia = ({sethabitacionesReservadas, setcantidadHuespedes}) => {

    const [mostrar1, setMostrar1] = useState(false);
    const [mostrar2, setMostrar2] = useState(false);
    const [fechaCheckIn, setFechaCheckIn] = useState('');
    const [fechaCheckOut, setFechaCheckOut] = useState('');
    const [habitaciones, setHabitaciones] = useState([]);
    


const totalAdultos = habitaciones.reduce((acum, hab) => acum + hab.adultos, 0);
const totalNiños = habitaciones.reduce((acum, hab) => acum + hab.niños, 0);


     const confirmarHabitaciones = (nuevasHabitaciones) => {
    setHabitaciones(nuevasHabitaciones);
    
  };
let nroHabitaciones;
let nroHuespedes;
let label1;


if(habitaciones.length>0){
  label1 = 'Habitaciones'
  
  nroHabitaciones = habitaciones.length;
  nroHuespedes = totalAdultos + totalNiños;

} else{
  label1 = 'Habitacion'
  
  nroHabitaciones = 1;
  nroHuespedes = 2
}


  let dia;
  let diaSemana;
  let mes;
  let diaFuturo;
  let diaSemanaFuturo;
  let mesFuturo;


const diasSemana = ["Domi","Lun","Mar","Miér","Jue","Vie","Sáb"];
const meses =['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sept','Oct','Novi','Dici']
  const fecha = new Date();

    if (fechaCheckIn) {
    const fechaCheInConvertida = new Date(fechaCheckIn);
    dia = fechaCheInConvertida.getDate()+1;
    diaSemana = diasSemana[fechaCheInConvertida.getDay()+1];
    mes = meses[fechaCheInConvertida.getMonth()];
  } else {
    dia = fecha.getDate();
    diaSemana = diasSemana[fecha.getDay()];
    mes = meses[fecha.getMonth()];
  }

  const futura = new Date(fecha);
  futura.setDate(fecha.getDate() + 2);

  if (fechaCheckOut) {
    const fechaCheckOutConvertida = new Date(fechaCheckOut);
    diaFuturo = fechaCheckOutConvertida.getDate()+1;
    diaSemanaFuturo = diasSemana[fechaCheckOutConvertida.getDay()+1];
    mesFuturo = meses[fechaCheckOutConvertida.getMonth()];
  } else {
    diaFuturo = futura.getDate();
    diaSemanaFuturo = diasSemana[futura.getDay()];
    mesFuturo = meses[futura.getMonth()];
  }

  return (
    <>
    
    <div className='barraEstadia'>
        <h2>Su estadia:</h2>
        <section onClick={()=>setMostrar1(true)} className='calendario'>
            <div className='fechas'>
              <h2 className='fecha'>{dia}</h2>
              <div>
                <p className='mesDia'>{mes}</p>
                <p className='mesDia'>{diaSemana}</p>
              </div>
            </div>
            <img src={linea} alt="" />
            <div className='fechas'>
              <h2 className='fecha'>{diaFuturo}</h2>
              <div>
                <p className='mesDia'>{mesFuturo}</p>
                <p className='mesDia'>{diaSemanaFuturo}</p>
              </div>
            </div>
        </section>
            <div className="botones">

              <button onClick={()=>setMostrar2(true)}  className='btnEstadia detallesReserva'>{nroHabitaciones} {label1}, {nroHuespedes} Huespedes</button>
              <Link onClick={()=>{sethabitacionesReservadas(nroHabitaciones); setcantidadHuespedes(nroHuespedes) }} to="/Contacto" className='btnEstadia hacerReserva'>Hacer reservacion</Link>
            </div>
        
    </div>
    
    <RangoFechas visible1={mostrar1} cerrarVentana={() => setMostrar1(false)} onChangeFechas={(fechaCheckIn, fechaCheckOut) => {
    setFechaCheckIn(fechaCheckIn);
    setFechaCheckOut(fechaCheckOut);
  }}  />
      <Contador visible2={mostrar2} cerrarVentana={() => setMostrar2(false)}
        confirmarSeleccion={confirmarHabitaciones}   />
    </>
  )
}
