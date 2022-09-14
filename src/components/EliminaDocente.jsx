import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const recuperarDatosDocente = () => {
    const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
    if (recuperarDatos && recuperarDatos.token) {
        return [recuperarDatos.token, recuperarDatos.userId];
 }
};

const EliminaDocente = ({docente,gestionarLogout}) => {

    const navegar = useNavigate();

    const eliminarDocente = async (idDocente) => {
        const URLEliminar = `${process.env.REACT_APP_BACKEND_URL}/docentes/${idDocente}`
		// const URLEliminar = `https://genial-beaker-361708.nw.r.appspot.com/api/docentes/${idDocente}`
        
        await axios.delete(URLEliminar,
            {
                headers: {
                    Authorization: 'Bearer ' + recuperarDatosDocente()[0], // En los headers van 'Bearer ' + token recibido
                }
            })
        .then((response) =>{
            
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
    };

    const gestorDelete = () => {
        eliminarDocente(docente._id)
        localStorage.removeItem('datosUsuario');
        gestionarLogout();
        navegar('/');
    }

  return (
    <div> 
    <div className='cajaEliminar'>
        <button className='botonEliminar' onClick={gestorDelete}> Eliminar </button>
</div></div>
  )
}

export default EliminaDocente