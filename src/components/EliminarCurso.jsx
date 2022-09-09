import React from 'react';
import axios from 'axios';

const EliminarCurso = ({curso}) => {

    const URL = `https://genial-beaker-361708.nw.r.appspot.com/api/cursos/${curso.id}`

    const eliminarCurso = async (idCurso) => {
        await axios.delete(`https://genial-beaker-361708.nw.r.appspot.com/api/cursos/`)
        .then((response) =>{
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
    };

  return (
    <div>
        <h1>ADVERTENCIA</h1>
    </div>
  )
}

export default EliminarCurso