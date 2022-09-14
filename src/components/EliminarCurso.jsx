import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const recuperarDatosDocente = () => {
    const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
    if (recuperarDatos && recuperarDatos.token) {
        return [recuperarDatos.token, recuperarDatos.userId];
 }
};


const EliminarCurso = ({curso,todosLosCursos}) => {
    const navegar = useNavigate();
    
    const eliminarCurso = async (idCurso) => {
        const URLEliminar = `${process.env.REACT_APP_BACKEND_URL}/cursos/${idCurso}`
        

        await axios.delete(URLEliminar,
            {
                headers: {
                    Authorization: 'Bearer ' + recuperarDatosDocente()[0], // En los headers van 'Bearer ' + token recibido
                }
            })
        .then((response) =>{
            navegar('/curso/eliminado');
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
    };

    const gestorDelete = () => {
        eliminarCurso(curso._id)
        
    }

  return (
    <div className='cajaEliminar'>
        <button className='botonEliminar' onClick={gestorDelete}> Eliminar </button>
    </div>
  )
}

export default EliminarCurso