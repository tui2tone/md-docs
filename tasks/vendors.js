'use strict';

import gulp from "gulp";
import concat from "gulp-concat";

const jsLibs = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/bootstrap/dist/js/bootstrap.js',
  'node_modules/jquery-sticky/jquery.sticky.js'
]

const cssLibs = [
  'node_modules/bootstrap/dist/css/bootstrap.css',
  'node_modules/highlight.js/styles/androidstudio.css'
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