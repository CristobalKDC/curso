import React from 'react';
import axios from 'axios';
import ModificarCurso from '../components/ModificarCurso'
import EliminarCurso from '../components/EliminarCurso'



const CardCursos = ({curso}) => {
    //console.log(curso);
	

	const eliminarCurso = async (idCurso) => {
		// const URLDELETE = `http://localhost:5000/api/cursos/${idCurso}`
		const URLEliminar = `https://genial-beaker-361708.nw.r.appspot.com/api/cursos/${idCurso}`
        await axios.delete(URLEliminar)
        .then((response) =>{
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
    <div className='card bg-light mb-3' style={{ width: '22rem' }} id='cajita'>
			
			<div className='card-header'>Curso</div>
			
			<div className='card-body' key={curso.id}>
				<h6 className='nombre-curso'>{curso.curso}</h6>
				<h6>Docente: <span>{curso.docente.nombre}</span></h6>
				<h6>Opcion: <span>{curso.opcion}</span></h6>
				<h6>Aula: <span>{curso.aula}</span></h6>
				<div className='botonesCurso'>
					
					<button className='botonModificar' > Modificar </button>
					<button className='botonEliminar' onClick={gestorDelete}> Eliminar </button>
						
				</div>
			</div>
			
		</div>
  )
}

export default CardCursos