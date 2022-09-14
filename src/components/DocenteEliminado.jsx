import React from 'react'
import { useNavigate } from 'react-router-dom';

const DocenteEliminado = () => {
  const navegar = useNavigate();
  // setTimeout(() => {
  //     navegar('/');
  //      }, 3000);

return (
  <div className='docenteEliminadoTotal'>
      <div className='contenedorDocenteEliminado'>
      <h1 className='docenteEliminado'>Docente eliminado con exito</h1>
      <div className='gokuBye'></div>
      </div>
  </div>
)
}

export default DocenteEliminado