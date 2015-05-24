'use strict';

var gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	minifyCss = require('gulp-minify-css'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	plugins = require('gulp-load-plugins')();

gulp.task('connect', function() {
	connect.server({
		root: 'public',
		livereload: true
	});
});

gulp.task('less', function () {
  	return gulp.src('src/less/all.less')
	    .pipe(less({
	    	paths: [ path.join(__dirname, 'less', 'includes') ]
	    }))
	    .pipe(gulp.dest('public/css'))
	    .pipe(minifyCss({compatibility: 'ie8'}))
	    .pipe(connect.reload());
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
