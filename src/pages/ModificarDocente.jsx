import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import CardModDocente from '../components/CardModDocente';

const recuperarDatosDocente = () => {
	const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
	if (recuperarDatos && recuperarDatos.token) {
		return [recuperarDatos.token, recuperarDatos.userId];
 }
};

const ModificarDocente = ({gestionarLogout}) => {

    const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/${recuperarDatosDocente()[1]}`
    // const URL = `https://genial-beaker-361708.nw.r.appspot.com/api/docentes/${recuperarDatosDocente()[1]}`;
    const [docente,setDocente] = useState('');
    //console.log(idDocente);

    const elDocente = async () => {
        try {        
          const response = await axios.get(URL);
          setDocente(response.data.docente);
          //console.log(response.data.docente);
        } catch (error) {
          console.log('Error en la comunicacion');
          console.log(error.toJSON());
        }  
      };

      useEffect (() => {
		
        elDocente();
		console.log(docente)
      },[])
    //  console.log(docente)
	  
  return (
    <div className='modificaDocenteTotal'>

	<CardModDocente unDocente= {docente} elDocente={elDocente} gestionarLogout={gestionarLogout}/>
        
    </div>
  )
}

export default ModificarDocente