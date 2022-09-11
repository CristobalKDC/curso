import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import EliminarCurso from './EliminarCurso';
import ModificarCurso from './ModificarCurso';



const CardCursos = ({curso,todosLosCursos,gestorCambioFormulario}) => {
    //console.log(curso);	
	const [modificar,setModificar] = useState(false);
	

	const cambioModificar = () => {
		setModificar(true);
	};
	const cambioGuardar = () => {
		setModificar(false);
	};
	console.log(modificar)

	

  return (
    <div className='card bg-light mb-3' style={{ width: '22rem' }} id='cajita'>
			
			<div className='card-header'>Curso</div>
			
			<div className='card-body' key={curso.id}>
				<h6 className='nombre-curso'>{curso.curso}</h6>
				<h6>Docente: <span>{curso.docente.nombre}</span></h6>
				<h6>Opcion: <span>{curso.opcion}</span></h6>
				<h6>Aula: <span>{curso.aula}</span></h6>
				<h6>Precio: <span>{curso.precio} €</span></h6>
				<div className='botonesCurso'>

					
					{modificar === false ?
					 <button  onClick={cambioModificar} >Modificar</button> : <button onClick={cambioGuardar}>Guardar</button>}
					
					{/* <div className='cajaModificar' key={curso.id} > <ModificarCurso unCurso={curso} todosLosCursos={todosLosCursos}/>  </div> */}
					
					

					<div className='cajaEliminar' key={curso.id}> <EliminarCurso curso={curso} todosLosCursos={todosLosCursos}/> </div>
						
				</div>
			</div>
			
		</div>
  )
}

export default CardCursos