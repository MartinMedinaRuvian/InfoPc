const os = require("os");
const fs = require("fs");

var info = 'USER=' + os.userInfo().username + '\n'
    + 'NOMBRE_PC=' + os.hostname() + '\n'
    + 'WIN=' + os.version() + '\n'
    + 'RAM=' + parseInt(((os.totalmem()) / 1048576)) + '\n'
    + 'SO_TIPO=' + os.type() + '\n'
    + 'PLATAFORMA_SO=' + os.platform + '\n'
    + 'CPU=' + os.cpus()[0].model + '\n'
    + 'ARQUITECTURA=' + os.arch();

function crearArchivo() {
    fs.appendFile('info.txt', info, (error) => {
        if (error) {
            throw error;
        }
        console.log('El archivo se creo correctamente');
    });
}

function crearArchivoInfo() {
    if (existeArchivoInfo()) {
        if (eliminarArchivoInfo()) {
            crearArchivo();
        }
    } else {
        crearArchivo();
    }
}

function existeArchivoInfo() {
    return fs.existsSync('./info.txt');
}

function eliminarArchivoInfo() {
    let correcto = false;
    try {
        fs.unlinkSync('./info.txt');
        correcto = true;
    } catch (error) {
        console.log('Error ', error);
    }
    return correcto;
}

crearArchivoInfo();