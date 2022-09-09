import React from 'react'

const CardDocentes = ({docente}) => {
    console.log(docente);
    const nombreCursos = docente.cursos.map((curso) => {
        return <li>{curso.curso}</li>
    })

    let activo
    if (docente.activo = true) {
        activo = 'Si'
    }else {
         activo = 'No'
    }

  return (
    <div className='card bg-light mb-3' style={{ width: '22rem' }} id='cajita'>
			
			<div className='card-header'>Docente</div>
			
			<div className='card-body' key={docente.id}>
				<h6 className='nombre-docente'>{docente.nombre}</h6>
				<h6>Email: <span>{docente.email}</span></h6>
				<h6>Cursos: <p>{nombreCursos} </p></h6>
				<h6>Activo: <span>{activo}</span></h6>
			</div>
			
		</div>
  )
}

export default CardDocentes