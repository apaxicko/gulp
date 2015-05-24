'use strict';

var gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	csso = require('gulp-csso'),
	rename = require("gulp-rename"),
	notify = require("gulp-notify"),
	plugins = require('gulp-load-plugins')();

gulp.task('connect', function() {
	connect.server({
		root: 'public',
		livereload: true
	});
});

gulp.task('less', function () {
  	gulp.src('src/less/all.less')
	    .pipe(less({
	    	paths: [ path.join(__dirname, 'less', 'includes') ]
	    }))
	    .pipe(csso())
	    .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./public/css/'))
	    .pipe(connect.reload())
	    .pipe(notify('Success!'));
});

gulp.task('uglify', function() {
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

gulp.task('watch', function() {
	gulp.watch('src/less/*.less', ['less'])
});

gulp.task('default', ['connect', 'less', 'watch']);
