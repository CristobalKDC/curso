import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import CardCursosMod from '../components/CardCursosMod';
import FormularioCurso from './FormularioCurso';
import Buscar from '../components/Buscar';
import '../Styles/Styles_Cursos.css'



const Cursos = () => {
  
  // const buscarCursos = (cursos.filter(curso => curso.docente._id.includes('6315dd0fa3757997d9592134')));
  // const buscarCursos = (cursos.filter(curso => curso.docente._id.includes(docente)));
  //console.log(cursos);

  return (
    <div className='cursosTotal'>

      
      <FormularioCurso />
      <Buscar />

     {/* <div className='cartas'>
			{buscarCursos.map((curso) => {
				return <CardCursosMod key={curso._id} unCurso={curso} todosLosCursos={todosLosCursos} />
			})}
			</div> */}
    </div>
  )
}

export default Cursos