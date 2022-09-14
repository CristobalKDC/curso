import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import CardCursosMod from './CardCursosMod';

const recuperarDatosDocente = () => {
    const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
    if (recuperarDatos && recuperarDatos.token) {
        return [recuperarDatos.token, recuperarDatos.userId];
 }
};

const Buscar = () => {
    const [query, setQuery] = useState('');
    const [datos,setDatos] = useState([]);
    const [docente,setDocente] = useState(recuperarDatosDocente()[1]);

    const gestorBuscar = (e) => {
        setQuery(e.target.value);
    };

    const gestorTecla = (e) => {
        const tecla = e.target.value;
        console.log(tecla);
    }

    useEffect(() => {
        // setDatos(buscarCursos);
        const recupera = async () => {
        if (query.length === 0) {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cursos/` );
            // const res = await axios.get('http://localhost:5000/api/cursos/');
            const filtraCursos = res.data.cursos.filter(curso => curso.docente._id.includes(docente));
            setDatos(filtraCursos);
            // console.log(query.length)
            //  console.log(res.data.cursos)
        } else {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cursos/buscar/${query}`);
            // const res = await axios.get(`http://localhost:5000/api/cursos/buscar/${query}`);
            console.log(res.data.curso)
            // console.log(res.data.curso.aula)
            const filtraCursos = res.data.curso.filter(curso => curso.docente.includes(docente));
            setDatos(filtraCursos);
        }  
    };
    
    recupera();
    
    },[query]);

  return (
    <div className='contieneBuscar'>
        <div>
			&#128269;<input className='inputBuscar'
            type='text'
            name='buscar'
            placeholder='Buscar'
            onChange={gestorBuscar}
            onKeyDown={gestorTecla}
        />
        </div>
        <div className='cartas'>
			{datos.map((curso) => {
				return <CardCursosMod key={curso._id} unCurso={curso}  />
			})}
			</div>
            
    </div>
  )
}

export default Buscar