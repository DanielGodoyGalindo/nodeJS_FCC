function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto}`);
        setTimeout(() => {
            if (producto === 'taza') {
                resolve('Ordenando una taza...')
            } else {
                reject('Este producto no está disponible actualmente.');
            }
        }, 2000);
    });
}

function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por tu compra. Disfruta tu producto!');
        }, 4000);
    });
}

// Chaining promises
// Con la llamada de la función recibimos una promesa que es consumida con el primer .then()
// Al terminar la función se devuelve una nueva promesa que se consume con el siguiente .then()
// Si cualquiera de las dos funciones devuelven reject se capturan con .catch()
/* ordenarProducto('lapiz')
    .then(respuesta => {
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(error => {
        console.log(error);
    }); */

// Usando async y await podemos hacer que procesos asincronos se conviertan en sincronos
// se define una función con código asíncrono y await indica que se espere a que la respuesta
// se usa un bloque try catch para manejar un error (en este caso un reject de cualquiera de las promesas)
async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

// Devolverá otra promesa que puede ser consumida con .then() y .catch()
realizarPedido('lapiz');