var gulp = require('gulp');
var myth = require('gulp-myth');
var minifyCss = require('gulp-minify-css');
var concatJs = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('myth', function () {
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
		gulp.run('myth', 'build');
	});
});

gulp.task('build', function () {
	gulp.src('./public/css/style.css')
		.pipe(minifyCss({
			keepSpecialComments: 0,
			relativeTo: __dirname + '/public/css'
		}))
		.pipe(gulp.dest('./public/build/'));

	gulp.src('./public/js/*.js')
		.pipe(concatJs('scripts.js'))
		.pipe(gulp.dest('./public/build'))
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/build'));
});

gulp.task('default', function () {
	gulp.run('myth', 'build');
});
