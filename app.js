// Módulo fs (filesystem)
// modulo que contiene funcionalidad util para trabajar con el sistema
// de archivos (leer, modificar, copiar, eliminar, renombrar)
// Todos los metodos son asincronos por defecto
// Se pueden escoger versiones sincronas de estos métodos agregando "sync"

import { appendFile, readFile, rename, unlink, writeFile } from 'node:fs';


//////////////// Metodos asincronos (por defecto) //////////////////////
// lectura de fichero index.html
/* readFile('./index.html', 'utf-8', (error, data) => {
  error ? console.log(error) : console.log(data);
}); */

// renombrar un fichero
/* rename('index.html', 'main.html', (error) => {
  if (error) {
    throw error;
  }
  console.log('Nombre de fichero modificado correctamente!');
}) */

// Agregar contenido al final de un archivo
/* appendFile('index.html', '<p>Hola</p>', (error) => {
  if (error) {
    throw error;
  }
  console.log('Fichero actualizado correctamente!');
}) */

// Reemplazar todo el contenido del archivo
/* writeFile('index.html', 'Contenido nuevo', (error) => {
  if (!error) {
    console.log('Contenido reemplazado con éxito');
  } else {
    throw error;
  }
}) */

// Eliminar fichero
/* unlink('fichero.txt', (error) => {
  if (error)
    throw error;
  console.log('Fichero eliminado con éxito!');
}) */

/////////////////// Metodos sincronos (añadiendo 'sync') /////////////////////
/* // lectura de fichero index.html
console.log('Antes de leer el fichero.');
console.log(readFileSync('index.html', 'utf-8'));
console.log('Despues de leer el fichero.');

// renombrar un fichero
console.log('Antes de renombrar el fichero.');
renameSync('index.html', 'main.html');
console.log('Despues de renombrar el fichero.');

// Agregar contenido al final de un archivo
console.log('Antes de agregar contenido en el fichero.');
appendFileSync('index.html', '<p>Hola</p>');
console.log('Despues de agregar contenido en el fichero.');

// Reemplazar todo el contenido del archivo
console.log('Antes de reemplazar todo el contenido en el fichero.');
writeFileSync('index.html', 'Contenido nuevo');
console.log('Despues de agregar contenido en el fichero.');

// Eliminar fichero
console.log('Antes de eliminar el fichero.');
unlinkSync('fichero.txt');
console.log('Despues de eliminar el fichero.'); */