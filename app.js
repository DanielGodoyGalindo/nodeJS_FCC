// Modulo os
// obtener funcionalidad del sistema operativo usado con nodejs

// importacion 
// const os = require('node:os');
import os from 'node:os';

// Indica cual es el SO del equipo
console.log(os.type());

// Directorio principal del usuario
console.log(os.homedir());

// Numero de segundos transcurridos desde que se inició el equipo
console.log(os.uptime());

// Información del usuario
console.log(os.userInfo());