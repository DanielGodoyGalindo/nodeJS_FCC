// Routing en Node sin framework
import http from 'node:http';
import { infoCursos } from './cursos.js';
/* const cursos = require('./cursos'); */

// crear servidor
const servidor = http.createServer((req, res) => {
    const { method } = req; // desestructuración, obtener una propiedad del objeto req
    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metodo ${method} no puede ser manejado por el servidor.`);
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;
    // res.statusCode 200 OK por defecto no hace falta asignarlo / 404 not found
    if (path === '/') {
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    } else if (path === '/cursos') {
        return res.end(JSON.stringify(infoCursos));
    } else if (path === '/cursos/programacion') {
        return res.end(JSON.stringify(infoCursos.programacion));
    } else {
        res.statusCode = 404;
        return res.end('El curso solicitado no existe...');
    }
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;
    let body = '';
    if (path === '/cursos/programacion') {
        // al recibir datos, obtener cuerpo de la solicitud
        req.on('data', contenido => {
            body += contenido.toString();
        });
        // para terminar
        req.on('end', () => {
            console.log(body);
            console.log(typeof body); // --> string
            body = JSON.parse(body); // convertir a objeto de js
            console.log(typeof body); // --> object
            console.log(body.titulo); // acceso a la propiedad del objeto --> Aprende Node.js
            res.end(`El servidor recibio una solicitud POST para ${path}`);
        });
        // return res.end(`El servidor recibio una solicitud POST para ${path}`);
    }
}

// Metodo para hacer que el servidor escuche peticiones
const PUERTO = 3000;
servidor.listen(PUERTO, () => {
    console.log(`El servidor está escuchando por el puerto ${PUERTO}...`);
})