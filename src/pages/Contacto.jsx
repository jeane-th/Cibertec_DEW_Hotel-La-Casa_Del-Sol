import React, { useEffect, useState } from 'react';
import './Contacto.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import img1 from '../assets/images/Banner1.jpg';
import img2 from '../assets/images/Banner2.jpg';
import img3 from '../assets/images/Banner3.jpg';


import * as yup from 'yup';
import { ReservaResumenCard } from './ReservaResumenCard';
const schema = yup.object().shape({
  // Validaciondes de formulario
  habitaciones: yup
    .string()
    .required("El numero de habitaciones es obligatorio")
    .matches(/^\d*$/, "Solo se permiten números"),

  huespedes: yup
    .string()
    .required("La cantidad de huespedes es obligatoria")
    .matches(/^\d*$/, "Solo se permiten números"),

  nombre: yup
    .string()
    .required("El nombre es obligatorio")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "El nombre solo puede contener letras")
    .min(3, "El nombre debe tener al menos 3 caracteres"),

  apellido1: yup
    .string()
    .required("El nombre es obligatorio")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "El apellido solo puede contener letras")
    .min(3, "El nombre debe tener al menos 3 caracteres"),

  apellido2: yup
    .string()
    .optional() // o .notRequired()
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/, "El apellido solo puede contener letras"),

  dni: yup
    .string()
    .required("El DNI es obligatorio")
    .matches(/^\d*$/, "Solo se permiten números")
    .test("longitud", "El DNI debe tener 8 dígitos", value => !value || value.length === 8),

  telefono: yup
    .string()
    .required("El teléfono es obligatorio")
    .matches(/^\d*$/, "Solo se permiten números")
    .test("longitud", "El teléfono debe tener 9 dígitos", value => !value || value.length === 9),

  email: yup
    .string()
    .required("El email es obligatorio")
    .email("Formato de email inválido"),

  mensaje: yup
    .string()
    .optional()
    .max(500, "El mensaje no puede superar los 500 caracteres"),

  checkbox: yup
    .boolean()
    .oneOf([true], "Debe autorizar la comunicación por whatsapp"),

});

export const Contacto = ({ habitacionesReservadas, cantidadHuespedes }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), mode: "onChange" })
  // estados del formulario
  const [datosForm, setDatosForm] = useState(null);
  const onData = (data) => {
    setDatosForm(data);
    reset(
      {
        habitaciones: "",
        huespedes: "",
        nombre: "",
        apellido1: "",
        apellido2: "",
        dni: "",
        telefono: "",
        email: "",
        mensaje: "",
        checkbox: false
      }
    );
  }
  // Cambio de imagenes
  const [banner, setbanner] = useState(img1);
  const [numImage, setnumImage] = useState(1); // numero del color

  useEffect(() => {
    const cambioImagen = setInterval(() => {
      if (numImage === 1) {
        setbanner(img2);
        setnumImage(2);
      } else if (numImage === 2) {
        setbanner(img3);
        setnumImage(3);
      } else {
        setbanner(img1);
        setnumImage(1);
      }
    }, 3000);
    return () => clearInterval(cambioImagen); // detener setInterval
  }, [numImage]);

  return (
    <>
      <div className='contacto-contenedor'>
        <div className='imagen-contacto'>
          <img className="imagen" src={banner} alt="" />
        </div>
        <form onSubmit={handleSubmit(onData)}>
          <h2>Contactenos</h2>
          <div className='formInputs'>
            <div>
              <div>
                <label>Numero Habitaciones<span className='validacion'>*</span> </label>
                <input
                  type="text"
                  name='habitaciones'
                  defaultValue={habitacionesReservadas}
                  {...register('habitaciones')}
                />
                <p className='validacion'>{errors.habitaciones?.message}</p>
                <label>Cantidad de Huespedes<span className='validacion'>*</span> </label>
                <input
                  type="text"
                  name='huespedes'
                  defaultValue={cantidadHuespedes}
                  {...register('huespedes')}
                />
                <p className='validacion'>{errors.huespedes?.message}</p>
                <label>Nombre <span className='validacion'>*</span> </label>
                <input
                  type="text"
                  name="nombre"
                  {...register('nombre')}
                />
                <p className='validacion'>{errors.nombre?.message}</p>
              </div>
              <div>
                <label>Apellido 1 <span className='validacion'>*</span> </label>
                <input
                  type="text"
                  name="apellido1"
                  {...register('apellido1')}
                />
                <p className='validacion'>{errors.apellido1?.message}</p>
              </div>
              <div>
                <label>Apellido 2 <span className='validacion'></span> </label>
                <input
                  type="text"
                  name="apellido2"
                  {...register('apellido2')}
                />
                <p className='validacion'>{errors.apellido2?.message}</p>
              </div>
              <div>
                <label>DNI <span className='validacion'>*</span> </label>
                <input
                  type="text"
                  name="dni"
                  {...register('dni')}
                />
                <p className='validacion'>{errors.dni?.message}</p>
              </div>
            </div>
            <div>
              <div>
                <label>Teléfono <span className='validacion'>*</span> </label>
                <input
                  type="text"
                  name="telefono"
                  {...register('telefono')}
                />
                <p className='validacion'>{errors.telefono?.message}</p>
              </div>
              <div>
                <label>email <span className='validacion'>*</span> </label>
                <input
                  type="email"
                  name="email"
                  {...register('email')}
                />
                <p className='validacion'>{errors.email?.message}</p>
              </div>
              <div>
                <label>Comentarios adicionales</label>
                <textarea
                  {...register("mensaje")}
                ></textarea>
                <p className='validacion'>{errors.mensaje?.message}</p>
              </div>
              <div className='checkbox'>
                <label className='checkbox'>
                  <input
                    type="checkbox"
                    name='checkbox'
                    {...register("checkbox")}
                  />
                  Deseo que se comuniquen por whatsapp</label>
                <p className='validacion'>{errors.checkbox?.message}</p>
              </div>
              <button className='btnContacto' type="submit">Enviar</button>
            </div>
          </div>
        </form >
        {datosForm && <ReservaResumenCard datos={datosForm} />}
      </div>
    </>
  );
};

export default Contacto;
