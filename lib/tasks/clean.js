var gulp = require('gulp');
var del = require('del');

gulp.task("clean", function() {
  return del(['./temp/']).then(function(paths) {
  });
})

gulp.task("clean:json", function() {
  return del(['./temp/json/']).then(function(paths) {
  });
})