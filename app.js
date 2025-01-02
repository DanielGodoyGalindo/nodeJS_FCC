// Modulo events
import EventEmitter from 'node:events';

// crear nuevo emisor de eventos
const emisorProductos = new EventEmitter();
// indicar qué hacer cuando se reciba el evento 'compra'
// pasamos dos argumentos
emisorProductos.on('compra', (total, numProd) => {
    console.log(`Se realizó una compra por ${total}€`);
    console.log(`El num total de productos es: ${numProd}`);
});
// emitir evento 'compra'
emisorProductos.emit('compra', 500, 12);