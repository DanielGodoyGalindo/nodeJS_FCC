// Nodemon reinicia el servidor con cada cambio que realicemos en el código
// para iniciar el servidor se usa 'nodemon app.js'

import { createServer } from 'node:http';
const servidor = createServer((req, res) => {
    res.end('Hola Daniel!');
});

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
    console.log(`Escuchando por el puerto ${PUERTO}...`);
});