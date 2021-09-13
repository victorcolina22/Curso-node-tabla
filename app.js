const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');



console.clear();



// console.log(process.argv);
// console.log(argv);



// const [, , arg3 = 'base=5' ] = process.argv;
// const [ , number = 5 ] = arg3.split('=');



crearArchivo( argv.b, argv.l, argv.h )
    .then( archivo => console.log( archivo.cyan, 'creado' ) )
    .catch( err => console.log( err ))