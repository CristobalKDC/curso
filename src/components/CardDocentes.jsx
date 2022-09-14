import React,{ useState, useEffect } from 'react';
import '../Styles/Styles_Docentes.css'


const recuperarDatosDocente = () => {
  const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
  if (recuperarDatos && recuperarDatos.token) {
    return [recuperarDatos.token, recuperarDatos.userId];
 }else {
  return [];
 }
};

const CardDocentes = ({docente}) => {
  const [tieneAcceso,setTieneAcceso] = useState();
    //console.log(docente);
    const nombreCursos = docente.cursos.map((curso) => {
        return <option>{curso.curso}</option>
    })

    let activo
    if (docente.activo = true) {
        activo = 'Si'
    }else {
         activo = 'No'
    }

    useEffect (() => {
      if (recuperarDatosDocente().length === 0) {
        setTieneAcceso(false);
      } else {
        setTieneAcceso(true);
      }
    },[]);

  return (
    <div className='card bg-light mb-3' style={{ width: '22rem' }} id='cajita' >
			
			<div className='card-header' >Docente</div>
			
			<div className='card-body' key={docente._id}>
				<h6 className='nombre-docente'>{docente.nombre}</h6>
				<h6>Email: <span>{docente.email}</span></h6>
				<h6 >Cursos: <select className='cursosDocente'> {nombreCursos} </select></h6>
				<h6>Activo: <span>{activo}</span></h6>
        {/* {tieneAcceso === true && recuperarDatosDocente()[1]===docente._id ? 
						<button className='botonDocenteMod' to='/docente'>
						Modificar
					</button> : <div display='none'></div>
						} */}
			</div>
			
		</div>
  )
}

export default CardDocentes