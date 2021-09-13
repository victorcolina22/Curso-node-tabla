const fs = require('fs');
const colors = require('colors');



const crearArchivo = async (number = 5, listar = false, hasta = 10) => {

    try {

        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida  += `${number} x ${i} = ${number * i}\n`;
            consola += `${number} ${colors.red('x')} ${i} ${colors.red('=')} ${number * i}\n`;
        }

        if (listar) {

            console.log('====================='.cyan);
            console.log('     Tabla del:', colors.red(number));
            console.log('====================='.cyan);

            console.log(consola);

        }

        fs.writeFileSync(`./salida/tabla-${number}.txt`, salida);

        return `tabla-${number}.txt`;

    } catch (error) {
        throw error;
    }

};

module.exports = {
    crearArchivo
};
