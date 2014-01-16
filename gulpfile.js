var gulp = require('gulp');
var myth = require('gulp-myth');
var minifyCss = require('gulp-minify-css');

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
		gulp.run('build');
	});
});

gulp.task('build', ['default'], function () {
	gulp.src('./public/css/style.css')
		.pipe(minifyCss({
			keepSpecialComments: 0,
			relativeTo: __dirname + '/public/css'
		}))
		.pipe(gulp.dest('./public/build/'));
});

gulp.task('default', function () {
	gulp.run('styles');
});
