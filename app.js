// Ejemplo promesas pedidos de pizza

// Con Math.random() se obtiene una variable entre 0 y 1 (0.1, 0.2, 0.3 ... )
// Devolverá true si es mayor que 0.8 (mayoría de las veces)
const statusPedido = () => {
    return Math.random() > 0.8;
}

// Definición de la promesa
const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (statusPedido()) {
            resolve('Pedido realizado con éxito!');
        } else {
            reject('Ha ocurrido un error. Vuelve a realizar el pedido.');
        }
    }, 3000)
});

// Primera manera de consumir la promesa
/* const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
}
const rechazarPedido = (mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
}
miPedidoDePizza.then(manejarPedido, rechazarPedido); */

// Segunda maneda de consumir la promesa
// Method chaining
miPedidoDePizza
    .then(mensajeDeConfirmacion => console.log(mensajeDeConfirmacion))
    .catch(mensajeDeRechazo => console.log(mensajeDeRechazo));