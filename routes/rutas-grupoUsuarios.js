const express = require('express');
const router = express.Router();

const usuarios = [
    {
      id: 1,
      nombre: 'Valka',
      apellidos: 'Dondarr',
      dni: '42.556.777-M',
      email: 'valka@sunmmail.com',
      password: 'valkita98?=',
    },
    {
      id: 2,
      nombre: 'Adrián',
      apellidos: 'Santos',
      dni: '43.123.444-B',
      email: 'adrian@sunmmail.com',
      password: 'adsan45*!',
    },
    {
      id: 3,
      nombre: 'Cristo',
      apellidos: 'Rey Santos',
      dni: '42.111.222-C',
      email: 'inri@sunmmail.com',
      password: 'inricrist0?¿=',
    },
    {
      id: 4,
      nombre: 'Lucifer',
      apellidos: 'Hell Hell',
      dni: '66.666.666-A',
      email: 'lucihell@sunmmail.com',
      password: '66666666',
    },
    {
      id: 5,
      nombre: 'Valdimiro',
      apellidos: 'Rebollo',
      dni: '41.544.778-O',
      email: 'vladi@sunmmail.com',
      password: 'vladiFuckYou4U,:*',
    },
    {
      id: 6,
      nombre: 'Lara',
      apellidos: 'Sanz',
      dni: '43.566.622-F',
      email: 'laraz@sunmmail.com',
      password: 'larili456',
    }];

router.get('/', (req,res,next) => {
    res.json({
        usuarios: usuarios
    });
});

router.get('/:id', (req, res, next) => {
	let idUsuario = parseInt(req.params.id);
    const unUsuario = usuarios.find((usuario) => {
        return usuario.id === idUsuario;
    });
    if (!unUsuario) {
        res.status(404).send('No existe un Usuario con ese ID.');
    }else {
        res.send(unUsuario);
    };
});

module.exports = router; 