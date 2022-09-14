import React from 'react'
import { useNavigate } from 'react-router-dom';

const ModificadoCurso = () => {


  const navegar = useNavigate();
    setTimeout(() => {
        navegar('/cursos');
         }, 2000);
  return (
    <div className='cursoAgregadoTotal'>
        <div className='contenedorCursoExito'>
        <h1 className='cursoAgregado'>Curso modificado con exito</h1>
        <div className='bardock'></div>
        </div>
    </div>
  )
}

export default ModificadoCurso