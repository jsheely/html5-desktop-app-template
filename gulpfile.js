var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var less = require('gulp-less');
var clean = require('gulp-clean');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');
var seq = require('run-sequence');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('clean', () => {
	return gulp.src('build', { read: false })
        .pipe(clean());
});

gulp.task('useref', (cb) => {
	return gulp.src('./src/index.html')
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(useref())
		.pipe(gulpif('*.css', less()))
		.pipe(gulp.dest('./build'));
});


gulp.task('jsx', () => {
	return gulp.src([
		'src/components/**/*.jsx',
		'src/main.jsx'
	])
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(concat('main.js'))
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest('./build/js'));
});


gulp.task('build', (cb) => {
	seq('clean', ['useref', 'jsx'], cb);
});

gulp.task('start', (cb) => {
	return gulp.src('build')
		.pipe(webserver({
			livereload: true,
			open: true
		}))
});

gulp.task('watch', ['start', 'build'], (cb) => {
	watch('src/**/*.*', (f) => {
		console.log('File changed: ', f.relative);
		gulp.start('build');
	});
});

gulp.task('default', ['build']);