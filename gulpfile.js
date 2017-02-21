var gulp = require('gulp');
var git = require('simple-git')

var shell = require('gulp-shell')
var misArgs = require('minimist')(process.argv.slice(2));

// Tarea para subir al repositorio.

gulp.task('push', function(){
	var mensaje_commit = misArgs.mensaje || "Realizando cambios en el plugin para despliegue en IaaS.";
	git()
		.add('.')
		.commit(mensaje_commit)
		.push('prueba_github', 'master');
});

// Tarea para publicar en el repositorio de GitBook.
gulp.task('ull', function(){
	var mensaje_commit = misArgs.mensaje || "Actualizando el libro GitBook";
	git()
		.add('.')
		.commit(mensaje_commit)
		.push('prueba_gitbook', 'master');
});

