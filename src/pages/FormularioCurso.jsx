import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const recuperarDatosDocente = () => {
    const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
    if (recuperarDatos && recuperarDatos.token) {
        // console.log(recuperarDatos.token);
        // console.log(recuperarDatos.userId);
        return [recuperarDatos.token, recuperarDatos.userId];
 }
};



const FormularioCurso =  ({todosLosCursos}) => {

    // const URL = 'http://localhost:5000/api/cursos/'
    

    const URL = 'https://genial-beaker-361708.nw.r.appspot.com/api/cursos/'
    const { register, handleSubmit, setValue, formState: {errors} } = useForm();
    const navegar = useNavigate();
    const onSubmit = data => console.log(data);


   const gestorFormulario = async (data) => {
    console.log(data);
    console.log(recuperarDatosDocente()[1]);

    try {
        
        const response = await axios
        .post(URL, {
            curso:data.curso,
            docente: recuperarDatosDocente()[1],
            opcion:data.opcion,
            aula:data.aula,
            precio:data.precio
        },
            {
                headers: {
                    Authorization: 'Bearer ' + recuperarDatosDocente()[0], // En los headers van 'Bearer ' + token recibido
                }
            });
        setValue('curso', null);
        setValue('docente', null);
        setValue('opcion', null);
        setValue('aula', null);
        setValue('precio', null);
        
        
        todosLosCursos();
        return console.log(response.data.curso)
        
    }catch (err) {
        console.log(err);
    }
   };


  return (
    <div className='FormularioCursos'>
            
            <form onSubmit={handleSubmit(gestorFormulario) } className='form2'>
            <h2>Creacion del curso</h2>
                <input 
                    type='text'
                    name='curso'
                    placeholder='Indique nombre del curso'
                    {...register('curso',
                    {required: true, maxLength: 100})}
                />
                {errors.curso &&
                    errors.curso.type === 'required' &&
                     'Campo curso requerido'}
                {errors.curso &&
                    errors.curso.type === 'maxLength' &&
                     'Máximo 100 caracteres'}

                <select name="opcion" id="opcion" {...register('opcion',
                    {required: true, enum: ['Presencial', 'On-line','Semi-presencial']})}>
                    <option value=''>Seleccione una opcion</option>
                    <option value='Presencial'>Presencial</option>
                    <option value='On-line'>On-line</option>
                    <option value='Semi-presencial'>Semi-presencial</option>
                    
                </select >
                {errors.opcion &&
                    errors.opcion.type === 'required' &&
                     'Campo opcion requerido'}
                {errors.opcion &&
                    errors.opcion.type === 'enum' &&
                     'Seleccione una opcion'}
                {/* <input 
                    type='text'
                    name='opcion'
                    placeholder='Seleccione una opcion'
                    {...register('opcion',
                    {required: true})}
                /> */}
                

                {/* <input 
                    type='text'
                    name='aula'
                    placeholder='Seleccione un aula'
                    {...register('aula',
                    {required: true})}
                /> */}
                <select name="aula" id="aula"{...register('aula',
                    {required: true, enum: [ '1-Z', '2-C','3-B','4-F','Virtual']})}>
                    <option value="">Seleccione un aula</option>
                    <option value="1-Z">1-Z</option>
                    <option value="2-C">2-C</option>
                    <option value="3-B">3-B</option>
                    <option value="4-F">4-F</option>
                    <option value="Virtual">Virtual</option>
                    
                </select>
                {errors.aula &&
                    errors.aula.type === 'required' &&
                     'Campo aula requerido'}

                <input 
                    type='number'
                    name='precio'
                    placeholder='Indique el precio'
                    min="800"
                    max="8920"
                    {...register('precio',
                    {required: true},{min: 800}, {max: 8920})}
                />
                {errors.precio &&
                    errors.precio.type === 'required' &&
                     'Campo precio requerido'}



                <button className='btn' type='submit'>
					Enviar
				</button>
            </form>
        </div>
  )
}

export default FormularioCurso