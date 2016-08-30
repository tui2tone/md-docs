var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

const tarks = requireDir("./lib/tasks");

gulp.task('start', function() {
  return runSequence('clean', 'markdown','sass', 'render', 'assets', 'clean:json', ['browser-sync','watch', 'js']);
});