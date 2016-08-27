
var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

const tasks = requireDir("./tasks");

gulp.task('start', function() {
  return runSequence('clean', 'markdown','sass', 'js','vendor','render','browser-sync', 'watch');
});

function start() {
  gulp.start('start');
}

module.exports = start;