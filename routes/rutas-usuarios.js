const express = require('express');
const router = express.Router();

const fotored = [{
    nombre: 'Ramón',
	mensajes: ['Buenas','¿Estamos listos todos?'],
	conectado: true,
	seguidores: 33,
	siguiendo: 2,
	puntuacion: 7
},
{
	nombre: 'Marco',
	mensajes: ['No sé yo si es así'],
	conectado: false,
	seguidores: 174,
	siguiendo: 731,
	puntuacion: 9
},
{
	nombre: 'Kaito',
	mensajes: ['Una seguida de otra','No puede ser', 'Algún día se acabara todo'],
	conectado: true,
	seguidores: 7256,
	siguiendo: 3715,
	puntuacion: 3
},
{
	nombre: 'Ariel',
	mensajes: ['Pipo las cosas son como son','Increible','¿Otra?'],
	conectado: true,
	seguidores: 7643418,
	siguiendo: 65439,
	puntuacion: 10
},
{
	nombre: 'Aldo',
	mensajes: ['Clase calor hace','El ventilador es muy importante','Se me rompio el ventilador :('],
	conectado: false,
	seguidores: 835,
	siguiendo: 48,
	puntuacion: 5
}];

//muestra todos los usuarios
router.get('/', (req,res,next) => {
    res.json({
        usuarios: fotored
    });
});
//muestra un usuarios por su nombre
router.get('/:nombre', (req, res, next) => {
	let nombreUsuario = req.params.nombre;
    const unUsuario = fotored.find((usuario) => {
        return usuario.nombre === nombreUsuario;
    });
    if (!unUsuario) {
        res.status(404).send('No existe un Usuario con ese nombre.');
    }else {
        res.send(unUsuario);
    };
});

router.post('/', (req, res, next) => {
	const nuevoUsuario = {
        nombre: req.body.nombre,
        mensajes: req.body.mensajes,
        conectado: req.body.conectado,
        seguidores: req.body.seguidores,
        siguiendo: req.body.siguiendo,
		puntuacion: req.body.puntuacion
    };
    fotored.push(nuevoUsuario);
    res.status(200).send(fotored);
});

router.delete("/:nombre", (req, res, next) => {
    let nombreUsuario = req.params.nombre;
    const unUsuario = fotored.find((usuario) => {
      return usuario.nombre === nombreUsuario;
    });
    //Si no existe devolver 404
    if (!unUsuario) {
      res.status(404).send("No existe un Usuario con semejante nombre.");
      return;
    }
    //!Si existe, eliminamos el usuario completo
    const posicion = fotored.indexOf(unUsuario);
    fotored.splice(posicion, 1);
    //!Informamos que usuario ha sido eliminado
    res.status(200).send(`Se ha eliminado toda la informacion del siguiente Usuario: ${unUsuario.nombre}`);
});

router.patch('/mensajes/:nombre', (req, res, next) => {
    let nombreUsuario = req.params.nombre;
    const unUsuario = fotored.find((usuario) => {
        return usuario.nombre === nombreUsuario;
      });
    let usuario = fotored.indexOf(unUsuario)
    const nuevoMensaje = req.body.mensaje; // A LA HORA DE AÑADIR EL MENSAJE EN JSON, ES CON MENSAJE, NO CON MENSAJES
    fotored[usuario].mensajes.push(nuevoMensaje);
    res.status(200).send(fotored[usuario]);
});

router.put("/estado/:nombre", (req, res, next) => {
   
    let nombreUsuario = req.params.nombre;
    const elUsuario = fotored.find((usuario) => {
      return usuario.nombre === nombreUsuario;
    });
    
    if (!elUsuario) {
      res.status(404).send("No hemos encontrado ese nombre");
      return;
    }
    
    elUsuario.conectado = req.body.conectado;

    res.status(200).send(elUsuario);
});

router.put("/puntuacion/:nombre", (req, res) => {
   
    let nombreUsuario = req.params.nombre;
    const elUsuario = fotored.find((usuario) => {
      return usuario.nombre === nombreUsuario;
    });
    // * Si no existe devolver 404
    if (!elUsuario) {
      res.status(404).send("No hemos encontrado ese nombre");
      return;
    }
    
    elUsuario.puntuacion = req.body.puntuacion;

    
    res.status(200).send(elUsuario);
});

module.exports = router; 