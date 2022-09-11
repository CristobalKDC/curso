import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import EliminarCurso from './EliminarCurso';


const recuperarDatosDocente = () => {
    const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
    if (recuperarDatos && recuperarDatos.token) {
        return [recuperarDatos.token, recuperarDatos.userId];
 }
};

const CardCursos = ({unCurso,todosLosCursos,gestorCambioFormulario}) => {
    //console.log(curso);	
	const [modificar,setModificar] = useState(false);

	//? Proceso para modificar
	const URL = `https://genial-beaker-361708.nw.r.appspot.com/api/cursos/${unCurso._id}` //? URL PARA PACTH
    const [curso,setCurso] = useState(unCurso.curso);
    const [opcion,setOpcion] = useState(unCurso.opcion);
    const [aula,setAula] = useState(unCurso.aula);
    const [precio,setPrecio] = useState(unCurso.precio);
	
	const gestorFormulario = async (data) => {
    
		//console.log(recuperarDatosDocente()[1]);
		// console.log(data)
		setModificar(false);
		try {
			
			const response = await axios
			.patch(URL, {
				curso:curso,
				docente: recuperarDatosDocente()[1],
				opcion:opcion,
				aula:aula,
				precio:precio
			},
				{
					headers: {
						Authorization: 'Bearer ' + recuperarDatosDocente()[0], // En los headers van 'Bearer ' + token recibido
					}
				});
			
			
			console.log(data);
			todosLosCursos();
			return console.log(response.data.curso)
			
		}catch (err) {
			console.log(err);
		}
	   };

	   const cambioCurso = (e) => {
		setCurso(e.target.value);
	  };
	  const cambioOpcion = (e) => {
		setOpcion(e.target.value);
	  };
	  const cambioAula = (e) => {
		setAula(e.target.value);
	  };
	  const cambioPrecio = (e) => {
		setPrecio(e.target.value);
	  };


	const cambioModificar = () => {
		setModificar(true);
	};
	const cambioGuardar = () => {
		setModificar(false);
	};
	console.log(modificar)

  return (
    <div className='card bg-light mb-3' style={{ width: '22rem' }} id='cajita'>
			{modificar === false ?
			<div className='card-header'>Curso</div>:<div className='card-header'>Modificar Curso</div>}
			
			<div className='card-body' key={unCurso.id}>

			{modificar === false ?
					 <h6 className='nombre-curso'>{unCurso.curso}</h6> : <input 
					 type='text'
					 className='mod-curso'
					 placeholder='Indique nombre del curso'
					 value={curso}
					 onChange={cambioCurso}
				 />}
			
				<h6>Docente: <span>{unCurso.docente.nombre}</span></h6>
				
				{modificar === false ?
				<h6>Opcion: <span>{unCurso.opcion}</span></h6> : 
				<select 
                name="opcion" 
                id="opcion"
                value={opcion}
                onChange={cambioOpcion}
                 >
                    <option value=''>Seleccione una opcion</option>
                    <option value='Presencial'>Presencial</option>
                    <option value='On-line'>On-line</option>
                    <option value='Semi-presencial'>Semi-presencial</option>
                    
                </select >}

				{modificar === false ?
				<h6>Aula: <span>{unCurso.aula}</span></h6> : 
				<select name="aula" id="aula" value={aula} onChange={cambioAula}>
                    <option value="">Seleccione un aula</option>
                    <option value="1-Z">1-Z</option>
                    <option value="2-C">2-C</option>
                    <option value="3-B">3-B</option>
                    <option value="4-F">4-F</option>
                    <option value="Virtual">Virtual</option>
                    
                </select>}

				{modificar === false ?
				<h6>Precio: <span>{unCurso.precio} €</span></h6> : 
				<input 
                    type='number'
                    name='precio'
                    placeholder='Indique el precio'
                    value={precio}
                    onChange={cambioPrecio}
                    min="800"
                    max="8920"
                />}
				<div className='botonesCurso'>

					{modificar === false ?
					 <button  className='modificarCurso' onClick={cambioModificar} >Modificar</button> : <button className='guardarCurso' onClick={gestorFormulario}>Guardar</button>}
					
					{/* <div className='cajaModificar' key={curso.id} > <ModificarCurso unCurso={curso} todosLosCursos={todosLosCursos}/>  </div> */}
					<div  key={unCurso.id}> <EliminarCurso curso={unCurso} todosLosCursos={todosLosCursos}/> </div>
						
				</div>
			</div>
			
		</div>
  )
}

export default CardCursos