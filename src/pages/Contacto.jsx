import React from 'react';
import './Contacto.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
const schema = yup.object().shape({
  // Restricciones

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
    .test("solo_numeros", "Solo se permiten números", value => /^\d*$/.test(value))
    .test("longitud", "El teléfono debe tener 9 dígitos", value => !value || value.length === 8),

  telefono: yup
    .string()
    .required("El teléfono es obligatorio")
    .test("solo_numeros", "Solo se permiten números", value => /^\d*$/.test(value))
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

export const Contacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), mode: "onChange" })

  const onData = (data) => {
    console.log(data)
  }


  return (
    <>
      <form onSubmit={handleSubmit(onData)}>


        <h2>Contactenos</h2>
        <div>
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
        <div>
          <label>Telefono <span className='validacion'>*</span> </label>
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
          <label>Dejamos tu mensaje </label>
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
        <button type="submit">Enviar</button>
      </form>

    </>
  );
};

export default Contacto;
