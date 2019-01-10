var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var useref = require('gulp-useref');
// Other requires...
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');



gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});


gulp.task('default', function (callback) {
  runSequence(['sass','watch'],
    callback
  )
});



// Gulp watch syntax
gulp.watch('app/scss/**/*.scss', ['sass']); 
