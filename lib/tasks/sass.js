var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task("sass", function() {
  return gulp.src("./src/styles/app.sass")
    .pipe(sass())
    .pipe(postcss([ 
      autoprefixer({ browsers: ['last 2 versions'] })
    ]))
    .pipe(gulp.dest('temp/assets/css/'))
});