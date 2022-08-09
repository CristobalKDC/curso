const express = require('express');
const app = express();
port = 3000;

app.use(express.json());
const rutaUsuarios= require('./routes/rutas-usuarios');

app.get('/', (req,res) => {
  res.send('Respuesta desde servidor al acceso al endpoint ')
});

app.use('/api/usuarios', rutaUsuarios);



const grupoUsuarios = [
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

app.get('/api/grupoUsuarios/', (req,res,next) => {
    res.json({
        usuarios: grupoUsuarios
    });
});

app.get('/api/grupoUsuarios/:id', (req, res, next) => {
	let idUsuario = parseInt(req.params.id);
    const unUsuario = grupoUsuarios.find((usuario) => {
        return usuario.id === idUsuario;
    });
    if (!unUsuario) {
        res.status(404).send('No existe un Usuario con ese ID.');
    }else {
        res.send(unUsuario);
    };
});

app.use((req,res,next) => {
  res.status(404);
  res.json({
    mensaje: 'Usuario no encontrado.'
  });
});

app.listen(3000, () => console.log('Servidor escuchando en puerto 3000'));