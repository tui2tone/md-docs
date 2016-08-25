'use strict';

import gulp from "gulp";
import concat from "gulp-concat";

const jsLibs = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/dist/js/bootstrap.js'
]

const cssLibs = [
  'bower_components/bootstrap/dist/css/bootstrap.css'
]

gulp.task('vendor', ['vendor:js', 'vendor:css']);

gulp.task('vendor:js', function () {
  return gulp.src(jsLibs)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('temp/js'))
});

gulp.task('vendor:css', function () {
  return gulp.src(cssLibs)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('temp/css'))
});