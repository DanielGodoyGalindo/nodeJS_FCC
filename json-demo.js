///////////// De JSON a objeto de JavaScript /////////////
/* // Para acceder al contenido de un fichero json hay que importarlo como un modulo
const curso = require('./curso.json');
// Ahora accederemos al fichero json como si fuese un objeto javascript
// Mostrar todo el objeto
console.log(curso);
// Acceder al objeto 'curso'
console.log(curso.titulo); */

///////////// De Objeto de JavaScript a JSON /////////////
// Definimos un objeto de JavaScript para convertirlo a json
let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45691,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};

// Objeto --> Cadena de caracteres
// convertir de objeto a texto en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso); 
console.log(infoCursoJSON); // datos del objeto en un cadena de texto
console.log(typeof (infoCursoJSON)); // string

// Cadena de caracteres --> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto); // mostrar como objeto de JavaScript
console.log(typeof (infoCursoObjeto)); // object
console.log(infoCursoObjeto.numVistas); // acceder a una propiedad del objeto
