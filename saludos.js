// funciones definidas
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
// funciones definidas
function saludarHolamundo() {
    return "Hola, mundo!";
}

// Exportacion de la funcion metodo 1
//module.exports.saludar = saludar;
//module.exports.saludarHolamundo = saludarHolamundo;

//Exportacionde la funcion metodo 2
module.exports = {
    saludar: saludar,
    saludarHolamundo: saludarHolamundo
}