import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import CardDocentes from '../components/CardDocentes';

const Docentes = () => {

  // const URL = `http://localhost:5000/api/docentes/`;
  const URL = `https://genial-beaker-361708.nw.r.appspot.com/api/docentes/`;
  const [docentes, setDocentes] = useState([]);
  const [added,setAdded] = useState(false);
  

const todosLosDocentes = async () => {
  try {
    //Sacamos el token
    const extraerDatosDeUsuario = () => {
      const datosRecuperar = JSON.parse(localStorage.getItem('datosUsuario'));
      if (datosRecuperar && datosRecuperar.token) { // Si existe algo que recuperar y dentro de lo recuperado existe la propiedad token
        console.log(datosRecuperar.token);
      }
    };
  
    const response = await axios.get(URL);
    setDocentes(response.data.docentes);
    //console.log(response.data.docentes);
    

  } catch (error) {
    console.log('Error en la comunicacion');
    console.log(error.toJSON());
    
  }
  
};
  
  useEffect (() => {
    todosLosDocentes();
    
  },[])
  
  //console.log(cursos)
  

  return (
    <div className='docentesTotal'>

     <div className='cartas'>
			{docentes.map((docente) => {
				return <CardDocentes key={docente.id} docente={docente} />
			})}
			</div>
    </div>
  )
}

export default Docentes