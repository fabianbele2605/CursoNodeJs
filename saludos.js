function saludar(nombre) {
    return `Hola, ${nombre}`;
}

function saludarHolamundo() {
    return "Hola, mundo!";
}

//module.exports.saludar = saludar;
//module.exports.saludarHolamundo = saludarHolamundo;

module.exports = {
    saludar: saludar,
    saludarHolamundo: saludarHolamundo
}