import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const recuperarDatosDocente = () => {
    const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
    if (recuperarDatos && recuperarDatos.token) {
        return [recuperarDatos.token, recuperarDatos.userId];
 }
};

const ModificarCurso = ({unCurso,todosLosCursos}) => {

    const URL = `https://genial-beaker-361708.nw.r.appspot.com/api/cursos/${unCurso._id}`
    const [curso,setCurso] = useState(unCurso.curso);
    const [opcion,setOpcion] = useState(unCurso.opcion);
    const [aula,setAula] = useState(unCurso.aula);
    const [precio,setPrecio] = useState(unCurso.precio);
    
  const gestorFormulario = async (data) => {
    
    //console.log(recuperarDatosDocente()[1]);
    console.log(data)
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

  useEffect(() => {}, []);

  return (
    <div>
    
    
            <h2>Modificacion del curso</h2>
                <input 
                    type='text'
                    className='mod-curso'
                    placeholder='Indique nombre del curso'
                    value={curso}
                    onChange={cambioCurso}
                />

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
                    
                </select >
                
                <select name="aula" id="aula" value={aula} onChange={cambioAula}>
                    <option value="">Seleccione un aula</option>
                    <option value="1-Z">1-Z</option>
                    <option value="2-C">2-C</option>
                    <option value="3-B">3-B</option>
                    <option value="4-F">4-F</option>
                    <option value="Virtual">Virtual</option>
                    
                </select>
                

                <input 
                    type='number'
                    name='precio'
                    placeholder='Indique el precio'
                    value={precio}
                    onChange={cambioPrecio}
                    min="800"
                    max="8920"
                    
                />
                



                <button className='btn' onClick={gestorFormulario}>
					Enviar
				</button>
            

    </div>
  )
}

export default ModificarCurso