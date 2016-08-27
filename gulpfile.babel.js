'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';

const tarks = requireDir("./tasks");

gulp.task('dev', () => {
  return runSequence('clean', 'markdown','sass', 'js','vendor','render','browser-sync', 'watch');
});