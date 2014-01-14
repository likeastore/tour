var gulp = require('gulp');
var myth = require('gulp-myth');

gulp.task('styles', function () {
	gulp.src('./myth/*.css')
		.pipe(myth())
		.pipe(gulp.dest('./public/css'));
});

gulp.task('server', ['default'], function () {
	require('./server.js');
	gulp.run('watch');
});

gulp.task('watch', function () {
	gulp.watch('./myth/*.css', function () {
		gulp.run('styles');
	});
});

gulp.task('default', function () {
	gulp.run('styles');
});
