import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';



const Logout = ({gestionarLogout}) => {
    
  const navegar = useNavigate();

  localStorage.removeItem('datosUsuario');
  
  useEffect(() => {
    gestionarLogout();
    navegar('/');
    
  }) 
    // const navegar = useNavigate();

    // useEffect(() => {
    //   gestionarLogout();
    //   localStorage.removeItem('datosUsuario');
    //   navegar('/login');
    // })


  return (
    <h1>Sesion cerrada con exito :D</h1>
  )
}

export default Logout