'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';

const tarks = requireDir("./tasks");

gulp.task('dev', () => {
  return runSequence('markdown','sass','browser-sync', 'watch');
});