import React from 'react'

const Inicio = ({tieneAcceso}) => {


  return (
    <div className='inicioTotal'>
      {tieneAcceso === false ? 
						<h1 className='inicioTitulo'>Tu pagina de docente, unete a la docencia.</h1> : <h1 className='inicioTitulo'>¡Bienvenido!</h1>
						}
            
      {tieneAcceso === false ? 
						<div className='fondoInicio'></div> : <div className='fondoInicio2'></div>
			}
      
        
      
    </div>
  )
}

export default Inicio