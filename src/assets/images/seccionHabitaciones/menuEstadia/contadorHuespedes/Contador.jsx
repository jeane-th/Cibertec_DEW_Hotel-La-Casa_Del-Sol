import React, { useState } from 'react'
import menos from '../../../../assets/images/imgHabitaciones/imagenesEstadia/imagenesContador/iconmonstr-minus.png'
import mas from '../../../../assets/images/imgHabitaciones/imagenesEstadia/imagenesContador/iconmonstr-plus.png'
import close from '../../../../assets/images/imgHabitaciones/imagenesEstadia/cerrar.png'

export const Contador = ({ visible2, onClose, onConfirm }) => {

if (!visible2) return null; 

const [habitaciones, setHabitaciones] = useState([{ nombre: "Habitación 1", adultos: 0, niños: 0 }]);


function sumarAdulto(index) {
  const nuevasHabitaciones = [...habitaciones]; 
  nuevasHabitaciones[index].adultos += 1;
  setHabitaciones(nuevasHabitaciones);
}

function restarAdulto(index) {
  const nuevasHabitaciones = [...habitaciones];
  if (nuevasHabitaciones[index].adultos > 0) {
    nuevasHabitaciones[index].adultos -= 1;
    setHabitaciones(nuevasHabitaciones);
  }
}

function sumarNiño(index) {
  const nuevasHabitaciones = [...habitaciones]; 
  nuevasHabitaciones[index].niños += 1;
  setHabitaciones(nuevasHabitaciones);
}

function restarNiño(index) {
  const nuevasHabitaciones = [...habitaciones];
  if (nuevasHabitaciones[index].niños > 0) {
    nuevasHabitaciones[index].niños -= 1;
    setHabitaciones(nuevasHabitaciones);
  }
}

function agregarHabitacion() {
  if (habitaciones.length < 5) {  
    const nuevaHabitacion = {
      nombre: `Habitación ${habitaciones.length + 1}`,
      adultos: 0,
      niños: 0
    };
    setHabitaciones([...habitaciones, nuevaHabitacion]);
  }
}

function confirmarHabitaciones() {
    if (onConfirm) {
      onConfirm(habitaciones);
    }
    onClose(); 
  }

return (
    <>
        <div className='filtroBlurr' >
    
            <div className='contenedor-fechas contenedor-contador'>
    
                <div className='cerrar'>
                    
                </div>
    
                <section className='fechas-header'>
                    <strong>
                        <p>Habitaciones y huespedes</p>
                    </strong>
                    <div className='cerrar'>
                        <img onClick={() => onClose()}  src={close} alt="Cerrar" />
                    </div>
                    
                </section>
                    <div className='contenedor-indicador'>
                        <div className='titulos-indicador'>
                            <strong>
                                <p>Habitaciones</p>
                            </strong>
                            <div className='cont-titulos'>
                                <strong>
                                    <p>Adultos</p>
                                </strong>
                                <strong>
                                    <p>Niños</p> 
                                </strong>
                            </div>
                        </div>
                        <div>

                                {habitaciones.map((item, index) => (
                                    <div key={index} className='cont-adultos-niños'>
                                        <div>
                                        <p>{item.nombre}</p>
                                        </div> 
                                        <div className='contadores'>
                                        <img className='btnhover' onClick={() => restarAdulto(index)} src={menos} alt="" />
                                        <p>{item.adultos}</p>
                                        <img className='btnhover' onClick={() => sumarAdulto(index)} src={mas} alt="" />
                                        </div>
                                        <div className='contadores'>
                                        <img className='btnhover' onClick={() => restarNiño(index)} src={menos} alt="" />
                                        <p>{item.niños}</p>
                                        <img className='btnhover' onClick={() => sumarNiño(index)} src={mas} alt="" />
                                        </div>
                                    </div> 
                                    ))}
                        </div>                                    
                    </div>
                
                <div className='contador-habitacion'>
                    <img className='btnhover' onClick={agregarHabitacion} src={mas} alt="" />
                    <p>Agregar habitacion</p>

                </div>
                <div className='botonesFecha'>
                <input className='btnhover' type="submit" value='Listo' onClick={confirmarHabitaciones} />
                <input className='btnhover' onClick={() => onClose()} type="button" value="Cancelar"  />
            </div>
                
                
                
    
            </div>
    
        </div>
    
    
        </>
  )
}
