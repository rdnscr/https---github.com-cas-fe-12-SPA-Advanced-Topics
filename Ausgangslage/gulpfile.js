var gulp = require('gulp'),
    durandal = require('gulp-durandal');

var dest = 'built/';


//
// simple build
//
gulp.task('durandal', function () {
    return durandal({ minify: true })
        .pipe(gulp.dest(dest + '/App'))
});

gulp.task('default', ['durandal']);