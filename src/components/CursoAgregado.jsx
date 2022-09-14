import React from 'react'
import { useNavigate } from 'react-router-dom';

const CursoAgregado = () => {

    const navegar = useNavigate();
    setTimeout(() => {
        navegar('/cursos');
         }, 3000);
  return (
    <div className='cursoAgregadoTotal'>
        <div className='contenedorCursoExito'>
        <h1 className='cursoAgregado'>Curso agregado con exito</h1>
        <div className='gokuOK'></div>
        </div>
    </div>
  )
}

export default CursoAgregado