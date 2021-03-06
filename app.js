/**
 * Todo
 *
 * node app crear -descripcion "pasear al perro"
 * node app listar
 * node app actualizar -d "Pasear al perro" -c true
 */

// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

// console.log(argv);

let comando = argv._[0];

switch( comando ) {
	case 'crear':
		// console.log('crear una nueva tarea');
		let tarea = porHacer.crear(argv.descripcion);
		console.log(tarea);
	break;

	case 'listar':
		let listado = porHacer.getListado();
		for (let tarea of listado) {
			console.log('==================='.green);
			console.log('Tarea: ', tarea.descripcion);
			console.log('Estado: ', tarea.completado);
			// console.log('', tarea);
		}
		// console.log('listar todas las tareas por hacer')
	break;

	case 'actualizar':
		let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);
		// console.log('actualizar una tarea existente')
	break;

	case 'borrar':
		let borrado = porHacer.borrar(argv.descripcion);
		console.log(borrado);
	break;

	default:
		console.log('Comando no es reconocido');
	break;
}