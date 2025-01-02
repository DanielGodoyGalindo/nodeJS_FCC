// Las promesas son objetos de JavaScript
// Para crear una nueva promesa usamos el constructor new
// Como parametros le pasamos dos funciones que están ya definidas
// La primera es 'resolve' y se usa para indicar qué mensaje dar cuando se
// cumple la promesa. La segunda función es 'reject' y con ella indicaremos
// el mensaje cuando la promesa sea rechazada.
// Se podría ejecutar otro código pero para este ejemplo usamos cadenas de texto
// En este ejemplo usamos un booleano para decidir si la promesa se cumple o no
const promesaCumplida = true;

// Simulamos un tiempo asincrono con la funcion setTimeout
// para poner en práctica la creación de una promesa.
// Primero se define la promesa y se indica qué hacer en cada caso
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('¡Promesa cumplida!');
        } else {
            reject('Promesa rechazada...');
        }
    }, 2000);
});

// Ahora se consume la promesa. Los parámetros 'valor' son las cadenas de texto
// que hemos indicado en el 'resolve' y 'reject' de la promesa. Con la función
// .then() manejamos la promesa resuelta y con .catch() manejamos 
// la promesa rechazada. Se puede hacer solo con 'then' y pasarle
// dos funciones como parámetros .then(resolve,reject)
miPromesa
    .then(valorResuleto => console.log(valorResuleto))
    .catch(valorRechazado => console.log(valorRechazado));