import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import EliminaDocente from './EliminaDocente'

const recuperarDatosDocente = () => {
    const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
    if (recuperarDatos && recuperarDatos.token) {
        return [recuperarDatos.token, recuperarDatos.userId];
 }
};

const CardModDocente = ({unDocente,elDocente,gestionarLogout}) => {

    //console.log(unDocente);
    const [modificar,setModificar] = useState(false);
    const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/${unDocente._id}`
    // const URL = `https://genial-beaker-361708.nw.r.appspot.com/api/docentes/${unDocente._id}`
    const [nombre,setNombre] = useState(unDocente.nombre);
    const [email,setEmail] = useState(unDocente.email);
    const [activo,setActivo] = useState(unDocente.activo);


    const gestorFormulario = async (data) => {

		setModificar(false);
		try {
			const response = await axios
			.patch(URL, {
				nombre:nombre,
				email:email,
				activo:activo,
			},
				{
					headers: {
						Authorization: 'Bearer ' + recuperarDatosDocente()[0], // En los headers van 'Bearer ' + token recibido
					}
				});

			console.log(data);
            elDocente();
			return console.log(response.data)
			
		}catch (err) {
			console.log(err);
		}
	   };

      //console.log(unDocente)


    const cambioNombre = (e) => {
		setNombre(e.target.value);
	  };
	const cambioEmail = (e) => {
		setEmail(e.target.value);
	  };
	const cambioActivo = (e) => {
		setActivo(e.target.value);
	  };
	const cambioModificar = () => {
		setModificar(true);
	};
	const cambioGuardar = () => {
		setModificar(false);
	};

    let indicaActivo;
    if (unDocente.activo === true) {
        indicaActivo = 'Si'
    }else {
         indicaActivo = 'No'
    }

  return (
    <div className='encimaCuerpoDocente'>
        <div className='cuerpoDocente' key={unDocente._id}>

        {modificar === false ?
			<div className='card-header'>Docente</div>:<div className='card-header'>Modificar docente</div>}

        <div className='cardDocente' key={unDocente._id}>
        {modificar === false ?
             <h6 className='nombre-docente'><span className='keyDatos'>Nombre: </span>{unDocente.nombre}</h6> : <input 
             type='text'
             className='mod-nombre'
             placeholder={unDocente.nombre}
             value={nombre}
             onChange={cambioNombre}
         />}
        
        {modificar === false ?
        <h6>Email: <span>{unDocente.email}</span></h6> : 
        <input 
        type='text'
        name="email" 
        id="email"
        value={email}
        placeholder={unDocente.email}
        onChange={cambioEmail}
         />}


        <div className='botonesCurso'>

            {modificar === false ?
             <button  className='modificarDocente' onClick={cambioModificar} >Modificar</button> : <button className='guardarDocente' onClick={gestorFormulario}>Guardar</button>}
            
        
            <div  key={unDocente._id}>
                 <EliminaDocente docente={unDocente} gestionarLogout={gestionarLogout}/> </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardModDocente