import React from 'react'
import './ReservaResumenCard.css'
import { Link } from 'react-router-dom'

export const ReservaResumenCard = ({datos}) => {

    return (
        <div className="reservaResumenCard">
            <h3>¡Gracias! Tu reserva a sido realizada 🎉</h3>
            <div className='cardResumen'>
                <p>Nombre: <span>{datos.nombre}</span> </p>
                <p>Apellidos: <span>{datos.apellido1} {datos.apellido2}</span></p>
                <p>DNI: <span>{datos.dni}</span></p>
                <p>Teléfono: <span>{datos.telefono}</span></p>
                <p>Email: <span>{datos.email}</span></p>
                <p>Mensaje: <span>{datos.mensaje}</span></p>
                <p>Nro habitaciones: <span>{datos.habitaciones}</span></p>
                <p>Nro huespedes: <span>{datos.huespedes}</span></p>
            </div>
            <Link className='button' to={'/Home'}>Cerrar</Link>
        </div>
    )
}
