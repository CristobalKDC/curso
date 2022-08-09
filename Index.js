const express = require('express');
const app = express();
port = 3000;

app.use(express.json());
const rutaUsuarios= require('./routes/rutas-usuarios');

app.get('/', (req,res) => {
  res.send('Respuesta desde servidor al acceso al endpoint ')
});

app.use('/api/usuarios', rutaUsuarios);

app.use((req,res,next) => {
  res.status(404);
  res.json({
    mensaje: 'Usuario no encontrado.'
  });
});

app.listen(3000, () => console.log('Servidor escuchando en puerto 3000'));