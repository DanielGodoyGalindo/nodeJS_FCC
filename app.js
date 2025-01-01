// Módulo timers
// Contiene funciones que ejecutan código despues de un cierto periodo
// de tiempo (podemos simular eventos asíncronos)



function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

const sumar = (a, b) => {
  console.log(a + b);
}

//////// setTimeout() --> ejecutar código despues de un número de milisegundos
// setTimeout(funcion,milisegundos,[argumentos])
// setTimeout(mostrarTema, 3000, 'Node.js');
// setTimeout(sumar, 2000, 5, 6);

/////////// setImmediate() -->
// Se usa para ejecutar código asíncrono en la próxima
// iteración del ciclo de eventos (lo más pronto posible)
// setImmediate(funcion,argumento1,argumento2)
// se ejecuta despues del código síncrono
/* console.log('Antes de setImmediate()');
setImmediate(mostrarTema, 'Node.js'); --> se ejecuta el último
console.log('Después de setImmediate()'); */

//////// setInterval() --> ejecutar un códgio un numero infinito de veces
// setInterval(funcion,intervalo,[arg1,arg2,...])
// setInterval(mostrarTema,2000,'Node.js');
// setInterval(sumar, 1500, 3, 4);