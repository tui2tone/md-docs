var gulp = require('gulp');
var del = require('del');

gulp.task("clean", function() {
  return del(['./temp/']).then(function(paths) {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
})

gulp.task("clean:json", function() {
  return del(['./temp/json/']).then(function(paths) {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
})