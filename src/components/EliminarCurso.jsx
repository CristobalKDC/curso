import React from 'react'
import axios from 'axios';

const recuperarDatosDocente = () => {
    const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
    if (recuperarDatos && recuperarDatos.token) {
        return [recuperarDatos.token, recuperarDatos.userId];
 }
};


const EliminarCurso = ({curso,todosLosCursos}) => {

    const eliminarCurso = async (idCurso) => {
		const URLEliminar = `https://genial-beaker-361708.nw.r.appspot.com/api/cursos/${idCurso}`
        
        await axios.delete(URLEliminar,
            {
                headers: {
                    Authorization: 'Bearer ' + recuperarDatosDocente()[0], // En los headers van 'Bearer ' + token recibido
                }
            })
        .then((response) =>{
            todosLosCursos();
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
    <div>
        <button className='botonEliminar' onClick={gestorDelete}> Eliminar </button>
    </div>
  )
}

export default EliminarCurso