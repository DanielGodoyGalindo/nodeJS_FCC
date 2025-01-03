// Modulo URL
// Realmente es una clase de Node y no hace falta importa nada para usarse

// Ejemplo de URL y dfe como poder obtener cada una de sus partes
const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');
console.log(miURL.hostname); // obtener subdominio + dominio + dominio primer nivel --> www.ejemplo.org
console.log(miURL.pathname); // obtener ruta --> /cursos/programacion
console.log(miURL.searchParams); // devuelve un objeto --> URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(miURL.searchParams.get('ordenar')); // obtener valor a partir de una clave --> vistas