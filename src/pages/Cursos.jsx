import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import CardCursosMod from '../components/CardCursosMod';
import FormularioCurso from './FormularioCurso';
import '../Styles/Styles_Cursos.css'



const Cursos = () => {

  // const URL = `http://localhost:5000/api/cursos/`;
  const URL = `https://genial-beaker-361708.nw.r.appspot.com/api/cursos/`;  //para recibir todos los cursos
  const [cursos, setCursos] = useState([]);
  const [docente,setDocente] = useState();
  


  

  //Sacamos el token
  const extraerDatosDeUsuario = () => {
    const datosRecuperar = JSON.parse(localStorage.getItem('datosUsuario'));
    if (datosRecuperar && datosRecuperar.token) { // Si existe algo que recuperar y dentro de lo recuperado existe la propiedad token
      //console.log(datosRecuperar.userId);
      setDocente(datosRecuperar.userId);
    }
  };
  

const todosLosCursos = async () => {
  try {
    

    const response = await axios.get(URL);
    setCursos(response.data.cursos);
    //console.log(response.data.cursos);
    

  } catch (error) {
    console.log('Error en la comunicacion');
    console.log(error.toJSON());

  }

};

  useEffect (() => {
    extraerDatosDeUsuario();
    todosLosCursos();

  },[])
  // const buscarCursos = (cursos.filter(curso => curso.docente._id.includes('6315dd0fa3757997d9592134')));
  const buscarCursos = (cursos.filter(curso => curso.docente._id.includes(docente)));
  // console.log(buscarCursos);

  // console.log(cursos.map((curso)=>curso.docente.id))
 
  return (
    <div className='cursosTotal'>

      
      <FormularioCurso todosLosCursos={todosLosCursos}/>
      

     <div className='cartas'>
			{buscarCursos.map((curso) => {
				return <CardCursosMod key={curso._id} unCurso={curso} todosLosCursos={todosLosCursos} />
			})}
			</div>
    </div>
  )
}

export default Cursos