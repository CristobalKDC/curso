
import React,{ useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormularioLogin = ({gestionarAcceso}) => {
	
	// const URL = `http://localhost:5000/api/docentes/login`;
  const URL = `https://genial-beaker-361708.nw.r.appspot.com/api/docentes/login`;
  const { register, handleSubmit, setValue, formState: {errors} } = useForm();
  const onSubmit = data => console.log(data);
	const navegar = useNavigate();
  
	const acceso = async (data) => {
    

    try {
        const response = await axios.post(URL,data);
        setValue('email',null);
        setValue('password',null);
        console.log(response.data);
        localStorage.setItem(
          //key, value
          'datosUsuario',
          JSON.stringify({ 
            userId: response.data.userId,
            token: response.data.token })
        );
            
        gestionarAcceso(data);
        navegar('/');
        return console.log(response);
    }catch (err)  {console.log(err)};
    

    //    await axios.post(URL,{
    //     email: email,
    //     password: password
    //   }).then((response) => {
    //     console.log(response.data);
    //   localStorage.setItem(
    //     //key, value
    //     'datosUsuario',
    //     JSON.stringify({ 
    //       userId: response.data.userId,
    //       token: response.data.token 
    //     })
    //   );
    //   }).catch((error) => {console.log(error)})
      
    // } catch(error) {
    //     console.log(error.message);
    //   }
	};

  
  
	// useEffect(() => {},[]);

	return (
		<div className='cajaFormularioTotal'>
      <div className='cajaFormulario'>
			<h1>Iniciar sesion</h1>
			
			<form onSubmit={handleSubmit(acceso) } className='form1'>

          <input
            type ='text'
            name='email'
            placeholder='Introduzca su email'
            {...register('email',
            {required: true})}
            />
            {errors.email &&
              errors.email.type === 'required' &&
              'Campo email requerido'}

          <input
            type ='text'
            name='password'
            placeholder='Introduzca su password'
            {...register('password',
            {required: true})}
            />
            {errors.email &&
              errors.email.type === 'required' &&
              'Campo password requerido'}
          <button className='btn' type='submit'>
            Login
          </button>
        </form>
        </div>
        </div>
		
	);
};

export default FormularioLogin;
