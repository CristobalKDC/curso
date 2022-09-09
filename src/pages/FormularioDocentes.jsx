import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const FormularioDocentes = () => {
   let URL = 'http://localhost:5000/api/docentes/'
   const { register, handleSubmit, setValue, formState: {errors} } = useForm();
   const onSubmit = data => console.log(data);

   const gestorFormulario = async (data) => {
    try {
        const response = await axios.post(URL, data);
        setValue('nombre', null);
        setValue('email', null);
        setValue('password', null);
        localStorage.setItem(
            //key, value
            'datosUsuario',
            JSON.stringify({ 
              userId: response.data.userId,
              token: response.data.token })
          );
        return console.log(response);
    }catch (err) {
        console.log(err);
    }
   };

   return (
    

        <div className='FormularioDocentes'>
            
            <form onSubmit={handleSubmit(gestorFormulario) } className='form2'>
            <h2>Inscripción del docente</h2>
                <input 
                    type='text'
                    name='nombre'
                    placeholder='Indique su nombre'
                    {...register('nombre',
                    {required: true, maxLength: 50})}
                />
                {errors.nombre &&
                    errors.nombre.type === 'required' &&
                     'Campo nombre requerido'}
                {errors.nombre &&
                    errors.nombre.type === 'maxLength' &&
                     'Máximo 50 caracteres'}

                <input 
                    type='text'
                    name='email'
                    placeholder='Indique su email'
                    {...register('email',
                    {required: true})}
                />
                {errors.email &&
                    errors.email.type === 'required' &&
                     'Campo email requerido'}
                
                <input 
                    type='text'
                    name='password'
                    placeholder='Crear password'
                    {...register('password',
                    {required: true})}
                />
                {errors.password &&
                    errors.password.type === 'required' &&
                     'Campo password requerido'}

                <button className='btn' type='submit'>
					Enviar
				</button>
            </form>
        </div>
    
   )
}

export default FormularioDocentes