const crear = {
	descripcion: {
		demand: true,
		alias: 'd',
		desc: 'Descripcion de la tare por hacer'
	}
};

const actualizar = {
	descripcion: {
		demand: true,
		alias: 'd',
		desc: 'Descripcion de la tare por hacer'
	},
	completado: {
		default: true,
		// demand: true,
		alias: 'c',
		desc: 'Marca como completado o pendiente la tarea'
	},
};

const borrar = {
	descripcion: {
		demand: true,
		alias: 'd',
		desc: 'Borra una tarea determina'
	}
};

const argv = require('yargs')
				.command('crear', 'Crear una tarea', crear)
				.command('actualizar', 'Actualiza el estado de una tarea', actualizar)
				.command('borrar', 'Borra una tarea', borrar)
				.help()
				.argv;

module.exports = {
	argv
};
