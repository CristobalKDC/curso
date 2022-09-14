

import React,{ useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
	NavLink,
	
} from 'react-router-dom';
import './Styles/Styles.css'
//Enlaces paginas
import Inicio from './pages/Inicio' //Pagina de inicio
import Docentes from './pages/Docentes'; //Listar docentes
import Cursos from './pages/Cursos'; //Listar cursos
import FormularioLogin from './pages/FormularioLogin' //login del docente
import FormularioDocentes from './pages/FormularioDocentes' //Crear docente
import Logout from './pages/Logout' //cerrar sesion
import Error from './components/Error'; //Pagina de error
import ModificarDocente from './pages/ModificarDocente';
import CursoAgregado from './components/CursoAgregado';
import CursoEliminado from './components/CursoEliminado';
import DocenteEliminado from './components/DocenteEliminado';
import ModificadoCurso from './components/ModificadoCurso';


const App = () => {
	
	const [tieneAcceso,setTieneAcceso] = useState(false);
	const [datos,setDatos] = useState({});
	const [token,setToken] = useState({});

	const recuperarDatosDocente = () => {
		const recuperarDatos = JSON.parse(localStorage.getItem('datosUsuario'));
		if (recuperarDatos && recuperarDatos.token) {
			// console.log(recuperarDatos.token);
			// console.log(recuperarDatos.userId);
			return [recuperarDatos.token, recuperarDatos.userId];
	 }else {
		return [];
	 }
	};

	useEffect (() => {
		if (recuperarDatosDocente().length === 0) {
			setTieneAcceso(false);
		} else {
			setTieneAcceso(true);
		}
	},[]);
	

	//console.log(recuperarDatosDocente());
	console.log(tieneAcceso);

	const gestionarAcceso = (dato) => {
		setDatos(dato);
		setTieneAcceso(true);
		setToken(dato.token);
		console.log(tieneAcceso);
	};

	const gestionarLogout = () => {
		setTieneAcceso(false);
	}
	
	return (
		<div className='paginaCompleta'>

<div className='App'>
			<Router>
				<div className='navbar'>
					<NavLink className={'navlink'} to='/'>
						Inicio
					</NavLink>
					<NavLink className={'navlink'} to='/docentes'>
						Nuestros docentes
					</NavLink>

					{tieneAcceso === true ? 
						<NavLink className={'navlink'} to='/cursos'>
						Cursos
					</NavLink> : <div display='none'></div>
						}

					{tieneAcceso === true ? 
						<NavLink className={'navlink'} to='/docente'>
						Modificar docente
					</NavLink> : <div display='none'></div>
						}
					
					<NavLink className={'navlink'} to='/registro'>
						Crear docente
					</NavLink>

					<div className={'navlink'}>
						{tieneAcceso === false ? 
						(<NavLink className={'navlink'} to='/acceso'>
						Acceso
						</NavLink>) : (<NavLink className={'navlink'} to='/logout'>
						Cerrar sesion
						</NavLink>)
						}
					</div>

				</div>
				{/* A donde se dirige cada componente */}
				<Routes>
					<Route path='/' element={<Inicio tieneAcceso={tieneAcceso}/>} />
					<Route path='/cursos' element={<Cursos />} />
					<Route path='/docentes/*' element={<Docentes />} />
					<Route path='/acceso' element={<FormularioLogin gestionarAcceso={gestionarAcceso}/>} />
					<Route path='/docente' element={<ModificarDocente gestionarLogout={gestionarLogout}/>} />
					<Route path='/registro' element={<FormularioDocentes gestionarAcceso={gestionarAcceso}/>} />
					<Route path='/logout' element={<Logout  gestionarLogout={gestionarLogout}/>} />
					<Route path='/curso/agregado' element={<CursoAgregado />} />
					<Route path='/curso/modificado' element={<ModificadoCurso />} />
					<Route path='/curso/eliminado' element={<CursoEliminado />} />
					<Route path='/docente/eliminado' element={<DocenteEliminado />} />
					<Route path='/404' element={<Error />} />
					<Route path='*' element={<Navigate to='/404' replace />} />
				</Routes>
				
			</Router>
		</div>
		</div>
	);
};

export default App;
