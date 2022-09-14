import React from 'react'
import { useNavigate } from 'react-router-dom';

const CursoEliminado = () => {
    
    const navegar = useNavigate();
    setTimeout(() => {
        navegar('/cursos');
         }, 3000);

  return (
    <div className='cursoEliminadoTotal'>
        <div className='contenedorCursoEliminado'>
        <h1 className='cursoEliminado'>Curso eliminado con exito</h1>
        <div className='yamcha'></div>
        </div>
    </div>
  )
}

export default CursoEliminado